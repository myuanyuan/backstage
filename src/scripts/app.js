var angularBackage = angular.module('AngularBackage', ['ngRoute','app-ctrl']);  //这里需要注入路由和controller

angularBackage.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/login', {                      //ngRoute的路由写法
      templateUrl: '/partials/login.html',
      controller: 'loginController'
    })
    .when('/main', {
      templateUrl: '/partials/main.html',
      controller:'mainController'
    })
    .otherwise({
      redirectTo: '/login'    //默认路由
    })
}]);
