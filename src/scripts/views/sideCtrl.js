appCtrl.controller('sideController', ['$scope', 'sideService','$routeParams', function($scope, sideService, $routeParams){
  var vm = $scope;
  vm.list = sideService.list;
}]);
