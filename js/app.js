var app=angular.module("myApp",['ngRoute'])

.controller('HomeController', function ($scope, $route) { 
	$scope.$route = $route;
})
.controller('AboutController', function ($scope, $route) { $scope.$route = $route;})
.controller('ServiceController', function ($scope, $route) { $scope.$route = $route;})
.controller('CaseController', function ($scope, $route) { 
    $scope.$route = $route;
    $scope.init = function() {
        $('.VivaTimeline').vivaTimeline({
            carousel: true,
            carouselTime: 3000
        });
    }
})
.config(function($routeProvider){
	$routeProvider
	.when('/home', {
        templateUrl: 'home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutController'
    })
    .when('/service', {
        templateUrl: 'service.html',
        controller: 'ServiceController'
    })
    .when('/case', {
        templateUrl: 'case.html',
        controller: 'CaseController'
    })
    .otherwise({
        redirectTo: '/home'
    });
	

})
.controller('myController', function ($scope) { 
	$scope.addClass=false;
	$scope.select=function($event){
		$(".nav").find("li").removeClass('active');
		$($event.target).parents("li").addClass('active')
		
	}

})

