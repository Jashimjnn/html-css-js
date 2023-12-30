document.write("Name : Md Jshim Uddin<br/>");
document.write("Phone : 01992578305 <br/>");
// alert("Hello");
// var name = "Nitu";
//      document.write("Name : "+name);



// var base = parseInt(prompt("Enter Base : "));     
// var height = parseInt(prompt("Enter Height : "));   
// var area = base * height;
// document.write("<br/> Area :"+area); 
// var num = 5;
// if (num % 2 == 0)
//      console.log("Even");
// else
//      console.log("Odd"); 
// for(var i=1;i<=10;i++)
// {
//      document.write("<h6>Bangladesh</h6>");
// }
// function square(num) {
//      // var num=5;
//      var result = num * num;
//      document.write("Result : " + result + "<br/>");
// }
// function square1(num1, num2) {
//      // var num=5;
//      var result = num1 * num2;
//      return result;
// }
// square(5);
// square(6);
// square(7);
// document.write("Answer : " + square1(5, 6) + "<br/>");



// IIFEs and function expression
// (function display(message) {
//      document.write(message + "<br/>");
// })("Jashim");
// (function display1(a, b) {
//      document.write("The sum : " + (a + b) + "<br/>");
// })(10, 5);



// //function expression
// var display2 = function displayy() {
//      document.write("I am Jashim<br/>");
// }
// display2();



//ARRAY ...................
// var names = new Array();
// names[0] = "Jasim";
// names[1] = "jas";
// names[2] = "NITU";
// names[3] = "Rubel";
// names[4] = "Fabi";
// //ADD value last position in array;
// names.push("Arpa");
// names.push("putul");
// names.push("Riya");
// document.write("Array name : "+names[2]+ "<br/>" );
// document.write("Array size : "+ names.length +"<br/>");
// document.write("Array name : "+names[7]+ "<br/>" );
// document.write("Array names : "+names+ " "  );
//DELETE value last position in array;
// names.pop();
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// //DELETE value first position in array;
// names.shift();
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// //ADD value first position in array;
// names.unshift("Hafsa");
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// //ADD value any position in array;
// names.splice(2,0,"Iva","Sabrina");
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// //DELETE value any position in array;
// names.splice(4,2);
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// REMOVE any value from array;
// orginal array no change;
// range is given;
// var newarray = names.slice(1);
// document.write("<br/>");
// document.write("Array names : "+newarray+ " "  );
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Array names : "+names+ " "  );
// // Sorting array accending alphabetic;
// names.sort();
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Sorting Array names : "+names+ " "  );
// //Sorting array desending alphabetic;
// names.sort();
// names.reverse();
// document.write("<br/>Array size : "+ names.length +"<br/>");
// document.write("Sorting Array names : "+names+ " "  );
// var country1 = ["Bangladesh","India"];
// var country2 = ["America","Canada"];
// var country = country1.concat(country2);
// document.write("<br/>Country Name : " +country+" <br/>");
//number sorting accending in array;
// var arr = [3,4,1,5,2];
// arr.sort(function(a,b){
//      return a-b;
// });
// document.write("The sorting array : "+ arr+" ");
// document.write("<br/>");
// //number sorting desending in array;
// arr.sort(function(a,b){
//      return b-a;
// });
// document.write("The sorting array : "+ arr+" ");
// var ar = new Array(5);
// var sum=0;
// for(var i=0;i<5;i++)
// {
//      ar[i]=parseInt(prompt("Enater value"));
//      sum+=ar[i];
// }
// document.write("Array list : ");
// for(var i=0;i<5;i++)
// {
//      document.write(ar[i]+" ");
// }
// document.write("<br/>");
// document.write("Array Sum : "+sum);
// function highest(scores) {
//      var max = scores[0];
//      for (var i = 1; i < scores.length; i++) {
//           if (max < scores[i]) {
//                max = scores[i];
//           }
//      }
//      return max;
// }
// var scores = [1, 2, 3, 4, 5];
// var maxScores = highest(scores);
// document.write("Max : " + maxScores + "<br/>");




