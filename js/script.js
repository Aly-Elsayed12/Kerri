let nav = document.querySelector("#navbar")
let links = document.querySelectorAll("#navbar a")
let homelink = document.querySelector("#home")

links.forEach(link => {
  link.style = "color :white"
});
homelink.style = "color : #e65f78"

window.addEventListener("scroll" , changNavColor)

function changNavColor(){
  if (window.scrollY > 100) {
    nav.classList.add("bg-body-tertiary");
    links.forEach(link => {
      link.style ="color : dark";
      });

  } else {
    nav.classList.remove("bg-body-tertiary");
    links.forEach(link => {
      link.style = "color :white"
    });
    homelink.style = "color : #e65f78"
  }
}




