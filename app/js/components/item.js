angular.module('myInit')
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
         `
            <div ng-if="$ctrl.onInfoOne.length==0? false : true" class="jumbotron text-center">
              <h3 class="blue-text">Información de {{$ctrl.onInfoOne.name}}</h3>
              <h3>Año de Nacimiento: {{$ctrl.onInfoOne.birth_year}}</h3>
              <h3>Color de Ojos: {{$ctrl.onInfoOne.eye_color}}</h3>
              <h3 >Hogar: {{$ctrl.onInfoOne.infoWorld.name}}</h3>
            </div>`

    })

/*{{$ctrl.onInfoOne | json}}
   {{$ctrl.onInfoOne.data.homeworld}}
   {{getWorld($ctrl.onInfoOne.data.homeworld)}}*/
