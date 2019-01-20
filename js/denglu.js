let userDuanxins=document.querySelectorAll(".select-left");
let xianshigongtong=document.querySelectorAll(".xianshigongtong");
let text=document.querySelector(".xuanzecall span");
let xuanzedenglus=document.querySelectorAll(".xuanzedenglu");
let bigboxs=document.querySelectorAll(".bigbox");
userDuanxins.forEach(function(ele,index){
	ele.onclick=function(){
	 	xianshigongtong.forEach(function(val){
			val.classList.remove("xianshi2");
           });
	if(index==0){
		xianshigongtong[index+1].classList.add("xianshi2");
	}else if(index==1){
		xianshigongtong[index-1].classList.add("xianshi2");
	}
	
	}
});
xuanzedenglus.forEach(function(ele,key){
	ele.onclick=function(){
		xuanzedenglus.forEach(function(val,index){
			val.classList.remove("active");
			bigboxs[index].classList.remove("bigbox1");
		});
			
	ele.classList.add("active");	
	bigboxs[key].classList.add("bigbox1");	
    }
	
});
