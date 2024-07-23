/*print 1 to 15 all odd numbers*/

// for (let i = 1; i<=15; i=i+2){
//     console.log(i);
// }

// for (let i = 0; i<=20; i=i+2){
//     console.log(i);
//     }

/* lec.6    print the multiplication table of 5*/

// for (let i=5; i<=50; i=i+5){
//     console.log(i);

// }
//           user input

// let n=prompt("enter any number");

// n=parseInt(n)

// for (let i=n; i<=n*10; i=i+n){
//     console.log(i);

// }

//lec.7   
//      Nested loop

//   for (let i = 1 ; i <= 5; i++){
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j <=6; j++){
//         console.log(j);
//     }
//   }

//Lec-8
//     While loop

// let a=5;
// while(a<=10){
//     console.log(a);
//      a++;
// }

//reverse print karwana hai to 

// let a=10;
// while(a>=1){
//     console.log(a);
//      a--;
// }

//Lec 9
//FAVOrite MOvie 

// let favmovie="vik";
// let guess=prompt("Guess My Fav. Movie");
// while ((guess != favmovie) && (guess !="quite")){
//     guess=prompt("wronge guess pls try again");
// }
// if (guess==favmovie){
//     console.log("congratulations")
// }

// let favmovie="vik";

// let guess=prompt("Guess My Fav. Movie");

//  while (guess != favmovie){
//     if (guess=="quite"){
//         console.log("you quite");
//         break;
//     }
//      guess=prompt("wronge guess pls try again");
//  }
//   if (guess==favmovie){
//      console.log("congratulations")
//  }

//lec 11-   Loops with Array

// let fruits=["apple","banana","mango","Grapes","orange"];
// for (let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

//lec 12 loops with nested array

// let heroes=[["ironman","superman","spiderman"],["wonder woman","flash","krish"]];

// for (let i=0; i<heroes.length; i++){

//     console.log(`List ${i}`);

//     for (let j=0; j<heroes[i].length; j++){

//         console.log(heroes[i][j]);
//     }
// }


//lec-13 for-of loop

// let fruits=["mango","grapes","orange","litchi","watermelon"];
// for (fruit of fruits){
//     console.log(fruit);
// }

//lec 14 nested for-of loop

// let heroes=[["superman","spiderman","krish"],["ww","flash","mm"]];
// for (list of heroes){
//     for (name of list){
//         console.log(name);
//     }
//     console.log(list);
// }

// LEc -15                            built todo app only using js
/*
let todo = [];

let req = prompt("please enter your request");
while(true){
    if (req=="quit"){
        console.log("Quitting App");
        break; 
    }
    if (req=="list"){
        console.log("----------");

        for (let i=0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------");
    }
    else if(req=="add"){
       let task= prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added"); 
    }
    else if (req=="delete"){
        let idx= prompt("please enter the task idx");
        todo.splice(idx,1);
        console.log("task is deleted")
    }
    
    }
  */
/*                             Assignment of part 4

Qs1.Write a JS program to delete all occurrences of element‘num’ in a given array.
Example:if arr=[1,2,3,4,5,6,2,3] & num=2 Result should be arr=[1,3,4,5,6,3]

let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0; i<arr.length;i++){
    if (arr[i]==num){
        arr.splice(i,1)
    }
}
console.log(arr);

Qs2.Write a JS program to find the no. of digits in a number.
Example:if number = 287152,count=6 

let number =123456789;
let count=0;
let copy = number;
while(copy > 0){
    count++;
    copy = Math.floor(copy/10);
}console.log(count);
                 

que.3 Write a JS program to find the sum of digits in a number.
      Example: if number = 287152,sum=25

let number = 287152;
let sum = 0;
let copy = number;
while( copy>0){
    digit=copy%10;
    sum +=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);  

Qs4.Print the factorial of a number n. 
[Factorial of a number n is the product of all positive integers less than or equal to a given positive 
    integer and denoted by that integer.]
Example:7! (factorial of 7)=1x2x3x4x5x6x7=5040
        5!(factorial of 5)=1x2x3x4x5=120
        3!(factorial of 3)=1x2x3=6
        0!Isalways 1

let n=5;
let factorial=1;
for(let i=1; i<=n; i++){
    factorial *= i;
}
console.log(`factorialof${n}is${factorial}`);

que5.Find the largest number in an array with only positive numbers

let arr = [2,5,10,4,2,7,1,9];
let largest=0;
for(let i=0;i<=arr.length;i++){
    if(largest <arr[i]){
        largest=arr[i];
    }
    }
    console.log(largest);
    */
