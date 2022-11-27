// const n = 10;
// for (let i = 0; i < n; i++) {//for(let i=0;i<n;console.log,i++)
//   console.log(i);
// }




//ARRAY
//JSON=objects
const a = [12, 13, "Snekhal", "Peymar", null, undefined];

//we dont use for loops for production
for(let i=0;i<6;i++){
    console.log(a[i]);
}


//map => executes a function one by one

//key value pair
const person_details={
    name:"Snekhal",
    surname: "Prasad",
    age: 24,
    footballers: ["Penaldo", "Pessi","Peymar"],
    schools: [
        {
        name: "BRV",
        classes: "LKG TO 12TH"
        },
        {
            name: "NITT",
            classes: "BTECH "
        }
        ],
    
    };
console.log(person_details.schools)
    
