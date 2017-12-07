Ext.define('Admin.view.authentication.TermsContainer', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'terms',

    requires: [
        'Ext.layout.Fit'
    ],


    controller: 'main',
    padding: 20,

    items: [{
        xtype: 'panel',
        
        maxWidth: 600,
        minWidth: 300,  

        layout: 'fit',
        listeners:{
            painted : function(cmp){
                Ext.Ajax.request({
                    url: Admin.getApplication().api.terms,
                    success: function(response, opts) {

                        var html = response.responseText.replace(/(?:\r\n|\r|\n)/g, '<br />');
                        Ext.getCmp('termsPanelId').setHtml(html);
                    },

                    failure: function(response, opts) {
                        Ext.Msg.alert('Error', 'server-side failure with status code ' + response.status, Ext.emptyFn);                            
                    }
                });                    

            }
        },        
        items: [{
            xtype: 'panel',
            padding: 20,
            id: 'termsPanelId',
            reference: 'termsPanel',
            height: 400,              
            
            hideOnMaskTap: true,

            styleHtmlContent: true,
            scrollable: true,
            items: [{
                    docked: 'top',
                    xtype: 'toolbar',
                    title: 'TERMS OF USE'
                },
                {
                    docked: 'bottom',
                    xtype: 'toolbar',
                    items:[
                        {
                            xtype: 'button',

                            text: 'Done',
                            ui: 'gray-button',
                            handler: 'onToRegister',
                            width: '100%'
                        }                        
                    ]
                }
            ]             

        }]
    }],

});