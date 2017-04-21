function calculate(){
    init();
}

function init(){
    var date = new Date();
    if(validateDate(date)){
        console.log("this is correct!");
        var turnaroundTime = document.getElementsByName("tatime")[0].valueAsNumber;
        calculateDueDate(date, turnaroundTime);
    }else{
        alert("You can't submit new bug outside working hours or on holidays!");
    }
}

function validateDate(date){
    var dayOfTheWeek = date.getDay();
    if(dayOfTheWeek == 0 || dayOfTheWeek == 6){
        return false;
    }
    var hour = date.getHours();
    
    return hour >= 9 && hour <= 17;
}

function calculateDueDate(submitDate, turnaroundTime){ // (date, hour)
    console.log("Get " + submitDate + " date and " + turnaroundTime + " time" );
}