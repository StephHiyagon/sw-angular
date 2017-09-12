angular.module('myInit', ["ngResource"])
  .value('API','https://swapi.co/api/people/')

document.addEventListener('DOMContentLoaded', function(){
  angular.bootstrap(document, ['myInit']);
})
