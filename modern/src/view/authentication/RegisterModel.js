Ext.define('Admin.view.authentication.RegisterModel', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.validator.Email',
        'Ext.data.validator.Length',
        'Ext.data.validator.Inclusion'
    ],
    fields: [
        {   name:   'firstName',    type: 'string', allowBlank: false    },
        {   name:   'lastName',    type: 'string', allowBlank: false    },        
        {   name:   'email',    type: 'string', allowBlank: false    },
        {   name:   'password', type: 'string', allowBlank: false   },
        {   name:   'agree', type: 'bool', defaultValue: false   }
    ],

    validators: [
        {   field: 'firstName',  type: 'presence',   message: 'First name empty'   },
        {   field: 'lastName',  type: 'presence',   message: 'Last name empty'   },
        {   field: 'email',  type: 'presence',   message: 'Email empty'   },
        {   field: 'email',     type: 'email' },
        {   field: 'password',  type: 'presence',   message: 'Password empty'   },
        {   field: 'password',  type: 'length', min: 6,  message: 'Password lenth min = {min}'   },
        {   field: 'agree',  type: 'inclusion', list: [true],  message: ''   },
    ]
});
