const source = document.querySelector(".todo");
console.log(source);
const destination = document.querySelector(".desti");
var trigger = document.querySelector(".fas");
trigger.addEventListener('click',()=>{
    destination.appendChild(source);
})