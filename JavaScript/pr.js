// console.log('hello world');


// Example of let variable   :-- let varibale used within the block of code
// if(true){
//   let a=5;
//   //console.log(a);
// }
// console.log(a)



// var a=5;
// var b=8;
// var d=89;
// var c=a+b+d;
// console.log(c);   

// let e = 8;
// console.log(e++);

// console.log(9===9);

//  let age=27;
//  let status=(age>=18)? 'yes vote' : 'no vote';

//  console.log(status);


// for(let i=0;i<8;i++){
//     console.log("Sunil");
// }


// let a=0;
// while(a<5){
//     console.log("Sunil kumar gupta");
//     a++;
// }


// let y=1;
// do{
//     console.log(y);
//     y++;
// } while(y < 10);


//object create

// let rectangle={
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };
// rectangle.draw();



// Factory Function

// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,

//         draw(){
//             console.log('drawing ractangle');
//         }
//     };
// }
  
//    let rectangleObj1 = createRectanlge(); 

// rectangle.lenth;
// rectangle.draw();

  //Javascript console API
// console.log("hello world");
// console.warn("this is warning");
// console.error("This is  an error"); 


 // 3 javascript Variable

//  var num1 = 34;
//  var num2 = 56;

//  console.log(num1+num2);



 //  4. Data types in javascript

   // number datatypes
    // var num1=555;
    // var num2=33.6653;
    // console.log(num1,num2);


    //String datatypes
    // var str1="this is string data types";
    // console.log(str1);


    // objects
    // var marks={
    //     sunil:98,
    //     sagar:97,
    //     Nishal:96,
    //     Gupta:95
    // }
    // console.log(marks)



/* At a very high level, there are two types of data types in javascript
1. Primitive data types:undefined , null , number, string, boolean , symbol
2. Reference data types: Arrays and objects
*/ 


// var arr=[1,2,3,4,5,6]

// console.log(arr);
// console.log(arr[1]);


// Operators in javscript

     //arithemtic operators

    //  var a=100;
    //  var b=10;

    //  console.log("The value of a+ b is",a+b);
    //  console.log("The value of a- b is",a-b);
    //  console.log("The value of a* b is",a*b);
    //  console.log("The value of a/ b is",a/b);

      

    // Function in JS

    // function avg(a,b){
    //     c=(a+b)/2;
    //     return c;
    // }
    // c1=avg(4,6);
    // c2=avg(14,16);
    // c3=avg(54,96);
    //  console.log(c1,c2,c3);


//     let myArr=["fan" ,"camera",35,null, true];

//     //Array methods

//     console.log(myArr.length);

//     myArr.pop();
//     myArr.push("Sunil");

//     myArr.shift()

//     const newLen = myArr.unshift("Sagar");

// console.log(newLen);
// console.log(myArr);



// String Methods in JavaSript

// let myLovelyString = "Sunil is a good boy boy boy";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("sunil"));
// console.log(myLovelyString.lastIndexOf("boy"));

// console.log(myLovelyString.slice(1,4));

// d=myLovelyString.replace("Sunil","Sagar");
// console.log(d,  myLovelyString);

// let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getHours());

 

   //DOM Manipulation

  //  let elem = document.getElementById('click');
  // //  console.log(elem);
         

  //  let elemClass = document.getElementsByClassName('container');
  //  console.log(elemClass);
  // //  elemClass[0].style.background='yellow';

  // elemClass[0].classList.add("bg-primary");
  // elemClass[0].classList.add("text-success");

  // // console.log(elemClass[0].innerHTML);
  // // console.log(elemClass[0].innerText);

  
  // tn = document.getElementsByTagName('div');
  // console.log(tn);
  // createdElement = document.createElement(p);
  // createdElement.innerText= "This  is a created paragraph";
  // tn[0].appendChild(createdElement);


  //Selecting using Query

  // sel = document.querySelector('.container');
  // console.log(sel)

  // sel=document.querySelectorAll('.container');
  // console.log(sel)

  // function clicked(){
  //   console.log('The button was clicked');
  // }

     
    // window.onload = function(){
    //   console.log('The document was loaded');
    // }



  //Events In javascript
  

    // firstContainer.addEventListener('click',function(){
    //   console.log("Clicked on Container");
    // })

    // firstContainer.addEventListener('mouseover',function(){
    //   console.log("Mouse on Container");
    // })

    // firstContainer.addEventListener('mouseout',function(){
    //   console.log("mouse out Container");
    // })

     

    // project

    // let a;
    // let date;
    // let time;

    // setInterval(()=>{
    //   a=new Date();
    //   date = a.toLocaleDateString();
    //   time=a.getHours() + ':' + a.getMinutes() +':'+ a.getSeconds();
    //   document.getElementById('time').innerHTML +time + "on" + date;
    // })

    









