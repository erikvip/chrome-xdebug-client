/**
 * Source View Panel Widget
*/
Ext.define('Cxc.view.Source', {
    xtype : 'xdebugsource',
    extend: 'Ext.panel.Panel', 
    html : 'asdf', 
    initComponent: function() {
        this.callParent();
        this.relayEvents(Ext.getDoc(), ['message']);
    },
    listeners : {
        'message' : function() {
            console.log('message');
        }
    }
});