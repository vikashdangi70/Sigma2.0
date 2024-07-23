//lec-1     Obeject literels

// let students={
//     name:"Vikash",
//     age:22,
//     marks:94.3,
// };

//lec3       Creating a Post

// const post = {
//     username:"@vikashdangi",
//     content:"this is my #first post",
//     likes:150,
//     repost:5,
//     tags:["@sati","@vikku","@balajievents"]
     
// }

//lec 4        get values

// let student={
//     name:"vikash",
//     age:22,
//     marks:94
// };


//lec-7     add/update value

// const students={
//     name:"Vikash",
//     age:22, 
//     marks:99,
//     city:"vidisha"
// }

//lec-8     nested objest

// const classInfo={                              //here classinfo is object
//     v:{                            
//         grade:"a+",
//         city:"vidisha"                        //v also object itself
//     },
//     r:{
//         grade:"a",
//         city:"bpl"                                    //r also object itself
//     },
//     n:{
//         grade:"b+",
//         city:"a"                                   //n also object itself
//     }
// };

//lec 12 practice
//qs1   generate a random number between 1 to 100
//math.random()*100
//math.floor(math.random()*100)    //decimal value ko hatane k liye floor lgaya
//math.floor(math.random()*100) +1          +1 isliye kiya because kuki upr k code se range 0 se 99 tk hogi aur mrko yha 100 tk chaiyew h




//qs2  generate a random number between 1 to 5

// math.floor(math.random()*5) +1 



//lec 13-                       Guessing game

// const max=prompt("enter the maximum number");

// const random= Math.floor(Math.random()*max)+1;

// let guess=prompt("guess the number");
// while(true){
//     if(guess== "quite"){
//         console.log("user quit");
//         break;

//     }
//     if (guess=="random"){
//         console.log("you are right ! congrats!!");
//         break;
//     }
//     else if (guess<random){
       
//       guess = prompt("your guess was to small");
//     }
//     else{
       
//         guess = prompt("your guess was to large ");
//       }
// }

//                               Assignment
/*Qs.1Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6]

let dice=Math.floor(Math.random()*6)+1;
console.log(dice);

Qs2.Create an object representing a car that stores the following properties for the 
car:name,model,color.Print the car’s name

const car={
    name:"MarutiSuzuki",
    model:"Maruti Suzuki Dzire",
    color:"white",
};
console.log(car.name);

Qs.3 Create an object Person with their name,age and city.
Edit their city’s original value to change it to “NewYork”.
Add a new property country and set it to the United States.


const Person={
    name:"JaneDoe",
    age:21, 
    city:"NewJersey",
};
Person.city="NewYork";
Person.country="UnitedStates";
console.log(Person);

*/