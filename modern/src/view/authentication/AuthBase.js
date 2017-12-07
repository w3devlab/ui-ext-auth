Ext.define('Admin.view.authentication.AuthBase', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.layout.VBox'
    ],
    baseCls: 'auth-locked',

    controller: 'main',
    ui: 'transparent',
    minWidth: 300,
    layout: {
        type: 'vbox',
        align: 'center',
        pack: 'center'
    }
});
