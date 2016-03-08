'use strict';

/**
 * @ngdoc function
 * @name myprofileApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myprofileApp
 */
angular.module('myprofileApp')
  .controller('MainCtrl', function () {
    //destroying
    if($('html').hasClass('fp-enabled')){
      $.fn.fullpage.destroy('all');
    };
    $('#fullpage').fullpage({
      sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
    });
  });
