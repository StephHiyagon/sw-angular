angular.module('myInit')
    .component('componentePersonajes', {
      bindings:{
        reparto:'='
        // onData:'<'
      },

      controller:
        class {

          // getItem(url1 , name1){
          //   this.info.getOne(url1)
          //     .then((resp)=>{
          //       console.log(resp)
          //       this.infoOne= resp;
          //     })
          //     .catch((e)=>{
          //       console.log('error:' + e.message)
          //     })
          //
          //   // this.$location.url(`/list/${name1}`)
          //     // this.$location.url('/list/personaje')
          // }
        },

        template: `

                    <div class="col-md-4 col-md-offset-4" ng-if="$ctrl.reparto.length > 0 ? true : false">
                    <h2 >Son {{$ctrl.reparto.length}} personajes</h2>
                    <h2>Aquí comienza la lista:</h2>
                    <div ng-repeat="personaje in $ctrl.reparto" class="jumbotron">
                    <h3>Name: {{personaje.name}}</h3>
                    <h3 ng-if="personaje.gender=='n/a'? false : true">Gender: {{personaje.gender}}</h3>
                    <a ng-href="/list/{{personaje.name}}">
                    <button class="btn btn-success" ng-click="$ctrl.getItem(personaje.url, personaje.name)">Leer más</button>
                    </a>                    
                    </div>
                    </div>
                  `

    })

    //<componente-personaje on-info-one="$ctrl.infoOne"></componente-personaje>
