'use strict';

angular.module('mvogamesJsApp.auth', [
  'mvogamesJsApp.constants',
  'mvogamesJsApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
