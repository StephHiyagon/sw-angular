  class Data {
    constructor($http, $q) {
      this.$http = $http;
      this.$q = $q;

    }

    getAll(){
      return this.$http.get('https://swapi.co/api/people/')
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

  var n1 = new Data();
  console.log(n1.getAll)

  angular.module('myInit')
    .service('data', Data)
