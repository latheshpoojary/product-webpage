var list = {
    title: "",
    desc: "",
    time: "",
    priority: "",
    statustodo: "todo"

}
const arr = [];
const pop = document.querySelector('#exampleModal');
// console.log(pop);
const form = document.getElementById('myForm');
// console.log(form);




form.addEventListener('submit', function () {
    const background1 = document.querySelector('.modal-backdrop');
    // console.log(background1);
    event.preventDefault();
    list.title = document.getElementById('recipient-name').value;
    list.desc = document.getElementById('message-text').value;
    list.priority = document.getElementById('choice').value;
    list.time = document.getElementById('date').value;
    // console.log(list.time);
    // console.log(list.title);
    list.status = "todo";
    arr.push(list);
    pop.style.display = 'none';
    const container = document.querySelector(".containerBox");
    const todo = document.createElement("div");
    const todoheader = document.querySelector('.todoHeader');
    todo.classList.add("outercard","todo");
    


    // console.log('jjjj', arr[0].title);
    for (let a = 0; a < 1; a++) {


        const card = document.createElement("div");
        const cardheader = document.createElement("div");
        const cardBody = document.createElement("div");
        const cardTitle = document.createElement("h2");
        const carddesc = document.createElement("p");
        const cardpriority = document.createElement("p");
        const cardStatus = document.createElement("h4");
        const icondiv=document.createElement("div");
        const arrowIcon = document.createElement('i');

        // add necessary classes
        arrowIcon.classList.add('fas', 'fa-arrow-right','todoright');
        card.classList.add("card");
        icondiv.classList.add('arrowicon');
        
        icondiv.appendChild(arrowIcon);
        icondiv.style.display='flex';
        icondiv.style.justifyContent = 'space-between';
        todo.style.boxShadow = arr[a].priority;
        cardheader.classList.add("cardheader");
        cardTitle.classList.add("cardTitle")
        cardTitle.textContent = arr[a].title;
        // console.log("arr",Array[0].title);
        // cardheader.innerText=list.title;
        cardBody.classList.add("cardBody");
        carddesc.classList.add("carddesc");
        carddesc.textContent = arr[a].desc;
        // console.log("arr", arr[0].title);
        cardpriority.classList.add("cardpriority");
        const dest = new Date(list.time).getTime();
        console.log(dest);
        var x = setInterval(function () {
            var now = new Date().getTime();
            var diff = dest - now;
            var days = Math.floor(diff / (1000 * 60 * 60 * 24));
            // console.log(days);
            var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            console.log(minute,"minute");
            cardpriority.textContent = days + "d: " + hours + "h: " + minute + "min";

        }, 1000);
        
        cardStatus.classList.add("cardStatus");
        cardStatus.textContent = arr[a].status;
        cardheader.appendChild(cardTitle);
        cardBody.appendChild(carddesc);
        cardBody.appendChild(cardpriority);
        cardBody.appendChild(cardStatus);
        card.appendChild(cardheader);
        card.appendChild(cardBody);
        todo.appendChild(card);

        // container.appendChild(card)
        todoheader.appendChild(todo);
        todo.appendChild(icondiv);

        
        background1.style.display= 'none';
        const source = document.querySelector(".todo");
        // console.log(source);
        const destination = document.querySelector(".desti");
        var triggerright1 = document.querySelector(".todoright");
        triggerright1.addEventListener('click', () => {
            source.classList.remove("todo");
            source.classList.add("outercard", "working");
            triggerright1.classList.remove("todoright");
            triggerright1.classList.add("workingright");
            cardStatus.textContent = "working";
            

            destination.appendChild(source);
            const leftarrow = document.createElement("i");
            leftarrow.classList.add('fas', 'fa-arrow-left', 'workingleft');

            icondiv.appendChild(leftarrow);
            
            const workingSource = document.querySelector(".working");
            console.log("woriking div", workingSource);

            const destiWorking = document.querySelector(".destiDone");
            console.log("destination done", destiWorking);
            const triggerright2 = document.querySelector(".workingright");
            console.log("trigger 2", triggerright2);
            // triggerright2.addEventListener('click', () => {
            //     source.classList.remove("working");
            //     source.classList.add("outercard", "processed");
            //     triggerright1.classList.remove("workingright");
              
                


                
            //     cardStatus.textContent = "Done";
            //     triggerright1.classList.add("doneleft");
            //     destiWorking.appendChild(workingSource);
            // })
        })
        
    }
    
    form.reset();
    // container.append(todoheader);
    
    const close = document.getElementById('close');
    close.addEventListener('click', () => {
        form.reset();
    })



})


// a++;
// console.log("arr element",arr,"arr[0]",arr[0].title);
