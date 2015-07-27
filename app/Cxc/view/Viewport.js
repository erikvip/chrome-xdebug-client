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
        xtype : 'xdebugvariables', 
        region : 'east',
        title : 'Variables',
        collapsible : true, 
        width: 200
    },{
        xtype: 'xdebugsource',
        title : 'Source',
//        layout: 'fit',
        region: 'center'
    },{
        xtype: 'panel',
        region: 'south', 
        title : 'Stacktrace',
        height: 100,
        collapsible : true
    }]
});