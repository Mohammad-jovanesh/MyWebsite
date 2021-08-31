$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center:true,
    loop:true,
    margin:10,
    nav:true,
    navText:[
      "<",">"
    ],
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      },
      1500:{
        items:3
      }
  }
  });
});


const Btn_Nav=document.querySelector(".Btn_Open");
const Nav_Section=document.querySelector("nav")
const Wrapper_Section=document.querySelector(".Wrapepr");
const Close_Btn=document.querySelector(".Close")
Btn_Nav.addEventListener("click",()=>{
  Btn_Nav.classList.toggle("Open");
  Wrapper_Section.classList.toggle("Move_Warpper");
  Nav_Section.classList.toggle("show");
})
Close_Btn.addEventListener("click",()=>{
  Btn_Nav.classList.toggle("Open");
  Nav_Section.classList.toggle("show");
  Wrapper_Section.classList.toggle("Move_Warpper");
}) 


gsap.registerPlugin(ScrollTrigger);
const Layers =gsap.utils.toArray(".Layer");
const Txt_items =gsap.utils.toArray(".Self_item_text");
const Over_Layers =gsap.utils.toArray(".OverLayer");
const Counter_Skill=gsap.utils.toArray(".MySkill .card_Skill");




Layers.forEach((woof,i)=>{
  var Tl=gsap.timeline({
    scrollTrigger:{
      trigger:woof,
      start:"top 67%",
    }
  })
 Tl.to(woof,{
 scaleX:"1" ,
 
}
 )
.to(Over_Layers[i],{
scaleX:"1",
transformOrigin: "left",

})
.to(Over_Layers[i],{
  scaleX:"0",
transformOrigin: "right",
delay:0.3,
  })
  
  .to(Txt_items[i],{
   opacity:"1",
   scale:"1",
    },"-=0.5")
})
const CircleSvg=document.querySelectorAll(".Progress_1 circle")
var Radius=CircleSvg[0].r.baseVal.value ;
var CircumFerence=Radius*2*Math.PI;



Counter_Skill.forEach((Items,i)=>{
  
  gsap.to (Items,{scrollTrigger:{
    trigger:Items,
    start:"top 70%"},duration:1,opacity:1,y:0,onStart:()=>{
      console.log("Start")
    let Num1=0;
    let Num2=0;
    let Num3=0;
    var Arr=[]
    var All_H1=document.querySelectorAll(".Skill_1 h1");
   
   var MyTimer=
    setInterval(()=>{
      if(Num1<90 ){
        Num1++;
        All_H1[0].innerHTML=Num1
        
        if(Num2<80){
          Num2++;
          All_H1[1].innerHTML=Num2
        }
        if(Num3<60) {
          Num3++;
          All_H1[2].innerHTML=Num3
        }
     
      }else clearInterval(MyTimer)
       Arr=[Num1,Num2,Num3]
       
      CircleSvg.forEach((Cirl,Index)=>{
        CircleSvg[Index].style.strokeDashoffset=CircumFerence-(Arr[Index]/100)*CircumFerence
        
      })
     },10)
  
    }})
  


 
})