//2D array;
// function highestRunScorer(playersInfo) {
//      var highestScorer = playersInfo[0][0];
//      var highestScore = playersInfo[0][1];

//      for (var x = 1; x < playersInfo.length; x++) {
//        if (highestScore < playersInfo[x][1]) {
//          highestScore = playersInfo[x][1];
//          highestScorer = playersInfo[x][0];
//        }
//      }

//      return highestScorer;
//    }

//    var playersInfo = [
//      ["Ashraful", 95],
//      ["Mizan", 125],
//      ["Rakib", 45],
//      ["lu", 105],
//    ];

//    var names = highestRunScorer(playersInfo);
//    console.log(names);




// how to create and use object
// var name = "Md Jashim Uddin";
// var age = 24;
// var cgpa = 4.00;
// var lang = ["c","c++","python","java"];
// function Student(name,age,cgpa,lang){
//      this.name = name;
//      this.age = age;
//      this.cgpa = cgpa;
//      this.lang = lang;

//      this.display = function(){
//       document.write("Name : "+this.name +"<br/>");
//       document.write("Age : "+this.age +"<br/>");
//       document.write("CGPA : "+this.cgpa +"<br/>");
//       document.write("Language : "+this.lang +"<br/><br/><br/>");
//      }
// }
// var student1 = new Student("Md Jashim Uddin",24,4.00,["c","c++","java"]);
// var student2 = new Student("Nitu",24,4.00,["c","c++","java"]);
// var student3 = new Student("Putul",24,4.00,["c","c++","java"]);
// var student4 = new Student("Hafsa",24,4.00,["c","c++","java"]);
// student1.display();
// student2.display();
// student3.display();
// student4.display();
// document.write(student1.name);
// document.write(student1);




//Math Object;
// document.write(Math.sqrt(25));
// Math.abs();
// Math.sin();
// Math.pow();
// Math.floor();
// Math.ceil();
// Math.round();
// Math.max();
// Math.min();
// Math.random();



//Date object and date methods;
// var date = new Date();
// document.write(date +"<br/>");
// var year = date.getFullYear();
// document.write(year +"<br/>");
// var Month = date.getMonth();
// document.write(Month +"<br/>");
// var cdate = date.getDate()
// document.write(cdate +"<br/>");




//DOM | select html elements
// document.getElementById("heading1").innerHTML = "HELLO";
// document.getElementById("heading2").innerHTML = "GOOD BYE";
// document.getElementById("pera").innerHTML = "BYE";
// document.getElementsByTagName("h1")[0].innerHTML = "HI";
// document.getElementsByTagName("h1")[1].innerHTML = "HELLO";




//query selector
// document.querySelector("#heading1").innerHTML = "I am changed";
// document.querySelector(".heading2").innerHTML = "I am changed";
// document.querySelector("p").innerHTML = "I am changed";
// document.querySelector("a").innerHTML = "I am changed";
// document.querySelector("li a").innerHTML = "I am changed";
// document.querySelector(".my-div a").innerHTML = "I am changed";



//Event Handler to onclick event;
// function mymessag1() {
//      var myvar = document.querySelector("#para");
//      myvar.innerHTML = "You have clicked button 1";
// }
// function mymessag2() {
//      var myvar = document.querySelector("#para");
//      myvar.innerHTML = "You have clicked button 2";
// }

// var myvar = document.querySelector("#para");
// function mymessag1() {
//      myvar.innerHTML = "You have clicked button 1";
// }
// function mymessag2() {
//      myvar.innerHTML = "You have clicked button 2";
// }

// var myvar = document.querySelector("#img");
// function myPicture1() {
//      myvar.src = "html.jpg";
// }
// function myPicture2() {
//      myvar.src = "Jashim.jpg.jpg";
// }




//Find, create, add, remove html elements
// var heading = document.createElement("h1");
// var text = document.createTextNode("This is heading");
// heading.appendChild(text);
// var mydiv = document.getElementById("My-Div");
// mydiv.appendChild(heading);

// var heading1 = document.getElementsByTagName("h1")[1];
// mydiv.removeChild(heading1);

