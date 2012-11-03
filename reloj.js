var Clock = function(hours, minutes, seconds){
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.alarm = "";
    
this.time = function(){
    var newHour = hours; 
    var newMinute = minutes;
    var newSecond = seconds;   
    
    if(this.hours < 10){
      newHour = ( "0" + this.hours);
    } else {
    newHour = this.hours;
    }
    if(this.minutes < 10){
      newMinute = ( "0" + this.minutes);
    } else {
    newMinute = this.minutes;
    }
    if(this.seconds < 10){
      newSecond = ("0" + this.seconds);
    } else {
      newSecond = this.seconds;
    }
    return newHour + ":" + newMinute + ":" + newSecond;
 };
    
    this.tick = function(){
    this.seconds++;
    if(this.seconds > 59){
      this.seconds = 0;
      this.minutes++;
    }
    if(this.minutes > 59){
      this.minutes = 0;
      this.hours++;
    }
    if(this.hours > 23){
     this.hours = 0;
    }
    if(this.alarm == this.time()){
    console.log(this.time() + " " + "¡Alarma!");
    }
     
      }; 
    this.addAlarm = function(alarm) {
    this.alarm = alarm;
    };    
  };
    
   
        
 var clock = new Clock(06,59,59);
    clock.addAlarm("07:00:00");
    console.log(clock.time());   
    clock.tick();
    console.log(clock.time());     
    
     var clock = new Clock(06,59,59);
    clock.addAlarm("07:00:00");
    console.log(clock.time());   
    clock.tick();
    console.log(clock.time());
    