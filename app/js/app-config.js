angular.module('myInit')
    .config(['$stateProvider','$urlServiceProvider', configUiRouter])


  function configUiRouter ($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'principalState' });

    // let principalState = {
    //   name:'portada',
    //   url:'/portada',
    //   template: '<componente-root class="container text-center"></componente-root>'
    // }

    let listState = {
    name:'list',
    url: '/list',
    template: '<componente-personajes on-datos-personajes="$ctrl.reparto" class="row text-left"></componente-personajes>',
    // resolve: {
    //       reparto: function(){ return $ctrl.reparto;}
    // }

     }

    let itemState = {
      name:'item',
      url: '/list/:personaje',
      template: '<componente-personaje on-info-one="$resolve.infoOne"></componente-personaje>',
      resolve: {
        infoOne: function() { return $ctrl.infoOne;}
      }
    }

    $stateProvider.state('principalState', {
      url:'/portada',
      template: '<componente-root class="container text-center"></componente-root>',

    }
);
    $stateProvider.state(listState);
    $stateProvider.state(itemState);
    };

    //no se puede usar ngRoute cuando trabajas con componentes

    // .config(['$routeProvider', '$locationProvider', configProvider])
    //
    //   function configProvider($routeProvider, $locationProvider){
    //     $routeProvider
    //       .when('/', {
    //         template: '<componente-root class="container text-center"></componente-root>'
    //       })
    //       .when('/list', {
    //         template: '<componente-personajes on-datos-personajes="$resolve.reparto" class="row text-left"></componente-personajes>',
    //         resolve: {
    //               reparto: function(){ return $ctrl.reparto;}
    //         }
    //
    //       })
    //       .when('/list/:personaje', {
    //         template: `<componente-personaje on-info-one="$resolve.infoOne"></componente-personaje>`,
            // resolve: {
            //   infoOne: function() { return $ctrl.infoOne;}
            // }
    //       })
    //       .otherwise({
    //         redirectTo: '/'
    //       });
    //
    //       $locationProvider.html5Mode(true);
    //   }
