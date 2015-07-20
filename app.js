/**
 * @class Cxc.Application
 * @singleton
 * Starts up the application, defining the namespace, loading up the baseUrl from the 
 * parent page, and creating the {@link VP.view.Viewport}
 */
Ext.data.PostMessage.request({
    key     : 'extension-baseurl',
    success : function(baseUrl) {
        
        //PostMessage for handling Chrome extension sanbox
        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'Ext.data.proxy.PostMessage': baseUrl + 'app/Ext/data/proxy/PostMessage.js'
            }
        });

        //Load Cxc from app/Cxc instead of just /Cxc
        Ext.Loader.setPath('Cxc', baseUrl + 'app/Cxc');
    
        //Chrome sandbox doesn't seem to like Sync loading, so we must explicity state each class file...
        Ext.require([
            'Ext.data.proxy.PostMessage', 
            'Ext.util.KeyNav', 
            'Cxc.view.Viewport', 
            'Cxc.view.Source', 
            'Cxc.view.Toolbar'
        ]);
        //Main init
        Ext.application({
            name: 'Cxc',
//            appFolder: baseUrl + 'app/Cxc',
           
            launch:function() {
                var vp = Ext.create('Cxc.view.Viewport');

                window.addEventListener('message', function(e) {

                    vp.fireEvent('message');
//                    vp.items.each(function(){ 
  //                      console.log(this);
    //                    this.fireEvent('message'); 
                    //});
//                    console.log('App.js event:');console.log(e);
                });

            }
        });
    }
});