Ext.define("Admin.view.authentication.RegisterViewModel", {
    extend: "Ext.app.ViewModel", 
    alias: 'viewmodel.register',

    links: {
        register: {
            reference: 'Admin.view.authentication.RegisterModel',
            create: true
        }
    },
    data: {
        msg: ''
    },
  
    formulas: {

        isRegistrationOk: function (get) {
            get('register.firstName');
            get('register.lastName');
            get('register.email');
            get('register.password');
            get('register.agree');            
            get('msg');
            
            var model = get('register');

            return model.isValid();
        }
    }

});
