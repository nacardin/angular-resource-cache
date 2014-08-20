angular.module('example', ['resourceCache'])
  .controller('AppCtrl', function($scope, resourceCache) {
    resourceCache('/resources').get().then(function (data) {
      $scope.resources = data;
    });
  });