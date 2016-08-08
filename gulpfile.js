var elixir = require('laravel-elixir')
require('laravel-elixir-vue')

elixir(function (mix) {
    mix.copy('./node_modules/font-awesome/fonts/**', 'public/fonts');
    mix.sass('./assets/scss/app.scss', './public/css/app.css')
       .webpack('./app/app.js', './public/js/app.js')
})