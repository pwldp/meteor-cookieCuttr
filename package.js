Package.describe({
        summary: "A tailorable jQuery plugin to deal with the EU Cookie Law."
});

Package.on_use(function (api){
        api.use('jquery', 'client');
        api.use('jquery.cookie', 'client');
        api.add_files('lib/cookiecuttr.css', 'client');
        api.add_files('lib/jquery.cookiecuttr.js', 'client');
});
