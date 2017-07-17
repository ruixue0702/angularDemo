// notesCtrl.js
myApp.controller("notesCtrl",function($scope){

    $scope.notesList = [{notesTitle:'Clean House',notesCon:'今天天气好晴朗', done:false}];

    $scope.notesAdd = function() {
        $scope.notesList.push({notesTitle:$scope.notesTitle,notesCon:$scope.notesCon, done:false});
        $scope.notesTitle = "";
        $scope.notesCon = "";
    };

    $scope.remove = function() {
        var oldList = $scope.notesList;
        $scope.notesList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.notesList.push(x);
        });
    };
    
})