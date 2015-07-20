/**
 * @class VP.Application
 * @singleton
 * Starts up the application, defining the namespace, loading up the baseUrl from the 
 * parent page, and creating the {@link VP.view.Viewport}
 */
Ext.require([
    'Ext.util.KeyNav'
]);
Ext.data.PostMessage.request({
    key     : 'extension-baseurl',
    success : function(baseUrl) {
        
        //debugger;
        
        //<debug>
        Ext.Loader.setConfig({
            enabled: true,
            paths: {
                'Ext.data.proxy.PostMessage': baseUrl + 'lib/ext/data/proxy/PostMessage.js'
            }
        });
    
        Ext.require([
            'Ext.data.proxy.PostMessage'
        ]);
        //</debug>
    

        Ext.application({
            name: 'VP',
            appFolder: baseUrl + 'app',
            items : [
                {
                    xtype : 'panel', 
                    html : 'asdfasdfadsfdasf'
                }
            ],
            controllers: [
//                'MediaExplorer',
//                'MediaServers'
            ],
            
            launch:function() {

                //Ext.create('VP.view.Viewport');
                var data =  [
                    { name: 'zzzzzzz', email: 'bob@somedomain.com' },
                    { name: 'Suzy', email: 'suzy@somedomain.com' },
                    { name: 'Tom', email: 'tom@somedomain.com' },
                    { name: 'Peter', email: 'peter@somedomain.com' },
                    { name: 'Mike', email: 'mike@somedomain.com' }
                    ];
                var store = Ext.create('Ext.data.Store', {
                data: data,
                fields: ['name', 'email']
                });
/*                
                var d = Ext.create('Ext.grid.Panel', {
                renderTo: Ext.getBody(),
                height: 200,
                width: 500,
                title: 'Basic Grid',
                store: store,
                columns: [
                {
                text: 'Name',
                dataIndex: 'name'
                },
                {
                text: 'E-mail',
                dataIndex: 'email',
                flex: 1
                }
                ]
                });
*/
                var p = Ext.create('Ext.panel.Panel', {
                    renderTo : Ext.getBody(),
                    height: 800, 
                    width: 800,
                    html : 'asdfljasdlfkjasdfjdksj', 
                    afterrender: function() {
//                        this.callParent(arguments);
                    }
                });  

                Ext.getDoc().on('keypress', function(e,t) {
                    console.log(e);
                });          
            }
        });
    }
});