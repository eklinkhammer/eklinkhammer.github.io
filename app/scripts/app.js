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
    'ngTouch',
    'templates'
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
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
       })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'LinksCtrl',
        controllerAs: 'links'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl',
        controllerAs: 'research'
      })
      .when('/software', {
        templateUrl: 'views/software.html',
        controller: 'SoftwareCtrl',
        controllerAs: 'software'
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
