appService.factory('sideService', function() {
  var myList = new sidebar();
  return {
    list: myList
  }
});
