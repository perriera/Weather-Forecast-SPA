weatherApp.service('cityService', function() {
   
    var self = this;
    this.city = 'New York, NY';
    
    this.namelength = function() {
      
        return self.city.length;
        
    };
    
});

weatherApp.service('weatherService', ['$resource',function($resource) {
   
    this.GetWeather = function(city,days) {
      
        weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?appid=a3526908608d2f8442ccd3de67fc5b84", { 
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }}    );
       
        return weatherAPI.get({ 
            q: city, cnt: days 
        });

    };
  
}]);
