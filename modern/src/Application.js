/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    mainView: 'Admin.view.main.Main',
    
    companyName: 'COMPANY INC.',
    
    api:{
        signin: '/login.json',
        signup: '/register.json',
        auth_code_request: '/password.request.json',
        password_reset: '/password.reset.json',
        terms: '/terms.txt'
    }
});
