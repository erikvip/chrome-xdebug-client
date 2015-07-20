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
        cls: 'sencha-logo',
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
        text: 'Cancel',
        itemId: 'cancel-download-btn',
        disabled: true
    },{
        xtype: 'label',
        cls: 'messages-ct',
        itemId: 'messages-ct',
        flex: 1
    }]
});