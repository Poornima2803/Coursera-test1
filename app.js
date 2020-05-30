(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function ($scope) {
  $scope.itemname="";
  $scope.str="";
  $scope.calculateitem = function() {
  var res=0;
  res=checkLunch($scope.itemname);
   if($scope.itemname=='')
   {
     return "Please enter data first";
   }
  else if(res>0&&res<=3)
  {
    return "Enjoy!";
  }
  else if(res>3) {
    return "Too much!";
  }

  };
  function checkLunch(string){
    $scope.result="words";

    var words=[];
    words=string.split(',');
    var l=words.length;
    console.log(l);
    return l;
  }
// console.log(calculateitem());

});

})();
