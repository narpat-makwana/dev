// var res = function fun1(){
//   var x = 12;
//   console.log(x);
// }

// res();


// const add = (a,b) => a+b;
// console.log(add(10,20));


// Regular function using 'this'
// function RegularFunction() {
//   this.value = 1;

//   // Regular function has its own 'this' context
//   setInterval(function() {
//     this.value++;
//     console.log('Regular Function:', this.value);
//   }, 1000);
// }

// const regularObj = new RegularFunction();

// Arrow function using 'this'
// function ArrowFunction() {
// this.value = 1;

// Arrow function inherits 'this' from its lexical environment
//   setInterval(() => {
//     this.value;
//     console.log('Arrow Function:', this.value);
//   }, 1000);
// // }

// const arrowObj = new ArrowFunction();



let arr = [1, 2, 3, 'hello', true];

// console.log(arr)

// console.log(arr[2]);

// console.log(arr.length);

arr.push(6);
// console.log(arr);

// let poped = arr.pop();

// console.log(poped,arr)

// arr.shift()
// console.log(arr);

// arr.unshift(5);
// console.log(arr);


let arr1 = [1, 2, 3, 4];
let arr2 = ['a', 'b', 'c', 'd'];

let newArr = arr1.concat(arr2);

// console.log(newArr);

// console.log(newArr.length);


// console.log(arr.slice(1,3));

let i = arr.indexOf('hello');
// console.log(i);


// arr.forEach(function(num) {
//   console.log(num);
// });



// Map : 

const array1 = [2, 5, 7, 8, 9];

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

function binary(x) {
  return x.toString(2);
}

const output = array1.map(double);


// This is also valid syntax :  function in map()
// const output2 = array1.map(function cube(x){
//   return x*x*x;
// });


// Using Arrow function : 
// const output3 = array1.map((x) => {
//   return x*2;
// })

// More way to write arrow function with single statement: 
const output4 = array1.map((x) => x * 10);

// console.log(output);
// console.log(array1.map(square));
// console.log(array1.map(binary));
// console.log(output2);
// console.log(output3);

// console.log(output4);

const array2 = [11, 2, 5, 9, 401, 5, 36, 1];

function isOdd(x) {
  return x % 2;
}

function isEven(x) {
  return x % 2 == 0;
}


result1 = array2.filter(isOdd);
result2 = array2.filter(isEven);
result3 = array2.filter((x) => x < 4);




// console.log(result1);
// console.log(result2);
// console.log(result3);




// REDUCE : 

// find max : 

function findMax(array2) {
  let max = 0;
  for (let i = 0; i < array2.length; i++){
    if(array2[i] > max){
      max = array2[i];
    }
  }
  return max;
}

// console.log(findMax(array2));

const result4 = array2.reduce(function (max,curr){     // (accumlator, current)
  if(curr > max){
    max = curr;
  }
  return max;

},0);

// console.log(result4);



// MORE EXAMPLES:


const users = [{firstname : "rohan", lastname : "bhandari", age: 24},
{firstname : "anuj", lastname : "yadav", age: 23},
{firstname : "narpat", lastname : "mak", age: 22},
{firstname : "shubham", lastname : "parmar", age: 21},
{firstname : "gigar", lastname : "patel", age: 23},
];
// write firstname with surname : MAP :

// const result5 = users.map((x) => x.firstname + " " + x.lastname);
// console.log(result5);

// reduce : 

const res = users.reduce(function(acc, curr){

  if(acc[curr.age]){
    acc[curr.age] = ++acc[curr.age];
  }
  else{
    acc[curr.age] = 1;
  }
  return acc;

}, {});

// console.log(res);

// find first name of user whoes age is greater 22 : 

// const res2 = users.filter((x) => {
//   if(x.age > 22){
//     console.log(x.firstname)
//   }
// });

// const res2 = users.filter((x) => {
//   if(x.age > 22){
//     console.log(x.firstname);
//   }
// })


//using more method: chaining methods : 

const res2 = users.filter((x) => x.age > 22).map((x) => x.firstname)   //using both filter and map :   



// console.log(res2);







