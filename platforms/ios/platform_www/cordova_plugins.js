cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    },
    {
        "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
        "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
        "pluginId": "cordova-plugin-wkwebview-engine",
        "clobbers": [
            "cordova.exec"
        ]
    },
    {
        "id": "com.salesforce.plugin.oauth",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.oauth.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.plugin.network",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.network.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.plugin.sdkinfo",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sdkinfo.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.plugin.smartstore",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.js",
        "pluginId": "com.salesforce",
        "clobbers": [
            "navigator.smartstore"
        ]
    },
    {
        "id": "com.salesforce.plugin.smartstore.client",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartstore.client.js",
        "pluginId": "com.salesforce",
        "clobbers": [
            "navigator.smartstoreClient"
        ]
    },
    {
        "id": "com.salesforce.plugin.sfaccountmanager",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.sfaccountmanager.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.plugin.smartsync",
        "file": "plugins/com.salesforce/www/com.salesforce.plugin.smartsync.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.bootstrap",
        "file": "plugins/com.salesforce/www/com.salesforce.util.bootstrap.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.event",
        "file": "plugins/com.salesforce/www/com.salesforce.util.event.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.exec",
        "file": "plugins/com.salesforce/www/com.salesforce.util.exec.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.logger",
        "file": "plugins/com.salesforce/www/com.salesforce.util.logger.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.promiser",
        "file": "plugins/com.salesforce/www/com.salesforce.util.promiser.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "com.salesforce.util.push",
        "file": "plugins/com.salesforce/www/com.salesforce.util.push.js",
        "pluginId": "com.salesforce"
    },
    {
        "id": "phonegap-plugin-barcodescanner.BarcodeScanner",
        "file": "plugins/phonegap-plugin-barcodescanner/www/barcodescanner.js",
        "pluginId": "phonegap-plugin-barcodescanner",
        "clobbers": [
            "cordova.plugins.barcodeScanner"
        ]
    },
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Barcode",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/barcode.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Barcode"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.BarcodePicker",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/barcodepicker.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.BarcodePicker"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.License",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/license.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.License"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Margins",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/margins.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Margins"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Point",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/point.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Point"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Quadrilateral",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/quadrilateral.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Quadrilateral"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Rect",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/rect.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Rect"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.ScanOverlay",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/overlay.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.ScanOverlay"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.ScanSession",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/session.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.ScanSession"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.ScanSettings",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/settings.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.ScanSettings"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.SymbologySettings",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/symbologysettings.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.SymbologySettings"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.ScanCase",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/scancase.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.ScanCase"
        ]
    },
    {
        "id": "com.mirasense.scanditsdk.plugin.Constraints",
        "file": "plugins/com.mirasense.scanditsdk.plugin/src/constraints.js",
        "pluginId": "com.mirasense.scanditsdk.plugin",
        "clobbers": [
            "Scandit.Constraints"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "es6-promise-plugin.Promise",
        "file": "plugins/es6-promise-plugin/www/promise.js",
        "pluginId": "es6-promise-plugin",
        "runs": true
    },
    {
        "id": "manateeworks-barcodescanner-v3.Scanner",
        "file": "plugins/manateeworks-barcodescanner-v3/www/MWBScanner.js",
        "pluginId": "manateeworks-barcodescanner-v3",
        "clobbers": [
            "mwbScanner"
        ]
    },
    {
        "id": "cordova-plugin-vibration.notification",
        "file": "plugins/cordova-plugin-vibration/www/vibration.js",
        "pluginId": "cordova-plugin-vibration",
        "merges": [
            "navigator.notification",
            "navigator"
        ]
    },
    {
        "id": "com.lampa.startapp.startapp",
        "file": "plugins/com.lampa.startapp/www/startApp.js",
        "pluginId": "com.lampa.startapp",
        "merges": [
            "startApp"
        ]
    },
    {
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "id": "cordova-plugin-themeablebrowser.themeablebrowser",
        "file": "plugins/cordova-plugin-themeablebrowser/www/themeablebrowser.js",
        "pluginId": "cordova-plugin-themeablebrowser",
        "clobbers": [
            "cordova.ThemeableBrowser"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-device": "1.0.1",
    "phonegap-plugin-push": "1.5.0",
    "cordova-plugin-wkwebview-engine": "1.1.2",
    "com.salesforce": "5.1.0",
    "phonegap-plugin-barcodescanner": "6.0.6",
    "cordova-plugin-console": "1.0.7",
    "com.mirasense.scanditsdk.plugin": "5.2.1",
    "cordova-plugin-dialogs": "1.3.3",
    "es6-promise-plugin": "4.1.0",
    "manateeworks-barcodescanner-v3": "3.0.30",
    "cordova-plugin-vibration": "2.1.5",
    "com.lampa.startapp": "0.1.4",
    "cordova-plugin-inappbrowser": "1.7.1",
    "cordova-plugin-themeablebrowser": "0.2.17",
    "cordova-plugin-statusbar": "2.2.3"
};
// BOTTOM OF METADATA
});