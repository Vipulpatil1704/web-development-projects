var element=document.querySelector(".container");
console.log(element.offsetTop);
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");
var child3=document.querySelector(".child3");
  document.addEventListener("scroll",function(){
    if(child1.getBoundingClientRect().top==0)
  {
     document.body.style.backgroundColor=child1.getAttribute("id");
  }
  
 else if(child2.getBoundingClientRect().top==0)
  {
    document.body.style.backgroundColor=child2.getAttribute("id");
  }
  
 else if(child3.getBoundingClientRect().top==0)
  {
    document.body.style.backgroundColor=child3.getAttribute("id");
  }
  // else {
  //   document.body.style.backgroundColor="#fff";
  // }
  })
 


