/**
 * Variable drop down list
*/
Ext.define('Cxc.view.Variables', {
    xtype : 'xdebugvariables',
    extend: 'Ext.tree.Panel', 
    frame : false,
    bodyStyle : 'overflow: scroll',
    html : '', 
    tbar : [
        {
            xtype : 'button', 
            text : 'Load variables', 
            handler : function() {
                Ext.data.PostMessage.request({
                    key     : 'xdebug-context_names',
                    params  : {}
                });
            }
        }
    ], 

    initComponent: function() {
        Ext.apply(this, {
            store : Ext.create('Ext.data.TreeStore', {
                root : {
                    text : 'Variables',
                    expanded : true, 
                    children : []
                }
            })
        });

        this.callParent();

        Ext.EventManager.on(window, 'message',  this.onMessage, this);

    },
    onMessage: function(e) {
        var me = this;
        var d = e.browserEvent.data; 
        if (d.key=='context_names') {
            //var root = me.getStore().getRootNode(); 
//            console.log
            var node;
            //if (d.contextid == 'root')
              //  node = me.getStore().getRootNode(); 
            //else 
                var node = me.getStore().getNodeById(d.context);

            for (i in d.data) { 
                console.log(d.data[i]);
                node.appendChild({
                    text : d.data[i].name, 
                    id : d.data[i].id
                });
            }
        }
    }, 
    listeners : {
        cellclick : function(tree, td, cellIndex, record, tr, rowIndex, e) {
            //Retreive the variable using context_Get
            var id = record.get('id'); 
            if (id !== 'root') {
                Ext.data.PostMessage.request({
                    key     : 'xdebug-context_get',
                    params  : {id : id}
                });
            }
//            console.log(item);
  //          console.log(arguments);
//                console.log(record);
//                console.log(record.get('id'));
            //return false;

        }
    }
});