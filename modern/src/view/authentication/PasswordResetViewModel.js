Ext.define("Admin.view.authentication.PasswordResetViewModel", {
    extend: "Ext.app.ViewModel", 
    alias: 'viewmodel.passwordreset',


    links: {
        credentials: {
            reference: 'Admin.view.authentication.PasswordResetModel',
            create: true
        }
    },
    data: {
        email: '',
        msg: ''
    },
    formulas: {
        instructions: {
            bind: '{email}',
            get: function(email){
                return 'Authorization code has been sent to <br><b>' + email + '</b>';
            }
        },
        isPasswordResetModelOk: function (get) {

            get('credentials.password');
            get('credentials.authCode');
            get('email');
            get('msg');
            get('instructions');
            
            var model = get('credentials');

            return model.isValid();
        },
        
        
    }

});
