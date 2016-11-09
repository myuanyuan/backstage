angularBackage.directive('sideInfo', function(){    //自定义指令  restrict:指令使用方式  templateUrl：指令模板路径  scop:是否继承父级controller  为{}为断开
  return {
    restrict: 'E',
    replace : false,
    templateUrl: './partials/side.html',
    scope: true,
    link: function(scope, elem, attrs) {
      if(attrs.isShow == 'true') {
        scope.isShow = true;
      }
    },
    controller:function($scope){
       var vm = $scope;
       vm.listshow=[];
       vm.items = [
         {
           iclass:'fa-laptop',
           tit:"主页",
           spanclass:'label-success',
           subitem0:'页面显示',
           subitem1:'主题',
           subitem2:'语言',
           subitem3:'商品模板'
         },
         {
           iclass:'fa-book',
           tit:"商品列表",
           num:4,
           spanclass:'label-info',
           subitem0:'手机',
           subitem1:'电脑',
           subitem2:'pro',
           subitem3:'配件'
         },
         {
           iclass:'fa-laptop',
           tit:"职员信息",
           num:4,
           spanclass:'label-success',
           subitem0:'页面显示',
           subitem1:'主题',
           subitem2:'语言',
           subitem3:'商品模板'
         },
         {
           iclass:'fa-laptop',
           tit:"薪资信息",
           num:4,
           spanclass:'label-primary',
           subitem0:'页面显示',
           subitem1:'主题',
           subitem2:'语言',
           subitem3:'商品模板'
         },
         {
           iclass:'fa-laptop',
           tit:"季度计划",
           num:4,
           spanclass:'label-primary',
           subitem0:'页面显示',
           subitem1:'主题',
           subitem2:'语言',
           subitem3:'商品模板'
         },
         {
           iclass:'fa-laptop',
           tit:"工作报告",
           num:4,
           spanclass:'label-danger',
           subitem0:'页面显示',
           subitem1:'主题',
           subitem2:'语言',
           subitem3:'商品模板'
         }
       ];
       vm.listswitch=function(i){
          vm.listshow[i]=!vm.listshow[i];
       };
    }
  }
})
