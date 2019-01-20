let leftbtn=document.querySelector(".banner-btn-left");
let rightbtn=document.querySelector(".banner-btn-right");
let Maxul=document.querySelector(".tupian ul");
let xiangqingLeft=document.querySelector(".xiangqing-left");
let pointbtns=document.querySelectorAll(".huadong div");
let length=pointbtns.length-1;
let n=0;

function move(){
	if(n>length){
		n=0;
	}
	if(n<0){
		n=length;
	}
	pointbtns.forEach(function(ele){
		ele.classList.remove("active");
	});
    pointbtns[n].classList.add("active");
	Maxul.style.left=n*(-560)+"px";
}
pointbtns.forEach(function(ele,key){
	ele.onclick=function(){
	    n=key;
		move();
	}
});
let time=setInterval(function(){
	n++;
	move();
},2000);
xiangqingLeft.onmouseover=function(){
	clearInterval(time);
}
Maxul.onmouseout=function(){
	time=setInterval(function(){
	n++;
	move();
	},2000);
}
rightbtn.onclick=function(){
	n++;
	move();
}
leftbtn.onclick=function(){
	n--;
	move();
}