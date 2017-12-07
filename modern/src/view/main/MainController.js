Ext.define('Admin.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    listen : {
        controller : {
            '#' : {
                unmatchedroute : 'onRouteChange'
            }        
        }
    },
    
    routes: {
        ':node': 'onRouteChange'
    },
    
    onRouteChange: function (id) {
        if(id){
            this.redirectTo('');
        }
    },

    skipReset: {
        'terms': true
    },
    setCurrentView: function (hashTag) {

        hashTag = (hashTag || '').toLowerCase();

        if( !this.getView().parent){

            return;
        }
        
        var mainCard = this.getView().parent,
        item = mainCard.child('component[xtype=' + hashTag + ']');

        if (!item) {
            item = mainCard.add({
                xtype: hashTag,
                routeId: hashTag
            });
        }
        
        mainCard.setActiveItem(item);

        if(!this.skipReset[this.getView().xtype]){
            this.resetMsg(item);
        }        
        
        return item;
    },
 
    resetMsg: function(item){
        
        var itemVM = item.down('[referenceKey]').getViewModel();
     
        var p = item.down('[referenceKey]');
        if(p && p.reset){
            p.reset();
            p.reset();
        }

        if(itemVM){
            itemVM.set('msg', '');   
            itemVM.set('info', '');   
        }        
    },

    onToLogin:  function() {
        this.setCurrentView('login');
    },
    onToRegister:  function() {
        this.setCurrentView('register');
    },    
    
    onCreateAccount:  function() {
        this.setCurrentView('register');
    },

    onHelp:  function() {
        this.setCurrentView('passwordrequest');
    },
    onTermsClick:  function() {
        this.setCurrentView('terms');
    },
    
    onSigninButton: function() {
        
        var me = this;
        var formPanel = this.lookupReference('loginForm');
        
        me.processBegin();

        formPanel.submit({
            url: Admin.getApplication().api.signin,
            method: 'Post',
            success: function(view, data, raw){
                
                me.progressCompleted(function(){
                    window.location.href = data.location;
                });
                
            },
            failure: function(view, data, raw){
                
                me.progressCompleted(function(){
                    
                    var vm = formPanel.getViewModel();
                    me.setCurrentView('login');
                    vm.set('credentials.password', '');                    
                    vm.set('msg', data.msg);     
            
                });

            },            
            waitMsg: 'Please Wait ...',
        });
    },
    
    onSignupClick:  function() {
        var me = this;
        var formPanel = this.lookupReference('registerForm');
        me.processBegin();
        
        var vm = formPanel.getViewModel();

        
        formPanel.submit({
            url: Admin.getApplication().api.signup,
            success: function(view, data, raw){
                
                me.progressCompleted(function(){
                    var item = me.setCurrentView('login');
                    var loginPanel = item.lookupReference('loginForm');
                    var loginVM = loginPanel.getViewModel();     
                    loginVM.set('info', data.msg); 
                    loginVM.set('credentials.email', data.email); 
                });
                
            },
            failure: function(view, data, raw){
                
                
                me.progressCompleted(function(){

                    me.setCurrentView('register');

                    data.password = '';
                    vm.set('register.password', '');                    
                    vm.set('msg', data.msg);                     
                    
                });                

            },            
            waitMsg: 'Please Wait ...',
        });
    },

    onPasswordRequestClick:  function() {
        var me = this;
        var formPanel = this.lookupReference('passwordRequestForm');
        me.processBegin();
        
        var vm = formPanel.getViewModel();
       
        
        formPanel.submit({
            url: Admin.getApplication().api.auth_code_request,
            success: function(view, data, raw){
                var email = vm.get('credentials.email');
                vm.set('credentials.email', '');  
                me.progressCompleted(function(){
                    var item = me.setCurrentView('passwordreset');
                    var formPasswordResetPanel = item.lookupReference('passwordResetForm');
                    var passwordResetVM = formPasswordResetPanel.getViewModel();     
                    passwordResetVM.set('email', email);
                });
                
            },
            failure: function(view, data, raw){
                
                me.progressCompleted(function(){
                    me.setCurrentView('passwordrequest');
                    vm.set('msg', data.msg);                                         
                });                

            },            
            waitMsg: 'Please Wait ...',
        });
    },

    onPasswordResetClick:  function() {
        var me = this;
        var formPanel = this.lookupReference('passwordResetForm');
        me.processBegin();
        
        var vm = formPanel.getViewModel();

        
        formPanel.submit({
            url: Admin.getApplication().api.password_reset,
            success: function(view, data, raw){
                
                me.progressCompleted(function(){
                    me.setCurrentView('login');
                });
                
            },
            failure: function(view, data, raw){
                
                
                me.progressCompleted(function(){

                    me.setCurrentView('passwordreset');
                    
                    data.password = '';
                    
                    vm.set('credentials.authCode', '');                    
                    vm.set('credentials.password', '');  
                    vm.set('msg', data.msg);                     
                });                

            },            
            waitMsg: 'Please Wait ...',
        });
    },
    

    processBegin: function(callback){

        this.setCurrentView('processing');
        
        var mainCard = this.getView().parent;
        var processingItem = mainCard.child('component[routeId=processing]');
        processingItem = processingItem.lookupReference('auth-progress');
        var processingItemVM = processingItem.getViewModel(), 
            progress;        
        
        if(!processingItem._interval){
            
            processingItemVM.set('progress', 0);
            
            processingItem._interval = setInterval(function() {
                if (processingItem.isDestroyed) {
                    clearInterval(processingItem._interval);
                    processingItem._interval = null;
                    return;
                }
                
                progress = processingItemVM.get('progress');
                progress += 0.01;
                if (progress > 1) {
                    progress = 0;
                }
                processingItemVM.set('progress', progress);
            }, 50);                    
        }        
    },
    progressCompleted: function(callback){
        var mainCard = this.getView().parent;
        var processingItem = mainCard.child('component[routeId=processing]');
        processingItem = processingItem.lookupReference('auth-progress');
        var processingItemVM = processingItem.getViewModel(), 
            progress;
    
        var task = new Ext.util.DelayedTask(function(){
            if(processingItem){
                clearInterval(processingItem._interval);
                processingItem._interval = null;
                processingItemVM.set('progress', 1);
            }                    
            var task = new Ext.util.DelayedTask(function(){
                
                
                if(callback){
                    callback();
                }
                
                processingItemVM.set('progress', 0);
            });
            task.delay(500);                    
        });
        task.delay(2000);                    
    
    }    
});