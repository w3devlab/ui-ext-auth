Ext.define('Admin.view.authentication.TitleContainer', {
    extend: 'Ext.Container',
    xtype: 'title-container',

    padding: '20 0 0 20',

    listeners:{
        initialize : function(cmp){
            cmp.setHtml('<center><b>'+cmp.getHtml()+'</b></center>');
        }
    }
});
