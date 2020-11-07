const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const description = document.querySelector(".title-description");
const sizes = document.querySelector(".sizes");
const sneaker = document.querySelector(".shoe");
const purchase = document.querySelector(".purchase-btn");

//Movement 
container.addEventListener('mousemove', (e) =>{
    const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`; 
})
//Move in from mouse
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = "none"; 
    title.style.transform = "translateZ(100px)";
    sneaker.style.transform = "translateZ(100px)";
    description.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";  
    purchase.style.transform = "translateZ(100px)";  
})
//Move out from mouse
container.addEventListener('mouseleave', (e) =>{
    card.style.transition = "all 0.8s ease"; 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; 
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
})

