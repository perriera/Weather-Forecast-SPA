weatherApp.controller('homeController', ['$scope', '$log', '$location', 'cityService', function($scope, $log, $location, cityService) {
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
    
    $scope.submit = function () {
        $location.path("/forecast");
    }
    
    $log.log(cityService.city);
    $log.log(cityService.namelength());
    
}]);

weatherApp.controller('forecastController', ['$scope', '$log', '$routeParams', 'cityService', 'weatherService', function($scope, $log, $routeParams, cityService, weatherService) {
    
    $scope.days = $routeParams.num || 2;
    
    $scope.city = cityService.city;
                                             
    $scope.weatherResult = weatherService.GetWeather($scope.city,$scope.days);
  
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) { 
        return new Date(dt * 1000);
    };
    
    console.log($scope.weatherResult);
    
    $scope.$watch('city', function() {
        cityService.city = $scope.city;
    });
                                             
}]);
