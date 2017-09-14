angular.module('myInit')
  .component('componenteRoot', {
    controller: class {
      constructor(data, $location) {
        this.datos = data;
        this.reparto= [];
        this.$location = $location;
      }

      getPersonajes(){

        this.datos.getAll()
          .then((response)=>{
            this.reparto=response.results;
            console.log(this.reparto);
          })
          .catch((error)=>{
            console.log('Error al acceder al API:'+ error.data + '|' + error.message)
          })

        // this.$location.url("/list");
        // this.$location.path('/list');
      }
    },
    template:`<div class="row modificadoRow">
              <div class="col-md-6 col-md-offset-3">
              <h1>Lista de Personajes</h1>
              <a ui-sref="list">
              <button ng-click="$ctrl.getPersonajes()" class="btn btn-primary" ng-if="$ctrl.reparto.length==0? true : false">Mostrar personajes</button>
              </a>
              </div>
              </div>              
              `
  })




// <componente-personajes on-datos="$ctrl.reparto" class="row text-left"></componente-personajes>

// getData(Data){
  // console.log(Data);
  //  {{ $ctrl.onDatos | json}}
  // Data.getPersonajes()
  // .then((data) => {
  //   this.reparto = data;
  // });
  // return this.reparto;
// }
