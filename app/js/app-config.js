angular.module('myInit')
    .config(['$stateProvider','$urlServiceProvider', configUiRouter])


  function configUiRouter ($stateProvider, $urlServiceProvider) {
    $urlServiceProvider.rules.otherwise({ state: 'principalState' });


    let listState = {
      name:'list',
      url: '/list',
      template: '<componente-personajes reparto="$resolve.reparto" class="row text-center"></componente-personajes>',
      resolve: {
        reparto: function(data){
          return data.getAll()
                  .then((response)=>{
                      console.log(response.results)
                      return response.results;
                  })
                  .catch((error)=>{
                    console.log('Error:' + error.message)
                  });
          }
        }
      };

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
      template: '<componente-root class="container text-center"></componente-root>'
      // component: 'componenteRoot'
      }
    );

    $stateProvider.state(listState);

    $stateProvider.state(itemState);
    };

    //no se puede usar ngRoute cuando trabajas con componentes

    // .config(['$routeProvider', '$locationProvider', configProvider])
    //on-datos-personajes="$ctrl.reparto"
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
