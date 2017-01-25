cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-googlemaps.cordova-plugin-googlemaps",
        "file": "plugins/cordova-plugin-googlemaps/www/googlemaps-cdv-plugin.js",
        "pluginId": "cordova-plugin-googlemaps",
        "clobbers": [
            "cordova-plugin-googlemaps"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-keychain-touch-id.TouchID",
        "file": "plugins/cordova-plugin-keychain-touch-id/www/touchid.js",
        "pluginId": "cordova-plugin-keychain-touch-id",
        "clobbers": [
            "window.plugins.touchid"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "com.googlemaps.ios": "2.1.1",
    "cordova-plugin-googlemaps": "1.4.0",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-keychain-touch-id": "3.2.1"
};
// BOTTOM OF METADATA
});