// var heading0 = document.createElement("h1");
// var text0 = document.createTextNode("This is heading 0");
// heading0.appendChild(text0);
// var heading2 = document.getElementsByTagName("h1")[0];
// mydiv.insertBefore(heading0,heading2);




//image slider;
// var photos = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];
// var imgTag = document.querySelector("img");
// var count = 0;
// function next() {
//      count++;
//      if (count >= photos.length) {
//           count = 0;
//           imgTag.src = photos[count];
//      }
//      else {
//           imgTag.src = photos[count];
//      }
// }
// function prev() {
//      count--;
//      if (count < 0) {
//           count = photos.length-1;
//           imgTag.src = photos[count];
//      }
//      else {
//           imgTag.src = photos[count];
//      }
// }



//Changing CSS style dynamically;
// function addStyle() {
//     var myvar = document.querySelector("#para");
//     myvar.classList.add("para-style");
// }
// function removeStyle() {
//     var myvar = document.querySelector("#para");
//     myvar.classList.remove("para-style");
// }




//Event Listener;
// document.querySelector("button").addEventListener("click",mybutton);
// function mybutton()
// {
//     alert("Hello");
// }


//how to play audio in javascript + //How to add and remove animation + Keypress listener
// for (var i = 0; i < 3; i++) {
//     document.querySelectorAll(".btn")[i].addEventListener("click", function () {
//         var text = this.innerHTML;
//         console.log(text);
//         audioPlay(text);
//         playAnimation(text);

//     });
// }

// document.addEventListener("keypress",function (event) {
//     var text = event.key;
//     audioPlay(text);
//     playAnimation(text);
//   });

// function audioPlay(text){
//     switch (text) {
//         case "A":
//             var audio = new Audio("kuje.mp3");
//             audio.play();
//             break;
//         case "B":
//             var audio = new Audio("kuje.mp3");
//             audio.play();
//             break;
//         case "C":
//             var audio = new Audio("kuje.mp3");
//             audio.play();
//             break;
//     }
// }
// function playAnimation(text){
//     var slbtn=document.querySelector("."+text)
//     slbtn.classList.add("anim");

//     setTimeout(function(){
//         slbtn.classList.remove("anim");
//     },1000);
// }



//DOM Event | Event Object | onchange event
// const input = document.querySelector('input');
// input.addEventListener('change',changeHadler);

// function changeHadler(e){
//     console.log("changed");
// }




// finding the elements
// onsubmit event
// const form = document.querySelector("form");
// const name = form.querySelector("div #name");
// const email = form.querySelector("div #email");
// const password = form.querySelector("div #password");

// form.addEventListener("submit", formHandler);

// function formHandler(e) {
//   e.preventDefault();

//   const userInfo = {
//     name: name.value,
//     email: email.value,
//     password: password.value,
//   };

//   console.log(userInfo);
//   name.value = "";
//   email.value = "";
//   password.value = "";
// }



//DOM Event | Event Object | media events
//  audio / video events
// canplay, play, playing, pause, progress, ended, volumechange, waiting
// const video = document.querySelector("video");
// video.addEventListener("canplay", function () {
//   console.log("canplay");
// });

// video.addEventListener("play", function () {
//   console.log("play");
// });
// video.addEventListener("playing", function () {
//   console.log("playing");
// });

// video.addEventListener("pause", function () {
//   console.log("pause");
// });
// video.addEventListener("ended", function () {
//   console.log("Thanks for watching");
// });
// video.addEventListener("volumechange", function () {
//   console.log("volumechange");
// });



//DOM Event | Event Object | scroll, resize,
// load, unload,
// scroll
// resize
// toggle - details

// window.addEventListener("load", function () {
//   console.log("load");
// });
// window.addEventListener("unload", function () {
//   console.log("unload");
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll");
// });

// window.addEventListener("resize", function () {
//   const width = window.outerWidth;
//   const height = window.outerHeight;
//   console.log(`height: ${height}, width: ${width}`);
// });

// const details = document.querySelector("details");

// details.addEventListener("toggle", function (e) {
//   console.log(e.target.open);
// });






