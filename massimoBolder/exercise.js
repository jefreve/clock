// 12. Write a JavaScript program to highlight the bold words of the following paragraph, on mouse over a certain link.
// Sample link and text :
// [On mouse over here bold words of the following paragraph will be highlighted]

// WE have just started THIS section for the users (BEGINNER to intermediate) who WANT to work 
//with VARIOUS JavaScript PROBLEMS and write scripts online to TEST their JavaScript SKILL.



let paragraph = document.getElementById("billone");
let spannato = document.querySelectorAll("span");

let yolo = Array.from(spannato);

function boldingElements(array){
  return array.forEach(e => {e.style.fontWeight = "bold",
  e.addEventListener("mouseover",(event)=>{event.target.style.color = "cyan"; 
  setTimeout(()=>{
    event.target.style.color = ""
  }, 1000)
})})
}

// spannato.addEventListener("mouseover", (event) => { spannato.setAttribute("style", "color: purple") ;});


boldingElements(yolo)