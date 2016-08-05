var Elixir = require('laravel-elixir');

Elixir.ready(() => {
    Elixir.config.js.webpack.loaders.push({
        test: /\.vue$/,
        loader: 'vue'
    });

    Elixir.config.js.webpack.babel = {
        presets: ['es2015'],
        plugins: ['add-module-exports', 'transform-runtime']
    };
});
