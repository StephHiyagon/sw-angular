angular.module('myInit')
    .component('componentePersonajes', {
      bindings:{
        onDatosPersonajes:'='
      },

      controller:
        class {
          constructor(data){
            this.onDatosPersonajes;
            this.info = data;
            this.infoOne=[];
            // this.$location = $location;

          }

          getItem(url1 , name1){
            this.info.getOne(url1)
              .then((resp)=>{
                console.log(resp)
                this.infoOne= resp;
              })
              .catch((e)=>{
                console.log('error:' + e.message)
              })

            // this.$location.url(`/list/${name1}`)
              // this.$location.url('/list/personaje')
          }
        },

        template: ` <h3>Componente personajes</h3>
                    <div class="col-md-4 col-md-offset-4" ng-if="$ctrl.onDatosPersonajes.length > 0 ? true : false">
                    <h2 >Son {{$ctrl.onDatosPersonajes.length}} personajes</h2>
                    <h2>Aquí comienza la lista:</h2>
                    <div ng-repeat="personaje in $ctrl.onDatosPersonajes" class="jumbotron">
                    <h3>Name: {{personaje.name}}</h3>
                    <h3 ng-if="personaje.gender=='n/a'? false : true">Gender: {{personaje.gender}}</h3>
                    <div class="text-right">
                    <a ng-href="/list/{{personaje.name}}">
                    <button class="btn btn-success" ng-click="$ctrl.getItem(personaje.url, personaje.name)">Leer más</button>
                    </a>
                    </div>
                    </div>
                    </div>
                  `

    })

    //<componente-personaje on-info-one="$ctrl.infoOne"></componente-personaje>
