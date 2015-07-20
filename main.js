(function() {

    /**
     * On page load create iframe and associate
     * listeners for the media player
     */
    window.addEventListener('DOMContentLoaded', function() {

        var iframe = document.getElementById('sandbox-frame');

        iframeWindow = iframe.contentWindow;

    }, false);



    /**
     * For each post message from the iframe, dispatch to the right action.
     */
/*     
    window.addEventListener('message', function(e) {
        var data= e.data,
            key = data.key;

        console.log('[index.js] Post Message received with key ' + key);

        switch (key) {
            case 'extension-baseurl':
                extensionBaseUrl(data);
                break;

            case 'upnp-discover':
                upnpDiscover(data);
                break;

            case 'upnp-browse':
                upnpBrowse(data);
                break;

            case 'play-media':
                playMedia(data);
                break;

            case 'download-media':
                downloadMedia(data);
                break;

            case 'cancel-download':
                cancelDownload(data);
                break;

            default:
                console.log('[index.js] unidentified key for Post Message: "' + key + '"');
        }
    }, false);
*/
    /**
     * Post Message Actions
     */
/*     
    function sendMessage(data) {
        iframeWindow.postMessage(data, '*');
    }

    function extensionBaseUrl(data) {
        //data.result = chrome.extension.getURL('/');
        data.result = '/';
        sendMessage(data);
    }
*/


}());