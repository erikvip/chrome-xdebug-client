/**
 * Main toolbar container and button handlers
*/
Ext.define('Cxc.view.Toolbar', {
    extend : 'Ext.Container',
    xtype: 'xdebugtoolbar',
    region: 'north',
    itemId: 'xdebugtoolbar',
    defaultType: 'button',
    height: 50,
    layout: {
        type: 'hbox',
        align: 'middle',
        overflowHandler: 'Menu'
    },
    items: [{
        xtype: 'label',
        text: 'XDebug'
    },{
        text: 'Listen',
        itemId: 'listen-btn',
        enableToggle : true,
        iconCls: 'ico-download-button-arrow',
        handler : function() {
            if (this.pressed) {
                Ext.data.PostMessage.request({
                    key     : 'xdebug-listen',
                    params  : {}, 
                    success : function(d) { 
                        console.log(arguments);
                    }
                });

            }       
        }
    },{
        text: 'Step Over',
        id : 'xdebug-button-step_over',
        handler : function() {
            Ext.data.PostMessage.request({
                key     : 'xdebug-step_over'
            });
        }
    },{
        text: 'Step Into',
        id : 'xdebug-button-step_into',
        handler : function() {
            Ext.data.PostMessage.request({
                key     : 'xdebug-step_into'
            });
        }
    },{
        xtype: 'label',
        cls: 'messages-ct',
        itemId: 'messages-ct',
        flex: 1
    }]
});