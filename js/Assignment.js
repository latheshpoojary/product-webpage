// const animal1={
//     name:'lion',
//     species:'cruel',
//     sayWord:()=> console.log("burrrrrrrrrrrrr"),
//     action:()=>console.log("faster than light")

// }
// const animal2={
//     name:'rabbit',
//     species:'soft',
//     sayWord:()=> console.log("piiiiiiiiiiiiii"),
//     action:()=>console.log("Need som evegtable")

// }
// const bird={
//     name:'crow',
//     species:'intermediate',
//     sayWord:()=> console.log("kaaaaaaaaaaaaa"),
//     action:()=>console.log("dark than milk")

// }
// console.log(bird.name);
// animal.sayWord();
// animal2.action();


// using class
// class animal{
//     constructor(name,phrase){
//         this.name=name;
//         this.phrase=phrase;
//     }
//     action=()=> console.log(this.phrase);


// }
// const ant=new animal('lion','im devil of this world');
// ant.action();


////Encapsulation
class student{
    #DOB
    
    constructor(name,year,branch,DOB){
        this.name=name;
        this.year=year;
        this.branch=branch;
        this.#DOB=DOB;
    }
    sayDOB = () => console.log('my date of birth is', this.#DOB);
    
}
const lathesh=new student('lathesh',4,'ise','04-07-2001');
lathesh.sayDOB();
// console.log(lathesh.#DOB);//can't be accessed private variable outside the class
console.log(lathesh);//it won't display DOB variable
