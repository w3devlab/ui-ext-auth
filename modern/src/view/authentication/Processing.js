Ext.define('Admin.view.authentication.Processing', {
    extend: 'Admin.view.authentication.AuthBase',
    xtype: 'processing',

    requires: [
        'Ext.Progress'
    ],

    controller: 'main',


    items: [{
        xtype:'panel',
        minWidth: 300,
        items: [
        {
            xtype:'container',
            padding: 20,
            defaults: {
                margin:'0 0 10 0'
            },
            html: 'Please Wait ...',
            cacheView: false,
            controller: 'main',
            reference: 'auth-progress',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
      
            viewModel: {
                data: {
                    progress: 0
                },
                formulas: {
                    percent: function(get) {
                        var progress = get('progress');
                        return Math.round(progress * 100);
                    }

                }
            },
            items: [
                {
                    xtype: 'progress',
                    ui: 'small',
                    width: '95%',
                    margin: '20 0 20 0',
                    bind: {
                        value: '{progress}'
                    }
                }
            ]
        }]
    }]
});
