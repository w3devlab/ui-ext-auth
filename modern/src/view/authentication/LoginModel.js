Ext.define('Admin.view.authentication.LoginModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email',
        'Ext.data.validator.Length'
    ],
    fields: [    
        {   name:   'email',    type: 'string', allowBlank: false    },
        {   name:   'password', type: 'string', allowBlank: false   },
        {   name:   'remember', type: 'bool', defaultValue: false  }
    ],

    validators: [
        {   field: 'email',  type: 'presence',   message: 'Email empty'   },
        {   field: 'email',     type: 'email' },
        {   field: 'password',  type: 'presence',   message: 'Password empty'   },
        {   field: 'password',  type: 'length', min: 6,  message: 'Password lenth min = {min}'   }
    ]
});
