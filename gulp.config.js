module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';
    var server = './src/server/';

    var config = {

        temp: temp,

        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        index: client + 'index.html',
        js: [
            clientApp + '**/*.modules.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js',
        ],
        client: client,
        less: client + 'styles/styles.less',
        css: temp + 'styles.css',
        bower: {
            json: require('./bower.json'),
            directory: './bower_components',
            ignorePath: '../..'
        },
        defaultPort: 7203,
        nodeServer: './src/server/app.js',
        server: server,
        browserReloadDelay: 1000,
        build: './build/',
        fonts: './bower_components/font-awesome/fonts/**/*.*',
        images: client + 'images/**/*.*',
        htmltemplates: clientApp + '**/*.html',
        templateCache: {
            file: 'templates.js',
            options: {
                module: 'app.core',
                standAlone: false,
                root: 'app/'
            }
        },
        html: clientApp + '**/*.html'
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };

        return options;
    };

    return config;
};