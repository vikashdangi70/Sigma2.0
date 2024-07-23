//Lec - 1                         -->This keyword use<--
// const student = {
//     name: "vikash",
//     age:22,
//     eng:94,
//     math:98,
//     phy:92,
//     getAvg(){
//         let avg=(this.eng+this.math+this.phy)/3;   
//         console.log(avg);
//     }
// }

//Lec -3                             -->Arrow Function<--

// const sum=(a,b) =>{
//     console.log(a+b);
// }

//Lec-5                     -->setTimeout function<--

// console.log("hii there!");
//   setTimeout( ()=>{
//     console.log("apna college");
//   },1000);                               //1000 i.e. 1sec.
//   console.log("welcome to ");

//Lec 6                      -->setInterval function<--

//   console.log("hii there!");
//    let id= setInterval( ()=>{
//       console.log("apna college");
//       },1000);                               //1000 i.e. 1sec.
//   console.log(id);

//Lec-8                    -->practice qs<--
//1 write an arrow functionthat returns square of a number "n"

// const square =(n) => n*n;
// console.log(square);

//2.write a function that print"hello world 5 times at interval of 2 second each

// let id =setInterval(()=>{
//     console.log("hello world!");
// },2000);

// setTimeout(()=>{                           //3 sec baad ye function run hoga rokne k liye
//     clearInterval(id);

// },3000);

//                                 ASSIGNMENT 

//1.Write an arrow function named array Average that'accepts an array of numbers and returns
//the average of those numbers

// const arrayAverage=(arr)=>{
//     let total=0;
//     for(let number of arr){
//         total+=number;
//     }
//     return total/arr.length;
// };
// let arr=[1,2,3,4,5,6];
// console.log(arrayAverage(arr));

//2..Write an arrow function named is Even() that takes a single number as argument and
//returns if it is even or not.

// let num=4;
// const isEven = (num) => num % 2 == 0;

