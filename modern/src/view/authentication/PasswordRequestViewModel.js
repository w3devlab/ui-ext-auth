Ext.define("Admin.view.authentication.PasswordRequestViewModel", {
    extend: "Ext.app.ViewModel", 
    alias: 'viewmodel.passwordrequest',


    links: {
        credentials: {
            reference: 'Admin.view.authentication.PasswordRequestModel',
            create: true
        }
    },
    data: {
        msg: ''
    },
    formulas: {
        isPasswordRequestModelOk: function (get) {

            get('credentials.email');
            get('msg');
            
            var model = get('credentials');

            return model.isValid();
        },
        
        
    }

});
