angular.module('resourceCache', ['xc.indexedDB'])
  .factory('resourceCache', function($http, $indexedDB) {

    function Store(uri) {
      this.uri = uri;
      this.objectStore = $indexedDB.objectStore(uri);
    }

    Store.prototype.options = function() {
      return $http({method: 'OPTIONS', url: this.uri })
    };

    Store.prototype.head = function() {
      return $http({method: 'HEAD', url: this.uri })
    };

    Store.prototype.get = function() {

      return $http({method: 'GET', url: this.uri })
    };

    Store.prototype.delete = function() {
      return $http({method: 'DELETE', url: this.uri })
    };

    Store.prototype.post = function(data) {
      return $http({
        method: 'POST',
        url: this.uri,
        data: data
      });
    };

    Store.prototype.put = function(data) {
      return $http({
        method: 'PUT',
        url: this.uri,
        data: data
      });
    };

    Store.prototype.patch = function(data) {
      return $http({
        method: 'PATCH',
        url: this.uri,
        data: data
      });
    };

    return function(uri){
      return new Store(uri);
    }
  });