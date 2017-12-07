Ext.define("Admin.view.authentication.LoginViewModel", {
    extend: "Ext.app.ViewModel", 
    alias: 'viewmodel.login',


    links: {
        credentials: {
            reference: 'Admin.view.authentication.LoginModel',
            create: true
        }
    },
    data:{
        msg: '',
        info: ''
    },

    formulas: {
        getMsg: {
            bind: '{msg}',
            get: function(msg){
                return msg;
            }
        },        
        isLoginOk: function (get) {

            get('credentials.email');
            get('credentials.password');
            get('credentials.remember');
            get('msg');
            
            var model = get('credentials');

            return model.isValid();
        },
        
        
    }

});
