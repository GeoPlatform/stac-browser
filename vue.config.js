const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;
// Clean-up arguments
delete argv._;
delete argv.$0;

const path = require('path');
const configFile = path.resolve(argv.CONFIG ? argv.CONFIG : './config.js');
const configFromFile = require(configFile);
const mergedConfig = Object.assign({}, configFromFile, argv);

module.exports = {
	publicPath: mergedConfig.pathPrefix,
	transpileDependencies: ['stac-layer'],
	chainWebpack: webpackConfig => {
		webpackConfig.plugin('define').tap(args => {
			args[0].CONFIG = JSON.stringify(mergedConfig);
			return args;
		});
		webpackConfig.plugin('html').tap(args => {
			args[0].title = mergedConfig.title;
			return args;
		});
	}
}