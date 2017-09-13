angular.module('myInit')
  .component('componenteRoot', {
    controller: class {
      constructor(data) {
        this.datos = data;
        this.reparto= [];

      }

      getPersonajes(){

        console.log('usando el constructor:'+ this.datos.getAll)

        this.datos.getAll()
        .then((response)=>{
          console.log(response.data.results)
          this.reparto=response.data.results;
          console.log(this.reparto);
        })
        .catch((error)=>{
          console.log('Error al acceder al API:'+ error.data + '|' + error.message)
        })
      }
    },
    template:`<div class="row modificadoRow">
              <div class="col-md-6 col-md-offset-3">
              <h1>Lista de Personajes</h1>
              <button ng-click="$ctrl.getPersonajes()" class="btn btn-primary" ng-if="$ctrl.reparto.length==0? true : false">Mostrar personajes</button>
              </div>
              </div>
              <componente-personajes on-datos="$ctrl.reparto" class="row text-left">
              </componente-personajes>
              `
  })

  .component('componentePersonajes', {
    bindings:{
      onDatos:'='
    },

    controller:
      class {
        constructor(data){
          console.log(data)
          this.onDatos;
          this.info = data;
          this.infoOne=[];

        }

        getItem(url){
          this.info.getOne(url)
          .then((resp)=>{
            console.log(resp)
            this.infoOne= resp;
          })
          .catch((e)=>{
            console.log('error:' + e.message)
          })

        }
      },

      template: `
                  <div class="col-md-4 col-md-offset-4" ng-if="$ctrl.onDatos.length > 0 ? true : false">
                  <h2 >Son {{$ctrl.onDatos.length}} personajes</h2>
                  <h2>Aquí comienza la lista:</h2>
                  <div ng-repeat="personaje in $ctrl.onDatos" class="jumbotron">
                  <h3>Name: {{personaje.name}}</h3>
                  <h3 ng-if="personaje.gender=='n/a'? false : true">Gender: {{personaje.gender}}</h3>
                  <div class="text-right"><button class="btn btn-success" ng-click="$ctrl.getItem(personaje.url)">Leer más</button></div>
                  </div>
                  <componente-personaje on-info-one="$ctrl.infoOne"></componente-personaje>
                  </div>
      `

  })

  .component('componentePersonaje',{
    bindings: {
      onInfoOne: '='
    },
    controller:
     class {
       constructor(data){

         this.onInfoOne;

         console.log(this.dataWorld)
       }
     },

     template:
       `  {{$ctrl.onInfoOne | json}}
          {{$ctrl.onInfoOne.data.homeworld}}
          {{getWorld($ctrl.onInfoOne.data.homeworld)}}
          <div ng-if="$ctrl.onInfoOne.length==0? false : true">
            <h3>Información de {{$ctrl.onInfoOne.name}}</h3>
            <h3>Año de Nacimiento: {{$ctrl.onInfoOne.birth_year}}</h3>
            <h3>Color de Ojos: {{$ctrl.onInfoOne.eye_color}}</h3>
            <h4 >Hogar: {{$ctrl.onInfoOne.infoWorld.name}}</h4>
          </div>`

  })



// getData(Data){
  // console.log(Data);
  //  {{ $ctrl.onDatos | json}}
  // Data.getPersonajes()
  // .then((data) => {
  //   this.reparto = data;
  // });
  // return this.reparto;
// }
