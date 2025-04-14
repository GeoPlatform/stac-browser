module.exports = {
    catalogUrl: '#PUBLIC_URL#/catalog.json',
    catalogTitle: "GeoPlatform STAC",
    allowExternalAccess: true, // Must be true if catalogUrl is not given
    allowedDomains: [],
    whitelistedExternalCatalogs: [],
    detectLocaleFromBrowser: true,
    storeLocale: true,
    locale: "en",
    fallbackLocale: "en",
    supportedLocales: [
        "de",
        "ar",
//      "de-CH",
        "es",
        "en",
//      "en-GB",
//      "en-US",
        "fr",
//      "fr-CA",
//      "fr-CH",
        "it",
//      "it-CH",
        "ro",
        "ja",
        "pt",
//      "pt-BR"
    ],
    apiCatalogPriority: null,
    useTileLayerAsFallback: true,
    displayGeoTiffByDefault: false,
    buildTileUrlTemplate: ({href, asset}) => "https://tiles.rdnt.io/tiles/{z}/{x}/{y}@2x?url=" + encodeURIComponent(href),
    stacProxyUrl: null,
    pathPrefix: "/",
    historyMode: "history",
    cardViewMode: "cards",
    cardViewSort: "asc",
    showThumbnailsAsAssets: false,
    showKeywordsInItemCards: true,
    showKeywordsInCatalogCards: true,
    stacLint: true,
    geoTiffResolution: 128,
    redirectLegacyUrls: false,
    itemsPerPage: 12,
    maxItemsPerPage: 1000,
    defaultThumbnailSize: null,
    maxPreviewsOnMap: 50,
    crossOriginMedia: null,
    requestHeaders: {},
    requestQueryParameters: {},
    socialSharing: ['email', 'bsky', 'mastodon', 'x'],
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
