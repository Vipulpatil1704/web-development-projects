let button=document.getElementById("button");
let video=document.createElement("iframe");
let mydiv=document.getElementById("mydiv");
video.setAttribute("width","100%");
video.setAttribute("height","90%");
video.setAttribute("src","https://www.youtube.com/embed/tV2Ecd7m6Tc");
let pbutton=document.getElementsByClassName("ytp-button")[0];
console.log(pbutton);
button.addEventListener("click",function(){
    let image=document.getElementById("img");
    image.remove(); //or we can display it to none and add this class.
    mydiv.appendChild(video);
    button.classList.add("buttonn");

});