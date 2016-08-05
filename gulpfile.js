var elixir = require('laravel-elixir')
require('laravel-elixir-vue')

elixir(function (mix) {
    mix.sass('./assets/scss/app.scss', './public/css/app.css')
       .webpack('./app/app.js', './public/js/app.js')
})