// newslistCtrl.js
myApp.controller("newslistCtrl",function($scope,$http){
	$http.get("json/newslist.json")
		.then(function(result){
			$scope.newslists = result.data.inner;
			$scope.outernewslists = result.data.outer;
		}
	);
	$scope.innershows = true;
	$scope.outershows = false;
	$scope.innershow = function(){
		$scope.innershows = true;
		$scope.outershows = false;
	}
	$scope.outershow = function(){
		$scope.innershows = false;
		$scope.outershows = true;
	}
    
})