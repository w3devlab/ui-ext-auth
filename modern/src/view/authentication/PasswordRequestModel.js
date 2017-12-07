Ext.define('Admin.view.authentication.PasswordRequestModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email'
    ],
    fields: [    
        {   name:   'email',    type: 'string', allowBlank: false    }
    ],

    validators: [
        {   field: 'email',  type: 'presence',   message: 'Password empty'   },
        {   field: 'email',     type: 'email' }
    ]
});
