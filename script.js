// const user = {
//   name: "Faisal",
//   age: 22
// };

// fetch("https://jsonplaceholder.typicode.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify(user)
// })
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   });


// let enrollBtn = document.getElementById("enrollBtn");

// enrollBtn.addEventListener("click", function () {
//     window.location.href = "login.html";
// });

// let numbers = [10,5,20,8,15];
// console.log(numbers[20]);

// let str = "javascript";

// for(let i of str){
//     console.log ("i=" , i)
// }

// function hello(){
// }
// setTimeout(() => {
//     console.log ("hello");
// }, 2000);

// const num = (a,b)=>{
//     return  a+b;

// }

// const result = num(5,7);
// console.log(result);


// function findmax(arr){
//     let max 
// = arr[0];
// }
// for (let i = 1; i<= arr.length; i++){
//     if (arr [i] > max){
//         max = arr[i];
//     }
//     return max;

// }

// console.log(findmax ([4,9,2,15,7,])

// let a = 2;
// let b = 3;
//  [a,b] = [b,a];

//  console.log(a,b);

// let a = 12;
// console.log(a);

// let a = 34;
// let b = 23;
// console.log("sum of 10 and 20" + a+b);

// let a = 17;
// let b = 5;

// console.log(a % b);


// function doublenumbers (num){
//     return num.filter(num => doublenumbers >= 13 );
// }

// doublenumbers[11,12 ,13 ,14 ,15 ,16 ];


// const age = [12,13,14,15,16,17,18,];

// const result = age.filter (age => age >= 18);
//   console.log (result);


// const find = [10, 25, 7, 40, 18];

// console.log(find[3]);

// let numbers = [5, 10, 15, 20];


// const numbers = [10, 25, 7, 40, 18];

// let largest = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];
//     }
// }

// console.log(largest);

// function sum(a,b) {
//     const sum = a + b;
//     console.log ('sum is ' , sum);
    
// }

// sum(23, 25);
// sum(-2,1);
// sum(2222,2333);
// sum(1.5,2.5);
// sum(34, 56);


// function area(length,width){
//   return  length*width;
// }

//  const result = area(2,4);

//  console.log (result)

// function area(length,width){
//     return length*width;

// }
// const result = area(1,2);
// console.log (result);

// let number = [1,2,3,4,5,6];

// let result = number.filter(function (num){

//     return num *2;
// })

// console.log(result);

console.log ("hello");



// function stringreverse (inputstring){
//     console.log (inputstring);
// }
// console.log (reverseAstring ("mfaisal"))


const enrollbtn = document.querySelector("#enrollbtn");


if (enrollbtn) {
    enrollbtn.addEventListener("click", function(){
        window.location.href = "webs.html";
    });
}

const btn2 = document.querySelector("#btn2");

if (btn2) {
    btn2.addEventListener("click", function(){
        window.location.href = "register.html";
    });
}


    const age = document.querySelector("#age");
    const register = document.querySelector("#register");

    if (age && register) {
        register.addEventListener("click", function(event){
            event.preventDefault();
         if (age.value >= 18){
            alert ("you age have been  sucessful");
         } else {
           alert ("your age must be 18 or above");
         }
             
    });
    }
    

    
















