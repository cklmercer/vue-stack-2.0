# Laravel Elixir Vue Integration

This package provides Webpack support for compiling `.vue` files in your Laravel Elixir 6 projects. Please note that, if using Laravel Elixir 5 or below, you don't want this package.

## Step 1: Install

```
npm install laravel-elixir-vue --save-dev
```

## Step 2: Gulpfile.js

```
var elixir = require('laravel-elixir');

require('laravel-elixir-vue');

elixir(function(mix) {
    mix.webpack('main.js'); // resources/assets/js/main.js
});
```

If you need help, [here's a barebones starter example](https://github.com/JeffreyWay/Laravel-Elixir-v6-Vue-example).
