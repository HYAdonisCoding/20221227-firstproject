function todayFunc(){
	var date=new Date();
    
	// var today=date.getFullYear()+"年"+("0" + (date.getMonth()+1)).slice(-2)+"月"+("0" + date.getDate()).slice(-2)+"日  "+("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2)+":"+("0" + date.getSeconds()).slice(-2);

    var node = document.getElementsByClassName("limit")[0];
    var details = node.getElementsByClassName("time-detail")[0];
    // 设置到期时间
    var limitDate = new Date();
    limitDate.setHours(19);
    limitDate.setMinutes(0);
    limitDate.setSeconds(0);

    var lefttime = (limitDate - date) ;
    var days=Math.floor(lefttime/1000/60/60/24);  //计算天数   1s=1000毫秒
    var hours=Math.floor(lefttime/1000/60/60%24);
    var mins=Math.floor(lefttime/1000/60%60);
    var miao=Math.floor(lefttime/1000%60);

    setHourTime(details.getElementsByClassName("hour")[0], hours);
    setMinutesTime(details.getElementsByClassName("minute")[0], mins);
    setSecondTime(details.getElementsByClassName("second")[0], miao);
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