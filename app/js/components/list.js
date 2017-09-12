angular.module('myInit')
  .component('componenteRoot', {
    controller:
      class StarWars {
        static http ($http,$inject){
          return $inject = ["$http"];
        }
        // static $inject = ['$http'];
        constructor(){
          this.reparto=[];
          // this.inject;
          // this.getApi.$injector = ['$http'];
        }

        getApi(){
            $http.get('https://swapi.co/api/people/')
            .then(function(response){
              console.log(response.results[0].name)
              this.reparto = response.results;

            })
            .catch(function(error){
              console.log(error)
            })
        }
      },
    template:`{{ $ctrl.reparto | json}}
              <h1>Lista de Personajes</h1>
              <button ng-click="$ctrl.getApi()">Mostrar personajes</button>
                <h2>Personajes:{{$ctrl.reparto.length}}</h2>
              <componente-personaje on-datos="$ctrl.reparto">
              </componente-personaje>`
  })

  .component('componentePersonaje', {
    bindings:{
      onDatos:'='
    },

    controller:
      class {
        constructor(){
          this.onDatos;
        }
      },

      template: `
                  {{ $ctrl.onDatos | json}}
                  <h2>Aquí comienza la lista:</h2>
                  <h4 ng-repeat="personaje in $ctrl.onDatos"> Name: {{personaje.name}}</h4>
      `

  })

//nf-if="$ctrl.reparto == [] ? false : true"
// getData(Data){
  // console.log(Data);
  // Data.getPersonajes()
  // .then((data) => {
  //   this.reparto = data;
  // });
  // return this.reparto;
// }
