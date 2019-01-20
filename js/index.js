window.onload=function(){
//选项卡轮播图
	function selector(topvalue,bottomvalue){
		let toplists=document.querySelectorAll(topvalue);
		let bottomlists=document.querySelectorAll(bottomvalue);
        toplists.forEach(function(val,index){
			  val.onclick=function(){
				  toplists.forEach(function(ele,key){
					ele.classList.remove("active");
					bottomlists[key].classList.remove("active");
                   });
				val.classList.add("active");
				bottomlists[index].classList.add("active");
			}
			
		});
	}
selector(".first-floor .collocation-top-right li",".first-floor .collocation-bottom-right .yinchan");
selector(".second-floor .collocation-top-right li",".second-floor .collocation-bottom-right ul");
selector(".third-floor .collocation-top-right li",".third-floor .collocation-bottom-right ul");
selector(".fourth-floor .collocation-top-right li",".fourth-floor .collocation-bottom-right ul");
selector(".fifth-floor .collocation-top-right li",".fifth-floor .collocation-bottom-right ul");

//内容轮播图
function secletor(parent){
let rightBtn=document.querySelector(parent+" .neirong1-right");
let leftBtn=document.querySelector(parent+" .neirong1-left");
let neirongBigbox=document.querySelector(parent+" .neirongbigbox");
let neirongPoint=document.querySelectorAll(parent+" .neirong1-five li");
let neirongN=0;
let neirongSize=neirongPoint.length-1;
rightBtn.onclick=function(){
	neirongN++;
	neirongMove();
}
leftBtn.onclick=function(){
	neirongN--;
	neirongMove();
}
function neirongMove(){
	if(neirongN>neirongSize){
		neirongN=neirongSize;
	}
	if(neirongN<0){
		neirongN=0;
	}
	neirongBigbox.style.left=-296*neirongN+"px";
	neirongPoint.forEach(function(val,index){
		val.classList.remove("active");
	});
	neirongPoint[neirongN].classList.add("active");
}

neirongPoint.forEach(function(val,index){
		val.onclick=function(){
			neirongN=index;
			neirongMove();
		}
	});
	
}
secletor(".neirong1-box1");
secletor(".neirong1-box2");
secletor(".neirong1-box3");
secletor(".neirong1-box4");

// banner开始
let bannerBox=document.querySelector(".banner");
let bannerLeft=document.querySelector(".banner-btn-left");
let bannerRight=document.querySelector(".banner-btn-right");
let bannerImg=document.querySelectorAll(".banner-image li");
let bannerPoint=document.querySelectorAll(".banner-point li");
let bannerSize=bannerPoint.length-1;
let bannerN=0;
function bannerMove(){
	if(bannerN>bannerSize){
		bannerN=0;
	
	}
	if(bannerN<0){
		bannerN=bannerSize;
}
	
	 bannerPoint.forEach(function(val,index){
		 val.classList.remove("li-one");
		 bannerImg[index].classList.remove("active");
	 });
	 bannerPoint[bannerN].classList.add("li-one");
	 bannerImg[bannerN].classList.add("active");
}
let time=setInterval(function(){
	 bannerN++;
	 bannerMove();
},2000);
bannerBox.onmouseover=function(){
	clearInterval(time);
}
bannerBox.onmouseout=function(){
	time=setInterval(function(){
	bannerN++;
	bannerMove();
	},2000);
}
 bannerPoint.forEach(function(val,index){
		 val.onclick=function(){
			 bannerN=index;
			 bannerMove();
		 }
	 });
bannerLeft.onclick=function(){
	bannerN--;
	bannerMove();
}
bannerRight.onclick=function(){
	bannerN++;
	bannerMove();
}
//闪购开始
let flashLeft=document.querySelector(".flash-purchase-top-right-left");
let flashRight=document.querySelector(".flash-purchase-top-right-right");
let flashLis=document.querySelectorAll(".flash-purchase-bottom .clear li");
let flashBig=document.querySelector(".flash-purchase-bottom .clear");
let flashN=0;
let flashSize=flashLis.length-4;
flashRight.onclick=function(){
	flashN=flashN+4;
	flashMove();
}
flashLeft.onclick=function(){
	flashN=flashN-4;
	flashMove();
}
function flashMove(){
	if(flashN>flashSize){
		flashN=flashSize;
	}
	if(flashN<0){
		flashN=0;
	}
	flashBig.style.transform=`translate(${-248*flashN}px)`;
}

//回到顶部
function top(n){
	let huidaoTop=document.querySelector(n);
	let adv=document.querySelector(".top-box");
	if(document.documentElement.scrollTop>=adv.offsetTop){
	  huidaoTop.style.display="block";
	}
 window.onscroll=function(){
	if(document.documentElement.scrollTop>=adv.offsetTop){
	let top=document.documentElement.scrollTop;
	if(top==document.documentElement.scrollTop){
    setTimeout(function(){
		  huidaoTop.style.display="block";
			console.log(huidaoTop);
			if(document.documentElement.scrollTop===0){
				huidaoTop.style.display="none";
				}
	 },1000)};
   }
	else if(document.documentElement.scrollTop===0){
	huidaoTop.style.display="none";
  }
 }
 }
let a=document.querySelector(".youbian");
let b=document.querySelector(".youbian-big");
 if( window.getComputedStyle(a,null).display=="block"){
	 top(".youbian .huidao");
 }else if(window.getComputedStyle(b,null).display=="block"){
	 top(".youbian-big .huidao");
 }
 window.onresize=function(){
	 if( window.getComputedStyle(a,null).display=="block"){
	 	top(".youbian .huidao");
	 }else if(window.getComputedStyle(b,null).display=="block"){
	 	top(".youbian-big .huidao");
	 }
 }

//点击出现下拉框
let xuanzhongInput=document.querySelector(".xuanzhong-input");
let bigbox=document.querySelector(".right .box");
let bigsousuo=document.querySelector(".right .sousuo");
let xialaSelect=document.querySelector(".xianshi-select");
let inputTexts=document.querySelectorAll(".input-text span");
xuanzhongInput.onfocus=function(){
	inputTexts.forEach(function(ele){
		ele.style.opacity="0";
		});
	bigbox.classList.remove("right-unactive");
	bigbox.classList.add("right-active");
	bigsousuo.classList.remove("sousuo-unactive");
	bigsousuo.classList.add("sousuo-active");
	xialaSelect.style.display="block";
 }
xuanzhongInput.onblur=function(){
	inputTexts.forEach(function(ele){
		ele.style.opacity="1";
	});
	bigbox.classList.remove("right-active");
	bigbox.classList.add("right-unactive");
	bigsousuo.classList.remove("sousuo-active");
	bigsousuo.classList.add("sousuo-unactive");
	xialaSelect.style.display="none";
 }
//移入显示商品
let selectGoods=document.querySelectorAll(".middle .text");
let  xianshiGood=document.querySelector(".next_box_xianshi");
let boxactive=document.querySelector(".next_box");
selectGoods.forEach(function(ele,index){
	ele.onmouseover=function(){
         if(index>=8){
			xianshiGood.style.display="none";
            return;
		}else{
		xianshiGood.style.display="block";
	}
	}
	ele.onmouseout=function(){
		xianshiGood.style.display="none";
	}
});
}

