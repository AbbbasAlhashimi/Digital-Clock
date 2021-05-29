setInterval(function()
{
    var currentTime = new Date(); //Date Object
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var period = "AM";

    if(hours >= 12)
    {
        period = "PM";
    }

    if(hours > 12)
    {
        hours=hours-12;
    }

    if(minutes <10)
    {
        minutes = "0" + minutes; //Add Zero before number like 5 => 05
    }

    if(seconds <10)
    {
        seconds="0"+seconds; //Add Zero before number like 5 => 05
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    var clock = document.getElementById('clock');
    clock.innerText = clockTime;}, 1000);
