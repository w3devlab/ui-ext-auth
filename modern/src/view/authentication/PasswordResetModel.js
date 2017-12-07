Ext.define('Admin.view.authentication.PasswordResetModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Length'
    ],
    fields: [    
        {   name:   'authCode',    type: 'string', allowBlank: false    },
        {   name:   'password', type: 'string', allowBlank: false   }
    ],

    validators: [
        {   field: 'authCode',  type: 'presence',   message: 'Authorization code empty'   },
        {   field: 'password',  type: 'presence',   message: 'Password empty'   },
        {   field: 'password',  type: 'length', min: 6,  message: 'Password lenth min = {min}'   }
    ]
});