// MouseEvent - <html>, <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>
// 1. onclick
// 2. ondblclick
// 3. onmousedown
// 4. onmousedup
// 5. onmouseenter
// 6. onmouseleave
// 7. onmousemove
// 8. onmouseover
console.clear();
const div = document.querySelector("div");
div.addEventListener("click", function (e) {
  //   console.log("click is occured");
  //   console.log(e.target);
  //   console.log(e.target.id);
  //   console.log(e.target.className);
  //   console.log(e.target.innerHTML);
  //   console.log(e.target.innerText);
  //   console.log(e.target.textContent);
});
// div.addEventListener("dblclick", function () {
//   console.log("dblclick is occured");
// });
// div.addEventListener("mousedown", function () {
//   console.log("mousedown is occured");
// });
// div.addEventListener("mouseup", function () {
//   console.log("mouseup is occured");
// });
// div.addEventListener("mouseenter", function () {
//   console.log("mouseenter is occured");
// });
// div.addEventListener("mouseleave", function () {
//   console.log("mouseleave is occured");
// });
// div.addEventListener("mouseover", function () {
//   console.log("mouseover is occured");
// });
// div.addEventListener("mousemove", function (e) {
//   //   console.log("mousemove is occured");
//   //   console.log("clientX = " + e.clientX + ", clientY = " + e.clientY);
//   console.log("offsetX = " + e.offsetX + ", offsetY = " + e.offsetY);
// });

// const buttons = document.querySelectorAll(".btn");

// Array.from(buttons).map((button) => {
//   button.addEventListener("click", function (e) {
//     console.log(e.target.innerText);
//   });
// });




// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctlKey, repeat

// const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function (e) {
//   if (e.repeat) {
//     alert("do not repeat");
//   }
// });
// textarea.addEventListener("keypress", function () {
//   console.log("keypress");
// });
// textarea.addEventListener("keyup", function (e) {
//   if (e.shiftKey) {
//     console.log("shift+" + e.key);
//   }
// });






// FocusEvent Object
//  <br>, <head>, <title>, <html>, <iframe>, <meta>, <param>, <script>, <style>, <base>, <bdo>,

// 1. onblur
// 2. onfocus
// 3. onfocusin
// 4. onfocusout

// const input = document.querySelector("input");
// input.addEventListener("blur", function (e) {
//   //   console.log(e.target.value);
//   input.value = e.target.value.toUpperCase();
// });
// input.addEventListener("focus", function () {
//   //   console.log("focus is occured");
//   //   input.style.backgroundColor = "orange";
//   //   input.style.padding = "2rem";
// });
// input.addEventListener("focusin", function () {
//   console.log("focusin is occured");
// });
// input.addEventListener("focusout", function () {
//   console.log("focusout is occured");
// });




// ClipboardEvent Object
// oncopy
// oncut
// onpaste
// const input = document.querySelector("input");
// const p = document.querySelector("p");
// input.addEventListener("copy", function () {
//   p.innerText = "you have copied";
// });
// input.addEventListener("cut", function () {
//   p.innerText = "you have cut";
// });
// input.addEventListener("paste", function () {
//   p.innerText = "you have pasted";
// });





// BOM (Browser Object Model)
// window object
// location object
/**
 * Paste the following code in your index.html file
 *  <h1>BOM</h1>
    <div class="location-div">
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
    </div>

    <button id="visit-button">visit my website</button>
 */
    console.clear();

    var locationDiv = document.querySelector(".location-div");
    var p1 = locationDiv.children[0];
    p1.textContent = location.href;
    
    var p2 = locationDiv.children[1];
    p2.textContent = location.protocol;
    
    var p3 = locationDiv.children[2];
    p3.textContent = location.hostname;
    
    var p4 = locationDiv.children[3];
    p4.textContent = location.port;
    
    var p5 = locationDiv.children[4];
    p5.textContent = location.pathname;
    
    const visitButton = document.getElementById("visit-button");
    visitButton.addEventListener("click", function () {
      location.assign("https://www.studywithanis.com");
    });