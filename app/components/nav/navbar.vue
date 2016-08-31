<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">

            <div class="navbar-header">
                <button type="button"
                        class="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#main-navbar"
                        aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">
                    <i class="fa fa-server"></i>
                    Vue Stack 2.0
                </a>
            </div>

            <div class="collapse navbar-collapse" id="main-navbar">

                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <router-link :to="{ name: 'index' }">
                            Home
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'test' }">
                            Fire  Event
                        </router-link>
                    </li>
                </ul>

            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<style rel="stylesheet/scss" lang="sass">
    .navbar {
        border-left: 0;
        border-right: 0;
        border-top: 0;
    }
</style>