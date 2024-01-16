// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const navImg = document.getElementById("nav-img");
const links = document.getElementById("nav-links");
// add event listener
navBtn.addEventListener("click", () => {
   links.classList.toggle("show-links"); 

   if (links.classList.contains("show-links")) {
      navImg.src = "/images/Icon - Close.png"
   } else {
      navImg.src = "/images/Icon - Menu.png"
   }
});
