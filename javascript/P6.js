/* function vikash() {
     console.log("RAM_RAM");
 }
print vikash();*/

// function printName(){
//     console.log("vikashdangi");
// }
// printName();

//                         -->function me loop laga ke 1 to 5  number print karna <--

// function print1to5(){
//     for (let i=1; i<=5; i++){
//         console.log(i);

//     }
// }
// print1to5();

//                          -->function me if else statment use karna <--

// function isAdult(){
//     let age=8;
//     if (age>=18){
//         console.log("you are adult");
//     }
//     else{
//         console.log("you are not adult");
//     }
// }
// isAdult();

//    Lec 2                   -->Practice Qs<--
 
//Qs . Create a function that prints a poem


// function printPoem(){
//     console.log("Twinkle Twinkle Little Star");
//     console.log("How Are Wonder What you Are ");
// }
// printPoem();


//    Lec 3                   -->Practice Qs<--

//Qs   Create a Function to roll a dice & always display the value of the dice (1 to 6).

// function rollDice(){
// let rand = Math.floor (Math.random () * 6 ) + 1 ;
// console.log(rand);
// }
// rollDice();

//   Lec 4                        -->Functions with arguments<--

// function printName(name){
//     console.log(name);

// }
// printName("vikash");

//                           for ex.

// function printInfo(name,age){
//     console.log(`${name}'s age is ${age}`);

// }
// printInfo("vikash",22);


//    Lec 5                   -->Practice Qs<--

//Create a function that give us avg.of three numbers.

// function avg(a,b,c){
//     let avgr=(a+b+c)/3;
   
//     console.log(avgr);
// }
// avg(2,4,6);

//    Lec 6                   -->Practice Qs<--

// function Table(n){
//      for (i=n; i<=n*10;i+=n){
//         console.log(i);
//      }
// }
// Table(2)

//Lec 8                   -->Practice Qs<--
 // create a function that returns the sum of numbers from 1 to n .

//  function getsum(n){
//      let sum = 0;
//      for (let i=1; i<=n; i++){
//           sum += i;
//      }
//      return sum;
//  }

 //Lec 9                    -->Practice Qs<--

 //  Create a function that returns the concatenation of all string in an array.

//  let str=["hello","hii","bye"];

//  function concat(str){
//      let result;
//      for (let i=0; i<=str.length;i++){

//           result +=str[i];
//      }

//      return result;
//  }


// lec 13                    -->Function Expression<--

// const sum = function(a,b){
//     return a+b;
// }
// sum (2,2);

// let name="vikash";
// let sum=function(a,b){
//     return a+b;

// }

//Lec -15                  -->Higher Oreder Function<--

// function multipleGreet(func,count){
//     for (let i = 1; i<=count; i++){
//         func();
//     }

// }

// let greet =function(){
//     console.log("hello bhai!");
// }
// multipleGreet(greet,10);

//Lec-16                    -->Higher Order function (Returns)

/*let even=function(n){
    console.log(n%2==0);
}
let odd =function(n){
    console.log(!(n%2==0));
}

function oddEvenTest(request){
    if (request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    else if(request=="even"){
            return function(n){
                console.log(n%2==0);
            }
        }
        else{
            console.log("wrong request");
        }
    }
}
*/

//                                              Assignment

//Qs1.Write a JavaScript function that returns array elements larger than a number.

// let arr = [8,9,10,1,2,3,4,5,6,7];
// let num = 5 ;
// //elements larger than a number num 
// function getElements(arr, num){

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > num ){
//             console.log(arr[i]);g
//         }
//     }
// }
// getElements(arr,num)

//qs.2  Write a JavaScript function to extract unique characters froma string. 
//Example:str=“abcdabcdefgggh”
  //         ans=“abcdefgh”

//   let str="abcdabcdefgggh";
//   //function to get String with all unique elements 
//   function getUnique(str){
//     let ans="";
//     for(let i=0; i<str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)==-1){

//             //if current character is not added,then addition in ans 
//             //otherwise it is duplicate

//             ans +=currChar;
//         }
//     }
//     return ans;
// }
// getUnique(str);


//qs.3  Write a JavaScript function that accepts a list of country names as input and returns 
//the longest country name as output.
//Example:country=["Australia","Germany","United States of America"]
//output:"United States of America"


// let country=["Australia","Germany","United States of America"];
// function longestName(country){
//     let ansIdx=0;
//     for( let i=0; i<country.length; i++){
//         let ansLen=country[ansIdx].length;
//         let currLen=country[i].length;
//         if(currLen>ansLen){
//             ansIdx=i;
//         }
//     }
//     return country[ansIdx];
// } 
// longestName(country);


//qs4.Write the js function to count thenumber of vowelsin a string arguments


// let str="apnacollege";
// function countVowels(str){
//     let count=0;
//     for( let i = 0; i<str.length; i++){
//         if(str.charAt(i)=="a"||
//         str.charAt(i)=="e"||
//         str.charAt(i)=="i"||
//         str.charAt(i)=="o"||
//         str.charAt(i)=="u"){
//             count++;
//         }
//     }
//     return count;
// }

//qs.5  Write a js function to generate a random number with in a range (Start,end)

// let start=100;
// let end=200;
// function generateRandom(start,end){
//     let diff=end-start;
//     return Math.floor(Math.random() * diff) + start;
// }