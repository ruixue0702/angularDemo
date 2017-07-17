myApp.controller("timetableCtrl",function($scope,$http){
	$http.get("json/timetable.json")
		.then(function(result){
			$scope.timetables = result.data.records;
		}
	);
    $scope.myshow = true;
    $scope.toggle = function() {
        $scope.myshow = !$scope.myshow;
    };
    $scope.options = ["数学", "语文", "英语","物理","化学","生物","历史","地理","政治","体育","音乐","美术","自习"];

});