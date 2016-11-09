angularBackage.directive('headerInfo', function(){    //自定义指令  restrict:指令使用方式  templateUrl：指令模板路径  scop:是否继承父级controller  为{}为断开
  return {
    restrict: 'E',
    replace : false,
    templateUrl: './partials/header.html',
    scope: true,
    link: function(scope, elem, attrs) {
      if(attrs.isShow == 'true') {
        scope.isShow = true;
      }
    },
      controller:function($scope) {
        var vm = $scope;
        vm.navList=['设置','个人中心','管理','退出'];
    }
  }
})
