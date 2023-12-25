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
function square(num) {
     // var num=5;
     var result = num * num;
     document.write("Result : " + result + "<br/>");
}
function square1(num1, num2) {
     // var num=5;
     var result = num1 * num2;
     return result;
}
square(5);
square(6);
square(7);
document.write("Answer : " + square1(5, 6) + "<br/>");

// IIFEs and function expression
(function display(message) {
     document.write(message + "<br/>");
})("Jashim");
(function display1(a, b) {
     document.write("The sum : " + (a + b) + "<br/>");
})(10, 5);

//function expression
var display2 = function displayy() {
     document.write("I am Jashim<br/>");
}
display2();

//ARRAY ...................
var names = new Array();
names[0] = "Jasim";
names[1] = "jas";
names[2] = "NITU";
names[3] = "Rubel";
names[4] = "Fabi";
//ADD value last position in array;
names.push("Arpa");
names.push("putul");
names.push("Riya");
document.write("Array name : "+names[2]+ "<br/>" );
document.write("Array size : "+ names.length +"<br/>");
document.write("Array name : "+names[7]+ "<br/>" );
document.write("Array names : "+names+ " "  );
//DELETE value last position in array;
names.pop();
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
//DELETE value first position in array;
names.shift();
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
//ADD value first position in array;
names.unshift("Hafsa");
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
//ADD value any position in array;
names.splice(2,0,"Iva","Sabrina");
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
//DELETE value any position in array;
names.splice(4,2);
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
// REMOVE any value from array;
// orginal array no change;
// range is given;
var newarray = names.slice(1);
document.write("<br/>");
document.write("Array names : "+newarray+ " "  );
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Array names : "+names+ " "  );
// Sorting array accending alphabetic;
names.sort();
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Sorting Array names : "+names+ " "  );
//Sorting array desending alphabetic;
names.sort();
names.reverse();
document.write("<br/>Array size : "+ names.length +"<br/>");
document.write("Sorting Array names : "+names+ " "  );
var country1 = ["Bangladesh","India"];
var country2 = ["America","Canada"];
var country = country1.concat(country2);
document.write("<br/>Country Name : " +country+" <br/>");
//number sorting accending in array;
var arr = [3,4,1,5,2];
arr.sort(function(a,b){
     return a-b;
});
document.write("The sorting array : "+ arr+" ");
document.write("<br/>");
//number sorting desending in array;
arr.sort(function(a,b){
     return b-a;
});
document.write("The sorting array : "+ arr+" ");
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