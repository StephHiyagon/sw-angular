angular.module('myInit')
    // .config(function($stateProvider) {
    //
    // let listState = {
    // name: 'list',
    // url: '/list',
    //
    // template: `<componente-personajes></componente-personajes>`
    //
    //  }
    //
    // let itemState = {
    //   name:'item',
    //   url: '/list/personaje',
    //   template: `<componente-personaje></componente-personaje>`
    // }
    //
    // $stateProvider.state(principalState);
    // $stateProvider.state(listState);
    // $stateProvider.state(itemState);
    // }); -- cuando se usa ui-router

    .config(['$routeProvider', '$locationProvider', configProvider])

      function configProvider($routeProvider, $locationProvider){
        $routeProvider
          .when('/', {
            template: '<componente-root class="container text-center"></componente-root>'
          })
          .when('/list', {
            template: '<componente-personajes on-datos-personajes="$resolve.reparto" class="row text-left"></componente-personajes>',
            resolve: {
                  reparto: function(){ return $ctrl.reparto;}
            }

          })
          .when('/list/:personaje', {
            template: `<componente-personaje on-info-one="$resolve.infoOne"></componente-personaje>`,
            resolve: {
              infoOne: function() { return $ctrl.infoOne;}
            }
          })
          .otherwise({
            redirectTo: '/'
          });

          $locationProvider.html5Mode(true);
      }
