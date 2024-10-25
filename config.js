module.exports = {
    catalogUrl: '#PUBLIC_URL#/catalog.json',
    catalogTitle: "STAC Browser",
    allowExternalAccess: true, // Must be true if catalogUrl is not given
    allowedDomains: [],
    whitelistedExternalCatalogs: [
        "https://gp-sit-us-east-1-public-configs.s3.amazonaws.com/stac/national_map/catalog.json",
        "https://gp-sit-us-east-1-public-configs.s3.amazonaws.com/stac/test_census_tiger/catalog.json",
        "https://landsat-stac.s3.amazonaws.com/catalog.json",
        "https://franklin.nasa-hsi.azavea.com/",
        "https://cmr.earthdata.nasa.gov/stac",
        "https://cmr.earthdata.nasa.gov/cloudstac",
        "https://nasa-iserv.s3-us-west-2.amazonaws.com/catalog/catalog.json",
        "https://cmr.earthdata.nasa.gov/stac",
        "https://raw.githubusercontent.com/scottyhq/sentinel1-rtc-stac/main/collection.json",
        "https://tamn.snapplanet.io",
        "https://earth-search.aws.element84.com/v0/collections/sentinel-s2-l2a",
        "https://stacindex.org/api/proxy?https%3A%2F%2Fmeeo-s5p.s3.amazonaws.com%2Fcatalog.json",
        "https://sentinel-stac.s3.amazonaws.com/catalog.json",
        "https://usgs-lidar-stac.s3-us-west-2.amazonaws.com/ept/catalog.json",
        "https://asc-stacbrowser.s3.us-west-2.amazonaws.com/catalog.json",
        "https://landsatlook.usgs.gov/stac-server",
    ],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
//      "de-CH",
        "es",
        "en",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: true,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=" + encodeURIComponent(asset.href.startsWith("/vsi") ? asset.href : href),
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showThumbnailsAsAssets: false,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    preprocessSTAC: null,
    authConfig: null,
    preprocessSTAC: (stac, state) => {
        if (stac.getBrowserPath() === '/external/stac.asf.alaska.edu/') {
            stac.title = 'Alaska Satellite Facility'
            stac.description = 'The Alaska Satellite Facility is part of the Geophysical Institute of the University of Alaska Fairbanks, located on the Troth Yeddha’ campus.';
        } else if (stac.getBrowserPath() === '/external/landsatlook.usgs.gov/stac-server/') {
            stac.title = 'USGS Landsat Collection 2 data'
            stac.description = 'LandsatLook is a tool that allows rapid online viewing and access to the USGS Landsat Collection 2 data. LandsatLook leverages resources available via a commercial cloud environment including Cloud Optimized GeoTIFF (COG) and Spatio Temporal Asset Catalog (STAC) metadata.';
        }
        return stac;
    }
};
