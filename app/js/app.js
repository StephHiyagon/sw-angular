// angular.module('myInit', ['ui.router'])
angular.module('myInit', ['ngRoute'])
  // .value('API','https://swapi.co/api/people/')

document.addEventListener('DOMContentLoaded', function(){
  angular.bootstrap(document, ['myInit']);
})
