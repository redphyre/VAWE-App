cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-armsoft-statusbar.statusbar",
        "file": "plugins/cordova-plugin-armsoft-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-armsoft-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-armsoft-statusbar": "1.1.0"
};
// BOTTOM OF METADATA
});