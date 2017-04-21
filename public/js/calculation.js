function calculate(){
    init();
}

function init(){
    var date = new Date();
    var turnaroundTime = document.getElementsByName("tatime")[0].valueAsNumber;
    if(validateDate(date) && validateTaTime(turnaroundTime)){
        calculateDueDate(date, turnaroundTime);
    }else{
        if(!validateDate(date)){
            alert("You can't submit new bug outside working hours or on holidays!");
        }
        if(!validateTaTime(turnaroundTime)){
            alert("You must give positive hours!");
        }
    }
}

function validateDate(date){
    var dayOfTheWeek = date.getDay();
    if(dayOfTheWeek == 0 || dayOfTheWeek == 6){
        return false;
    }
    var hour = date.getHours();
    var minute = date.getMinutes();
    
    return (hour >= 9 && hour < 17) || (hour == 17 && minute == 0);
}

function validateTaTime(tatime){
    return tatime >= 0;
}

function calculateDueDate(submitDate, turnaroundTime){ // (date, hour)
    console.log("Get " + submitDate + " date and " + turnaroundTime + " time" );
    
    var workingDays= ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    var startHour = 9;
    var endHour = 17;
    var workingHours = 8;
    
    var currentHour = submitDate.getHours();
    var currentMinute = submitDate.getMinutes();
    var currentDay = submitDate.getDay() - 1;
    
    var resultDay = currentDay;
    var resultHour = currentHour;
    var resultMinute = currentMinute;
    
    var tmpHour = currentHour + turnaroundTime;
    if((tmpHour > endHour) || (tmpHour == endHour && currentMinute > 0)){
        var dayCounter = 0;
        while(tmpHour > endHour){
            tmpHour -= workingHours;
            ++dayCounter;
        }
        if((tmpHour == endHour && currentMinute > 0)){
            ++dayCounter;
            tmpHour = startHour;
        }
        resultDay = (resultDay + dayCounter) % workingDays.length;
        resultHour = tmpHour;
    }else{
        resultHour = tmpHour;
    }
    
    var result = "The bug will be fixed on " + workingDays[resultDay] + " at " + resultHour + ":" + resultMinute;
    alert(result);
    return result;
}