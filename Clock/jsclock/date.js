function go() {
    var today = new Date();
    
    var Day = today.getDate();
    
    if (Day < 10)
    {                  
        Day = '0' + Day;                        
    }                   
    
    var Month = today.getMonth()+1;
    
    if (Month < 10)                    
    {               
        Month = '0' + Month;
    }
    
    var Year = today.getFullYear();
    
    if (Year < 10)
    {
        Year = '0' + Year;
    }
                        
    var Hour = today.getHours();
                        
    if (Hour < 10) 
    {
        Hour = '0' + Hour;
    }
 
    var Minute = today.getMinutes();
    
    if (Minute < 10) 
    {
        Minute = '0' + Minute;
    }
   
    var Second = today.getSeconds();
   
    if (Second < 10) {
        Second = '0' + Second;
    }                                        
                
    document.getElementById('clock').innerHTML = '<p>' + Day + '/' + Month + '/' + Year + '<br>' + Hour + ':' + Minute + ':' + Second + '</p>'; 
                        
    setTimeout('go()' , 1000);
}