/**
 * Defines the main viewport 
 */
Ext.define('Cxc.view.Viewport',{
    extend: 'Ext.container.Viewport',
    layout: 'border',
    items: [{
        xtype : 'xdebugtoolbar', 
        region : 'north'
    },{
        xtype: 'panel',
        region: 'west'
    },{
        xtype: 'container',
        itemId: 'viewport-center',
        layout: 'fit',
        region: 'center',
        items: {
            xtype: 'xdebugsource'
        }
    }]
});