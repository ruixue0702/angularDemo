// formCtrl.js
myApp.controller("formCtrl",function($scope){

    $scope.formList = [{formUsername:'飘雪的季节',formTel:'15701567472',formCon:'留言', done:false}];

    $scope.formAdd = function() {
        $scope.formList.push({formUsername:$scope.formUsername,formTel:$scope.formTel,formCon:$scope.formCon, done:false});
        $scope.formUsername = "";
        $scope.formTel = "";
        $scope.formCon = "";
    };

    $scope.remove = function() {
        var oldList = $scope.formList;
        $scope.formList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.formList.push(x);
        });
    };
    
})