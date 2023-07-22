const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClik(){
    h1.style.color ="blue";
    
}
function handleMouseenter(){
    h1.innerText ="mouse in here.";

}
function handleMouseLeave(){
    h1.innerText = "Mouse is gone";
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}
function handleWindowCopy(){
    alert("copier");
}
function handleWindowoffline(){
    alert("SOS no WIFI");
}
function handleWindowonline(){
    alert("ALL GOOOOOOD");
}
h1.addEventListener("click",handleTitleClik);
h1.addEventListener("mouseenter",handleMouseenter);
h1.addEventListener("mouseleave",handleMouseLeave);


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("offline",handleWindowoffline);
window.addEventListener("online",handleWindowonline)