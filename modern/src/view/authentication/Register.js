Ext.define('Admin.view.authentication.Register', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'register',

    requires: [
        'Ext.field.Checkbox',
        'Ext.field.Password',
        'Ext.field.Text',
        'Ext.layout.HBox',
        'Ext.field.Email'
    ],

    controller: 'main',

    items: [{
        xtype: 'panel',
        minWidth: 300,
        items: [{
            xtype: 'title-container',
            html: 'SING UP'
        },{
            xtype: 'formpanel',
            padding: 20,
            layout: 'vbox',
            defaults: {
                margin:'0 0 10 0'
            },
            reference: 'registerForm',
            waitMsg: 'Please Wait ...',
            viewModel: {
                type: 'register'
            },             
            trackResetOnLoad: true,

            items: [{
                xtype: 'container',
                cls: 'x-color-red',
                bind: {
                    html: '{msg}'
                },

            },{
                xtype: 'textfield',
                name: 'firstName',
                placeHolder: 'First Name',
                bind: '{register.firstName}',
                clearIcon: true                
            },{
                xtype: 'textfield',
                name: 'lastName',
                placeHolder: 'Last Name',
                bind: '{register.lastName}',
                clearIcon: true                
            },{
                xtype: 'textfield',
                name: 'email',
                placeHolder: 'Email',
                bind: '{register.email}',
                clearIcon: true                
            },{
                xtype: 'passwordfield',
                name: 'password',
                placeHolder: 'Password',
                bind: '{register.password}',
                required: true,
                listeners: {
                    painted: function(element, e){
                        this.getComponent().updateFieldAttribute('minlength', 6);
                    }
                },
                clearIcon: true
            },{
                text: 'Terms',
                xtype: 'button',
                ui: 'soft-green',
                handler: 'onTermsClick',
            },{
                layout: 'hbox',
                items: [{
                    xtype: 'checkboxfield',
                    name: 'agree',
                    value: false,
                    bind: '{register.agree}'
                },{
                    html: 'I agree to the terms & conditions'
                }]
            },{
                xtype: 'button',
                text: 'Create Account',
                ui: 'action',
                iconAlign: 'right',
                iconCls: 'x-fa fa-user-plus',
                handler: 'onSignupClick',
                bind: {
                    disabled: '{!isRegistrationOk}'
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
