Ext.define('Admin.view.main.Main', {
    extend: 'Ext.Container',
    xtype: 'app-main',
    requires: [
        'Ext.Button',
        'Ext.list.Tree',
        'Ext.navigation.View'
    ],

    controller: 'main',
    
    layout: 'hbox',

    items: [
        {
            xtype: 'navigationview',
            flex: 1,
            reference: 'mainCard',
            userCls: 'main-container',
            navigationBar: false,
            layout: {
                type: 'card',
                animation: {
                    type: 'pop',
                    duration: 500
                }
            },
            items:[
                {
                    xtype: 'login'
                }
            ]
        }
    ]
});
