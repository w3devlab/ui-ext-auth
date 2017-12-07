Ext.define('Admin.view.authentication.PasswordReset', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'passwordreset',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox'
    ],

    controller: 'main',

    items: [{
        xtype: 'panel',
        minWidth: 300,
        items: [{
            xtype: 'title-container',
            html: 'PASSWORD RESET'
        },{
            xtype: 'formpanel',
            id: 'passwordResetFormId',
            reference: 'passwordResetForm',
            waitMsg: 'Please Wait ...',
            viewModel: {
                type: 'passwordreset'
            },             

            padding: 20,
            layout: 'vbox',
            defaults: {
                margin:'0 0 10 0'
            },
            items: [
            {
                xtype: 'container',
                cls: 'x-color-green',
                bind: { 
                    html: '{instructions}'
                }
            },
            {
                xtype: 'container',
                cls: 'x-color-red',
                bind: {
                    html: '{msg}'
                },

            },{
                xtype: 'textfield',
                placeHolder: 'Authorization Code',
                name: 'authCode',
                bind: '{credentials.authCode}',
                clearIcon: true                
            },{
                xtype: 'passwordfield',
                placeHolder: 'New Password',
                name: 'password',
                bind: '{credentials.password}',
                clearIcon: true,
                required: true,
                listeners: {
                    painted: function(element, e){
                        this.getComponent().updateFieldAttribute('minlength', 6);
                    }
                },                
            },{
                xtype: 'button',
                text: 'Reset',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                ui: 'action',
                handler: 'onPasswordResetClick',
                width: '100%',
                bind: {
                    disabled: '{!isPasswordResetModelOk}'
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
