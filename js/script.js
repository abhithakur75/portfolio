const hamBtn = document.querySelector(".ham-burger");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", () => {
  if( nav.style.display=="block"){
    nav.style.display="none"
  }
  else{
     nav.style.display="block"
  }
});


