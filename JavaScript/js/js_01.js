// document.write("Java1010");
// document.write("JavaScript");

// var a=1;
// var b="Java1010";
// var c=true;
// var d;
// var e=null;
// document.write(a+"<br />");
// document.write(b+"<br />");
// document.write(c+"<br />");
// document.write(d+"<br />");
// document.write(e+"<br />");

// var a=1;
// if(a==1){
// 	alert("a="+a);
// }else{
// 	document.write("a="+a);
// }
// document.write("<br />");
// for(var i=0;i<10;i++){
// 	document.write("i="+i);
// }
// document.write("<br />");
// function speak(){
// 	document.write("我是一个函数");
// }

// function speak2(message){
// 	document.write("我是一个函数"+message);
// }

// speak();
// document.write("<br />");
// speak2("信息传递");
// document.write("<br />");

// for(var i=0;i<10;i++){
// 	if(i==3){
// 		break;
// 	}
// 	document.write("i="+i);
// }
// document.write("<br />");
// for(var i=0;i<10;i++){
// 	if(i==3){
// 		continue;
// 	}
// 	document.write("i="+i);
// }

function func(){
	alert("点击了一下");
}

function a(){
	var node=document.getElementById("node");
	var htm=node.innerHTML;
	alert(htm);
	node.innerHTML="<p>修改后的内容</p>";
}
//在parent节点尾部添加节点
function b(){
	var parent=document.getElementById("parent");
	var p=document.createElement("p");
	var content=document.createTextNode("添加的内容");
	p.appendChild(content);
	parent.appendChild(p);
}
//在node节点前添加节点
function c(){
	var parent=document.getElementById("parent");
	var node=document.getElementById("node");
	var p=document.createElement("p");
	var content=document.createTextNode("在node前添加的内容");
	p.appendChild(content);
	parent.insertBefore(p,node);
}

// 删除node节点
function d(){
	var parent=document.getElementById("parent");
	var node=document.getElementById("node");
	parent.removeChild(node);
}

function e(){
	var node=document.getElementById("node");
	node.style.color="red";
}



// function speak(msg){
// 	alert(msg);
// }
// var a=new Object();

// a.name="zhangsan";
// alert(a.name);
// a.func=speak;
// a.func("hello java1010");

// 1
// a.name=undefined;
// a.func=undefined;
// alert(a.name);
// a.func("hello java1010");
//2
// delete a.name;
// delete a.func;
// alert(a.name);
// a.func("hello java1010");



// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//         function speak(msg) {
//             alert(msg);
//         }
//         this.func = speak;
//     }
// }

// var zhangsan=new Person("张三",20);
// alert(zhangsan.name);
// alert(zhangsan.age);
// zhangsan.func("我是张三");

// var date=new Date();
// document.write(date.getTime()+"<br/>");
// document.write(date.getFullYear()+"<br/>");
// document.write((date.getMonth()+1)+"<br/>");
// document.write(date.getDate()+"<br/>");
// var today=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日";
// document.write(today+"<br/>");
// document.write(date.getHours()+"<br/>");
// document.write(date.getMinutes()+"<br/>");
// document.write(date.getSeconds()+"<br/>");
// today=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
// document.write(today+"<br/>");
// var day=date.getDay();
// var week;
// switch(day){
// case 0:week="星期日";break;
// case 1:week="星期一";break;
// case 2:week="星期二";break;
// case 3:week="星期三";break;
// case 4:week="星期四";break;
// case 5:week="星期五";break;
// case 6:week="星期六";break;
// }
// document.write(week+"<br/>");
// today=date.getFullYear()+"年"+(date.getMonth()+1)+"月"+date.getDate()+"日  "+week+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
// document.write(today+"<br/>");


// var a="1+2+3+4+5+6";
// var val=eval(a);
// alert(val);

// function delayAlert(){
// 	alert("3秒后弹出");
// }

// window.setTimeout("delayAlert()",3000);


function todayFunc(){
	var date=new Date();
    
	var today=date.getFullYear()+"年"+("0" + (date.getMonth()+1)).slice(-2)+"月"+("0" + date.getDate()).slice(-2)+"日  "+("0" + date.getHours()).slice(-2)+":"+("0" + date.getMinutes()).slice(-2)+":"+("0" + date.getSeconds()).slice(-2);
	// document.getElementByClassName("today").innerHTML=today;
    // alert(today)

    var node=document.getElementsByClassName("today")[0];
    // var node=document.getElementById("today");
	var htm=node.innerHTML;
    // alert(htm)
	node.innerHTML="<p>"+today+"</p>";
}

window.setInterval("todayFunc()",1000);

// window.open("http://www.java1010.com");

// window.onload=function(){
// 	alert("文档加载完毕");
// }
// window.onresize=function(){
// 	alert("窗口大小发生了变化");
// }