/**
 * Source View Panel Widget
*/
Ext.define('Cxc.view.Source', {
    xtype : 'xdebugsource',
    extend: 'Ext.panel.Panel', 
    frame : true,
    html : '', 
    initComponent: function() {
        this.callParent();

        Ext.EventManager.on(window, 'message',  this.onMessage, this);
    },
    onMessage: function(e, me) {
        var d = e.browserEvent.data; 
//        console.log(d);
  //      console.log(this);

        if (d.key=='populateCodeView') {
            this.update(d.html);
//            console.log(d.html);
            //Append data
//            this.update(this.body.dom.innerHTML + d.html);
        }
    }
});