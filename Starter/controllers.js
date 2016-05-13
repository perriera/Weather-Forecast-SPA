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

weatherApp.controller('forecastController', ['$scope', '$resource', '$log', '$routeParams', 'cityService', function($scope, $resource, $log, $routeParams, cityService) {
    
    $scope.days = $routeParams.num || 2;
    
    $scope.city = cityService.city;
                                             
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=a3526908608d2f8442ccd3de67fc5b84", { 
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }}    );
       
    $scope.weatherResult = $scope.weatherAPI.get({ 
        q: $scope.city, cnt: $scope.days 
    });
  
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

