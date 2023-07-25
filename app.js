const h1 = document.querySelector("div.hello:first-child h1");
const bye = document.querySelector("div.bye:first-child h1");
const bye2 = document.querySelector("div.bye:h2");
function handleTitleClik(){
    const clickedClass = "clickedClass";
    h1.classList.toggle(clickedClass);
  

    
}

h1.addEventListener("click",handleTitleClik);
bye.addEventListener("click",handleTitleClik);
bye2.addEventListener("click",handleTitleClik);
