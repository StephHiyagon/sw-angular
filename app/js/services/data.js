angular.module('myInit')
  .service('Data', Data)

function Data($http, API){
  return {
    getPersonajes: getPersonajes,
    // getPersona: getPersona
  }

  function getPersonajes(){
    console.log(API)
    return $http.get(API)    
      .then(getPersonajesOk)
      .catch(getPersonajesFailed)

      function getPersonajesOk(response){
        console.log(response.data)
        return response.data;
      }

      function getPersonajesFailed(error){
        console.log('Error al comunicarse con el API:' + error.data)
      }
  }

}
