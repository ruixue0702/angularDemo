// module.js 
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/timetable',{
        templateUrl:"view/timetable.html"
    })
    .when('/calculator',{
        templateUrl:"view/calculator.html"
    })
    .when('/newslist',{
        templateUrl:"view/newslist.html"
    })
    .when('/notes',{
        templateUrl:"view/notes.html"
    })
    .when('/form',{
        templateUrl:"view/form.html"
    })
    .otherwise({redirectTo:'/timetable'});
}]);