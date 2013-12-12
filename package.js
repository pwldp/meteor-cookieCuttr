Package.describe({
        summary: "A tailorable jQuery plugin to deal with the EU Cookie Law."
});

Package.on_use(function (api){
        api.add_files('load.js', 'client');
});
