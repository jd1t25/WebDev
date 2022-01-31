const hamburger = document.querySelector("#ham");
const main = document.querySelector(".mainlink")

hamburger.addEventListener('click', ()=>{
    console.log("hello")
    hamburger.classList.toggle("open");
    main.classList.toggle("dblock");
});
