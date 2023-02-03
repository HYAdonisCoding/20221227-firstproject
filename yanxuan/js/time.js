function todayFunc(){
	var date=new Date();
    
	// var today=date.getFullYear()+"年"+("0" + (date.getMonth()+1)).slice(-2)+"月"+("0" + date.getDate()).slice(-2)+"日  "+("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2)+":"+("0" + date.getSeconds()).slice(-2);

    var node = document.getElementsByClassName("limit")[0];
    var details = node.getElementsByClassName("time-detail")[0];
    
    setHourTime(details.getElementsByClassName("hour")[0], date.getHours());
    setMinutesTime(details.getElementsByClassName("minute")[0], date.getMinutes());
    setSecondTime(details.getElementsByClassName("second")[0], date.getSeconds());
}

function setHourTime(detail, time) {
    detail.innerHTML = '<span class="detail hour">' + ('0' + time).slice(-2) + '</span>';
}

function setMinutesTime(detail, time) {
    detail.innerHTML = '<span class="detail minute">' + ('0' + time).slice(-2) + '</span>';
}

function setSecondTime(detail, time) {
    detail.innerHTML = '<span class="detail second">' + ('0' + time).slice(-2) + '</span>';
}

window.setInterval("todayFunc()",1000);