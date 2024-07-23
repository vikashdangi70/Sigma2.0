//Lec 1 - Array Methods

//ex.
// let arr=[1,2,3,4,5];
// function print(el){
//     console.log(el);
// }
// arr.forEach(print)
// //or
// arr.forEach(function(el){
//     console.log(el);
// }
// );

// let num=[1,2,3,4]

// let double = num.map(function(el){
//     return el*2;
// });

//Lec 2 - Map & Filter

//Filter example

// let nums=[1,2,3,4,5,6,7,9,8];

// let ans=nums.filter((el) => {

//     return el%2==0;
// })


//Lec - 5 Reduce function

// let arr=[1,2,3];
// arr.reduce((res,el)=>(res+el));
// console.log(arr);

//Lec -6 Practice Qs

//Qs 1 Check all numbers in our array are multiple of 10 or not 


// let num=[10,20,30,40];
// let ans=num.every((el)=>el%10==0);
// console.log(ans);

//Qs 2 Create a function to fin minimum of an array


// let num=[10,20,30,40];
// let min=num.reduce((min,el)=>{
//     if ( min < el){
//         return min;
//     }else{
//         return el;
//     }
// });
// console.log(min);


//                                                   ASSIGNMENT

//Qs1.Square and sum the array elements using the arrow function and then find the average of the array.

// let nums=[1,2,3,4,5];
// const square=nums.map((num)=>num*num);
// console.log(square);
// let sum=square.reduce((acc,cur)=>acc+cur,0);
// let avg=sum/nums.length;
// console.log(avg);


//Qs2.Create a new array using the map function whose each element is equal to the original element plus 5

// let numbers=[2,4,6,8,-2,-4];
// console.log(numbers.map((number)=>number+5));


//Qs3.Create a new array whose elements are in upper case of words present in the original array. 

// let strings=["adam","bob","catlyn","donald","eve"];
// console.log(strings.map((string)=>string.toUpperCase()));


//Qs4.Write a function called double And Return Args which accepts an array and a variable number of arguments.
//The function should return a new array with the original array values and all of the additional arguments doubled

// const doubleAndReturnArgs=(arr,...args)=>[
//     ...arr,
//     ...args.map((v)=>v*2),
// ];
// doubleAndReturnArgs([1,2,3],4,4);  //[1,2,3,8,8]
// doubleAndReturnArgs([2],10,4);     //[2,20,8]


//Qs5.Write a function called merge Objects that accepts two objects and returns a new object which contains all the keys and 
//    values of the first object and second object.

// const mergeObjects=(obj1,obj2)=>({...obj1,...obj2});
// mergeObjects({a:1,b:2},{c:3,d:4});