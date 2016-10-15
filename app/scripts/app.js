'use strict';

/**
 * @ngdoc overview
 * @name eklinkhammergithubioApp
 * @description
 * # eklinkhammergithubioApp
 *
 * Main module of the application.
 */
angular
  .module('eklinkhammergithubioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
       })
      .otherwise({
        redirectTo: '/'
      });
  });

/*
  All code that will be loaded for header / on all pages
*/

// In nav bar, only most recently selected item is highlighted
$(".nav a").on("click", function() {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active")
});
