appCtrl.controller('mainController', ['$scope','$routeParams','$rootScope', function($scope, $routeParams,$rootScope){
  var vm = $scope;
  vm.conlist=[
    {
      name:'红米',
      id:'0001',
      price:'1799',
      havesale:'77'
    },
    {
      name:'黑米',
      id:'0002',
      price:'1399',
      havesale:'45'
    },
    {
      name:'魅蓝',
      id:'0003',
      price:'1899',
      havesale:'77'
    },
    {
      name:'华为',
      id:'0004',
      price:'1789',
      havesale:'77'
    },
    {
      name:'红米',
      id:'0005',
      price:'1799',
      havesale:'778'
    },
    {
      name:'中兴',
      id:'0006',
      price:'1797',
      havesale:'297'
    },
    {
      name:'三星',
      id:'0007',
      price:'1599',
      havesale:'180'
    },
    {
      name:'苹果',
      id:'0008',
      price:'5799',
      havesale:'77'
    },
    {
      name:'红米',
      id:'0009',
      price:'1709',
      havesale:'77'
    },
    {
      name:'联想',
      id:'0010',
      price:'3799',
      havesale:'77'
    },
    {
      name:'联想',
      id:'0011',
      price:'3799',
      havesale:'77'
    }
  ];
  $rootScope.search={
    search:''
  };

  vm.inputShow=[];
  for(var i=0;i<=vm.conlist.length;i++){
      vm.inputShow.push('false');
  }

  vm.deleteRow=function (i) {
     console.log('delete');
     if (confirm("你确定提交吗？")) {
       vm.conlist.splice(i,1);
        }
  };
 vm.edit=true;
 vm.editRow=function (i) {
   var target=event.target;
   if(target.innerHTML=='编辑'){
     target.innerHTML='完成';
      vm.edit=false;
   }else {
     target.innerHTML='编辑';
      vm.edit=true;
   }
 };

   vm.createEditRow=function (i) {
     var target=event.target;
     if(target.innerHTML=='新增'){
       vm.conlist.unshift({
         name:'请点击编辑',
         id:'',
         price:'请点击编辑',
         havesale:'请点击编辑'
       });
       target.innerHTML='完成';
       vm.inputShow.unshift('false');
       vm.edit=false;
     }else {
       target.innerHTML='新增';
        vm.edit=true;
     }
     console.log('createEditRow');
   };

}]);
