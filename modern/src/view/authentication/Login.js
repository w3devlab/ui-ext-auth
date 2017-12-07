Ext.define('Admin.view.authentication.Login', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'login',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'Ext.form.Panel',
        'Ext.field.Email'
    ],
    controller: 'main',

    items: [{
        xtype: 'panel',
        minWidth: 300,
        ui: 'my-light',
        items: [{
            xtype: 'title-container',
            html: 'SING IN'
        },{
            xtype: 'formpanel',
            id: 'loginFormId',
            reference: 'loginForm',
            waitMsg: 'Please Wait ...',
            trackResetOnLoad: true,
            viewModel: {
                type: 'login'
            },             
               
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            layout: 'vbox',
            items: [{
                xtype: 'container',
                cls: 'x-color-green',
                bind: {
                    html: '<b>{info}</b>'
                }

            },{
                xtype: 'container',
                cls: 'x-color-red',
                bind: {
                    html: '{getMsg}'
                }

            },{
                xtype: 'emailfield',
                name: 'email',
                placeHolder: 'Email',
                bind: '{credentials.email}',
                clearIcon: true
            },{
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: 'Password',
                allowBlank: false,
                bind: '{credentials.password}',
                required: true,
                listeners: {
                    painted: function(element, e){
                        this.getComponent().updateFieldAttribute('minlength', 6);
                    }
                },
                clearIcon: true
            },{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield',
                    name: 'remember',
                    value: false,
                    bind: '{credentials.remember}'
                },{
                    html: 'Remember Me',
                    style: 'marginRight:20px'
                }]
            },{
                xtype: 'button',
                text: 'Sign In',
                iconAlign: 'right',
                iconCls: 'x-fa fa-angle-right',
                ui: 'confirm',
                handler: 'onSigninButton',
                bind: {
                    disabled: '{!isLoginOk}'
                }
            },{
                xtype: 'button',
                text: 'Create Account',
                ui: 'action',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                handler: 'onCreateAccount'
            },{
                xtype: 'button',
                text: 'Help',
                iconAlign: 'right',
                iconCls: 'x-fa fa-question-circle',
                ui: 'gray-button',
                handler: 'onHelp'        
            }]
        }]
    }],

});
