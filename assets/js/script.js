// js file

const scrollContainer=document.querySelector(".gallery");
const backBtn=document.querySelector("#backBtn");
const nextBtn=document.querySelector("#nextBtn");

//scroll bahaviour  for scroll weel
scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior ="auto";
})

nextBtn.addEventListener("click",()=>{
     scrollContainer.scrollLeft +=900;
     scrollContainer.style.scrollBehavior ="smooth";
})
backBtn.addEventListener("click",()=>{
    scrollContainer.scrollLeft -=900
    scrollContainer.style.scrollBehavior ="smooth";

});


