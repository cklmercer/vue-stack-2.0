<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <i class="fa fa-server"></i>
        Vue Stack 2.0
      </a>
    </div>
    <ul class="nav navbar-nav navbar-right">
      <li><router-link :to="{ name: 'index' }">Home</router-link></li>
      <li><router-link :to="{ name: 'test' }">Fire  Event</router-link></li>
    </ul>
  </div>
</nav>
</template>