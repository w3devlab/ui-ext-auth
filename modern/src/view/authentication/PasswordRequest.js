Ext.define('Admin.view.authentication.PasswordRequest', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'passwordrequest',

    requires: [
        'Ext.field.Text',
        'Ext.field.Email'
    ],

    controller: 'main',
    
    items: [{
        xtype:'panel',
        minWidth: 300,
        items: [{
            xtype: 'title-container',
            html: 'PASSWORD REQUEST'
        },{
            xtype: 'formpanel',
            id: 'passwordRequestFormId',
            reference: 'passwordRequestForm',
            waitMsg: 'Please Wait ...',

            viewModel: {
                type: 'passwordrequest' 
            },             
            
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            items: [{
                xtype: 'container',
                cls: 'x-color-red',
                bind: {
                    html: '{msg}'
                }
            },{
                xtype: 'emailfield',
                placeHolder: 'example@example.com',
                name: 'email',
                bind: '{credentials.email}',
                clearIcon: true
            },{
                xtype: 'button',
                text: 'Send',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                ui: 'action',
                width: '100%',
                handler: 'onPasswordRequestClick',
                bind: {
                    disabled: '{!isPasswordRequestModelOk}'
                }                
            },{
                xtype: 'button',
                text: 'Cancel',
                iconAlign: 'left',
                iconCls: 'x-fa fa-angle-left',
                ui: 'gray-button',
                handler: 'onToLogin',
                width: '100%'
            }]
        }]
    }]
});
