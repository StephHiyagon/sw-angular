  class Data {
    constructor($http, $q) {
      this.$http = $http;
      this.$q = $q;

    }

    getAll(){
      let datosFirstPromise,
      deferred = this.$q.defer();

      this.$http.get('https://swapi.co/api/people/')
        .then((response)=>{
          datosFirstPromise = response.data;
          deferred.resolve(datosFirstPromise);
        })
        .catch((error)=>{
          deferred.reject(error);
        })

        return deferred.promise;
    }

    getOne(url){
      let dataPromise,
      deferred = this.$q.defer();

      this.$http.get(`${url}`).then((response)=>{
          dataPromise = response.data;
          this.$http.get(dataPromise.homeworld
          ).then((response)=>{



              dataPromise['infoWorld'] = response.data;

              deferred.resolve(dataPromise);
          })
          .catch((error)=>{
            deferred.reject(error);
          })
      }).catch((error)=>{
        deferred.reject(error)
      })

      return deferred.promise;
    }
  }


  angular.module('myInit')
    .service('data', Data)
