weatherApp.service('cityService', function() {
   
    var self = this;
    this.city = 'New York, NY';
    
    this.namelength = function() {
      
        return self.city.length;
        
    };
    
});
