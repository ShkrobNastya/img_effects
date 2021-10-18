const i1 = document.querySelector(".fa-square");
const i2 = document.querySelector(".fa-th-large");
const i3 = document.querySelector(".fa-th");

const i = document.querySelector(".icons");

i.addEventListener('click', (e) => {
    console.log(e.target.classList);
   if (e.target.classList.contains("fa-square")) {
       for (let k=1; k<5; k++) {
           document.getElementById(`column${k}`).style.width="100%";
       }
   } else if(e.target.classList.contains("fa-th-large")) {
    for (let k=1; k<5; k++) {
        document.getElementById(`column${k}`).style.width="50%";
    }
   } else if(e.target.classList.contains("fa-th")) {
    for (let k=1; k<5; k++) {
        document.getElementById(`column${k}`).style.width="25%";
    }
   }
});