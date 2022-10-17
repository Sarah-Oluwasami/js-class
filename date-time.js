

function eventInput(){
    let date;
    let currentDate = document.getElementById('event');
    oldDate = new Date (currentDate.value)
    var newDate = new Date()

    if (oldDate < newDate){
        date = 'Past Event'
    }else if (oldDate == newDate){
        date = 'Today\'s Event'
    }
    else {date = 'Upcoming Event'}

    

    document.getElementById('result').innerHTML = date

    var months = [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12];
        output = months[oldDate.getMonth()];
        
    document.getElementById('result1').innerHTML = output

        output1 = newDate.toLocaleTimeString();

    document.getElementById('result2').innerHTML = output1
}







