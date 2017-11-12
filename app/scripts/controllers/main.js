'use strict';

/**
 * @ngdoc function
 * @name eklinkhammergithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eklinkhammergithubioApp
 */
angular.module('eklinkhammergithubioApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
  });

function HeaderCtrl($scope) {
  $scope.header = {name: "header.html", url: "header.html"};
}
