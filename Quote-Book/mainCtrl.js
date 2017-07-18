angular.module('myApp').controller('mainCtrl', function($scope, myServ){
  $scope.users = myServ.getData()
  $scope.addQuote = myServ.addData
  $scope.removeQuote = myServ.removeData


})
