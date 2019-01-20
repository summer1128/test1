let b=document.querySelector(".dianji");
let c=document.querySelector(".mask1");
let d=document.querySelector(".tianxie");
let e=document.querySelector(".row-right-box");

e.onclick=function(){
	let d=document.querySelector(".tianxie");
	c.style.display="block";
    d.style.top="50%";
	d.style.transition="all 0.5s";
	console.log(d.style.transition);

}
b.onclick=function(){
   d.style.top="-50%";
  d.style.transition="all 0.5s";
  setTimeout(function(){
	  c.style.display="none";
  },300);
}