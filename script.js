const clock = document.getElementById('clock');
const status_msg = document.getElementById('status_msg');
const ringtone = document.getElementById('ringtone');

let alarmTime,alarmIntervalId,time;

function displayTime(){
    const now = new Date();
    const hh=now.getHours().toString().padStart(2,'0');
    const mm=now.getMinutes().toString().padStart(2,'0');
    const ss=now.getSeconds().toString().padStart(2,'0');
    time=`${hh}:${mm}`;
    clock.innerHTML=`${hh}:${mm}:${ss}`;
}

setInterval("displayTime()",1000);

function checkAlarm(){
    if(time===alarmTime){
        ringtone.play();
        status_msg.innerHTML="Alarm Activated & Play...!!";
        clearInterval(alarmIntervalId);
    }
}


function activateAlarm(){
    alarmTime = document.getElementById('alarm_time').value;
    status_msg.innerHTML="Alarm is set for "+alarmTime+" & Activated !!";
    alarmIntervalId=setInterval("checkAlarm()",1000);
}

function stopAlarm(){
    ringtone.pause();
    status_msg.innerHTML="Alarm is aborted by User...!!";
}