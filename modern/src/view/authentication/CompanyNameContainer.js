Ext.define('Admin.view.authentication.CompanyNameContainer', {
    extend: 'Ext.Container',
    xtype: 'company-name-container',

    padding: '20 0 0 20',

    listeners:{
        initialize : function(cmp){
            cmp.setHtml('<center><b>'+Admin.getApplication().companyName+'</b></center>');
        }
    }
});
