// //Chap# 21-25

//Task 1:
// var first = prompt("Enter first name:");
// var last = prompt("Enter last name:");
// var fullName = "Good Morning" + " " + first + " " + last;
// alert(fullName);

// //Task 2:
// var inp = prompt("Write your favorite mobile phone model:");
// document.write("My favorite phone is: " + inp + "<br>");
// document.write("Length of string: " + inp.length);

// //Task 3:
// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Index of 'n': " + word.indexOf('n'));

// //Task 4:
// var word = "Hello World";
// document.write("String: " + word + "<br>");
// document.write("Last index of letter 'l': " + word.lastIndexOf('l'));

// //Task 5:
// var word = "Pakistani";
// document.write("String: " + word + "<br>");
// document.write("Character at index 3: " + word.charAt(3));

// //Task 6:
// var first = prompt("Enter first name:");
// var last = prompt("Enter last name:");
// var fullName = "Good Morning " + first.concat(last);
// alert(fullName);

// //Task 7:
// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// document.write("After replacement: " + city.replace("Hyder", "Islam"));

// //Task 8:
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message + "<br>");
// document.write("After replacement: " + message.split("and").join("&"));

// //Task 9:
// var string = "472";
// document.write("Value: " + string + "<br>");
// document.write("Type: " + typeof(string) + "<br>");
// var convert = parseInt(string);
// document.write("Value: " + convert + "<br>");
// document.write("Type: " + typeof(convert));

// //Task 10:
// var inp = prompt("Write any word:");
// document.write("User input: " + inp + "<br>");
// document.write("Upper Case: " + inp.toUpperCase());

// //Task 11:
// var inp = prompt("Write any word:");
// document.write("User input: " + inp + "<br>");
// const nameCapitalized = inp.charAt(0).toUpperCase() + inp.slice(1)
// document.write("Title case: " + nameCapitalized);

// //Task 12:
// var num = 35.36;
// document.write("Number: " + num + "<br>");
// var num1 = num.toString();
// document.write("Result: " + num1.replace(".", ""));

// //Task 13:
// var username = prompt("Enter your name:");
// for (var i = 0; i < username.length; i++) {
//     if (username.charCodeAt(i) == 33 || username.charCodeAt(i) == 44 || username.charCodeAt(i) == 46 || username.charCodeAt(i) == 64) {
//         alert("PLease enter a valid username");
//     }
// }

// //Task 14:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var search = prompt("Welcome to Rehman Bakery. What do you want to order sir/ma'am?");

// function checkItem(A) {
//     return A == search;
// }
// search = search.toLowerCase();
// var item = A.filter(checkItem);
// var index = A.indexOf(search);
// if (item == 0) {
//     document.write("We are sorry. " + search + " is not available in our bakery");
// } else {
//     document.write(item + " is available in our bakery at " + index);
// }

// //Task 15:
// var pass = prompt("Enter your password:");
// if (pass[0] >= 1 && pass[0] <= 9) {
//     document.write("Password can not begin with a letter" + "<br>");
// }
// if (pass.length < 6) {
//     document.write("Password length must be at least 6 characters long" + "<br>");
// }
// var j = 0;
// var k = 0;
// var l = 0;
// for (var i = 0; i < pass.length; i++) {
//     if (pass[i] >= 'A' && pass[i] <= 'Z') {
//         j = 1;
//     }
//     if (pass[i] >= 'a' && pass[i] <= 'z') {
//         k = 1;
//     }
//     if (pass[i] >= 1 && pass[i] <= 9) {
//         l = 1;
//     }
// }
// if (j != 1 && k != 1) {
//     document.write("Password must contain an alphabet" + "<br>");
// }
// if (l != 1) {
//     document.write("Password must contain a number" + "<br>");
// } else {
//     document.write("Correct Password");
// }


//Task 16:
// var university = "University of Karachi";
// var res = university.split(" ");
// var array1 = res[0];
// var array2 = res[1];
// var array3 = res[2];
// for (var i = 0; i < array1.length; i++) {
//     document.write(array1[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < array2.length; i++) {
//     document.write(array2[i] + "<br>");
// }
// document.write("<br>");
// for (var i = 0; i < array3.length; i++) {
//     document.write(array3[i] + "<br>");
// }

//Task 17:
// var inp = prompt("Enter something:");
// var ind;
// for (var i = 0; i < inp.length; i++) {
//     ind = inp[inp.length - 1];
// }
// document.write(ind);

//Task 18:
// var main_str = "The quick brown fox jumps over the lazy dog";
// sub_str = 'the';

// function count(main_str, sub_str) {
//     main_str += '';
//     sub_str += '';

//     if (sub_str.length <= 0) {
//         return main_str.length + 1;
//     }

//     subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//     return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
// }
// document.write("There are " + count("The quick brown fox jumps over the lazy dog", 'the') + " occurrences of word " + sub_str);



//Chap# 26-30

//Task 1:
// var num = prompt("Enter any positive integer:");
// document.write("Number: " + num + "<br>" + "Round off value: " + Math.round(num) + "<br>");
// document.write("Floor Value: " + Math.floor(num) + "<br>" + "Ceil Value: " + Math.ceil(num));

//Task 2:
// var num = prompt("Enter any negative floating point number:");
// if (num >= 0) {
//     document.write("Wrong entry");
// } else {
//     document.write("Number: " + num + "<br>" + "Round off value: " + Math.round(num) + "<br>");
//     document.write("Floor Value: " + Math.floor(num) + "<br>" + "Ceil Value: " + Math.ceil(num));
// }

//Task 3:
// var num = prompt("Enter any negative number:");
// if (num > 0) {
//     document.write("Wrong entry");
// } else {
//     document.write("Absolute value of " + num + " is " + Math.abs(num));
// }

//Task 4:
// document.write("Random dice value: " + (Math.floor(Math.random() * 6) + 1));

//Task 5:
// var rand = Math.floor(Math.random() * 3);
// if (rand == 2) {
//     document.write(rand + "<br>");
//     document.write("random coin value: " + " Heads");
// } else if (rand == 1) {
//     document.write(rand + "<br>");
//     document.write("random coin value: " + " Tails");
// }

//Task 6:
// document.write("random number between 1 and 100: " + (Math.floor(Math.random() * 100) + 1));

//Task 7:
// var weight = prompt("Enter your weight in kilograms: ");
// weight = weight.replace("kgs", " ");
// weight = weight.replace("kilograms", " ");
// var num = parseInt(weight);
// document.write("The weight of the user is: " + weight + " kilograms");

//Task 8:
// var secret = (Math.floor(Math.random() * 10) + 1);
// var inp = prompt("Enter any number between 1 and 10:");
// if (inp == secret) {
//     document.write("Congrats! you have found the secret number");
// } else {
//     document.write("Try again!");
// }

//Chap# 31-34
//Task 1:
// var d = new Date();
// document.write(d);

//Task 2:
// var d = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.write("Current month: " + months[d.getMonth() + 1]);

//Task 3:
// var d = new Date();
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// document.write("Today is " + days[d.getDay()]);

//Task 4:
// var d = new Date();
// var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// if (days[d.getDay()] == "Sat" || days[d.getDay()] == "Sun") {
//     document.write("It's Fun day");
// }

//Task 5:
// var d = new Date();
// var date = d.getDate();
// if (date <= 15) {
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last fifteen days of the month");

// }

//Task 6:
// var d = new Date();
// var n = d.getTime();
// document.write("Current date: " + d + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + n + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + n / 60000);

//Task 7:
// var d = new Date();
// var n = d.getHours();
// if (n <= 12) {
//     alert("It's AM");
// } else {
//     alert("It's PM");
// }

//Task 8:
// var d = new Date();
// d.setFullYear(2020, 12, 0);
// d.setHours(00, 00, 00);
// document.write("Later date: " + d);

//Task 9:
// var d = new Date();                                       //Incomplete
// var pastYear = d.getFullYear() - 5;
// d.setFullYear(pastYear);
// var pastDate = d.getDate() - 1;
// d.setDate(pastDate);
// document.write(d);
// var nd = new Date();
// document.write("<br>" + nd);
// d.getDate();
// document.write("<br>" + );

//Task 10:
// var d = new Date();
// var pastYear = d.getFullYear() - 5;
// d.setFullYear(pastYear);
// var pastDate = d.getDate() - 14;
// d.setDate(pastDate);
// var pastMonth = d.getMonth() + 6;
// d.setMonth(pastMonth);
// document.write("On Reference date " + d + ",");
// var nd = new Date();
// cd = nd - d;
// document.write("<br>" + cd / 1000 + " seconds had passed since beginning of 2015");

//Task 11:
// var d = new Date();
// document.write("current date: " + d);
// var h = d.getHours();
// h = h-1;
// d.setHours(h)
// document.write("<br>"+ "1 hour ago, it was " + d);

//Task 12:
// var d = new Date();
// alert("current date: " + d);
// var y = d.getFullYear();
// y = y - 100;
// d.setFullYear(y);
// alert("100 years ago, it was " + d);

//Task 13:
// var inp = prompt("Enter your age: ");
// document.write("Your age is " + inp);
// var d = new Date();
// nd =d.getFullYear();
// var myBirthYear = nd-inp;
// document.write("<br>" + "my Birth year is " + myBirthYear);

//Task 14:
// var inp1 = prompt("Enter your name: ");
// var inp2 = prompt("Enter month name: ");
// var inp3 = prompt("Enter number of units: ");
// inp3 = Math.round(inp3).toFixed(2);
// var inp4 = prompt("Enter charges per unit: ");
// inp4 = Math.round(inp4).toFixed(2);
// var inp5 = prompt("Enter Late Payment Surcharge: ");
// inp5 = Math.round(inp5).toFixed(2);
// document.write("<b>K-Electric Bill</b>" + "<br>");
// document.write("Customer Name: " + inp1 + "<br>");
// document.write("Month: " + inp2 + "<br>");
// document.write("Number of units: " + inp3 + "<br>");
// document.write("Charges per unit: " + inp4 + "<br>");
// document.write("<br>" + "<br>");
// var n = inp4*inp3;
// n = Math.round(n).toFixed(2);
// document.write("Net Payable Amount(within Due Date): " + n + "<br>");
// document.write("Late Payment Surcharge: " + inp5);




//Chap# 35-38
//Task 1:
// function setDate() {
//     var d = new Date();
//     document.write(d);

// }
// setDate();

//Task 2:
// function userInput() {
//     var inp1 = prompt("Enter your first name: ");
//     var inp2 = prompt("Enter your last name: ");
//     document.write("Assalam u alaikum, " + inp1 + " " + inp2);
// }
// userInput();

//Task 3:
// function userInput() {
//     var inp1 = prompt("Enter first num: ");
//     var inp2 = prompt("Enter second num: ");
//     inp1 = parseInt(inp1);
//     inp2 = parseInt(inp2);
//     document.write("Sum of two numbers is " + (inp1 + inp2));
// }
// userInput();

//Task 4:
// var num1 = prompt("Enter first number: ");
// var num2 = prompt("Enter second number: ");
// var opr = prompt("Enter the operator: ");
// num1 = parseInt(num1);
// num2 = parseInt(num2);
// function userInput(num1,num2,opr) {
//     var result;
//       if(opr == "+"){
//           result = num1 + num2;
//       }
//       if(opr == "-"){
//           result = num1 - num2; 
//       }
//       if(opr == "/"){
//           result = num1/num2;
//       }
//       if(opr == "x" || opr == "*"){
//           result = num1*num2;
//       }
//       return result;
// }
// document.write(userInput(num1,num2,opr));

//Task 5:
// var inp = prompt("Enter any number:");
// function square(inp) {
//     inp = inp*inp;
//     return inp;
// }
// document.write("Square of " + inp + " is " + square(inp));

//Task 6:
// var num = prompt("Enter any number:");
// function fact(num) {                                 
//     if(num == 0){
//         return 1
//     }
//     else{
//         return num*fact(num-1);
//     }                        
                                             
// }
// document.write(fact(num));

//Task 7:
// var inp = parseInt(prompt("Enter first number:"));
// var inp1 = parseInt(prompt("Enter second number:"));
// for(var i=inp;i<=inp1;i++){
//     document.write(i + "<br>");
// }

//Task 8:
// var base = parseInt(prompt("Enter base:"));
// var perpendicular = parseInt(prompt("Enter perpendicular:"));
// var hyp;
// function calculateHypotenuse(base,perpendicular) {
//     function calculateSquare() {
//         hyp = (base*base) + (perpendicular*perpendicular);
//         return hyp;
//     }
//     return calculateSquare();
// }
// document.write(Math.sqrt(calculateHypotenuse(base,perpendicular)));

//Task 9:
//i)
// var width = prompt("Enter the width of rectangle:");
// var height = prompt("Enter the height of rectangle:");
// function area(width,height) {
//     var A = width*height;
//     return A;
// }
// document.write("The area of rectangle is " + area(width,height));

//ii)
// var width;
// var height;
// function area(width,height) {
//     var A = width*height;
//     return A;
// }
// document.write("The area of rectangle is " + area(12,16));


//Task 10:
// var str = prompt("Enter any name:");
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//         return false;        }
//       }

//     return true;
// }

// if(palindrome(str)==true){
//     document.write("The passed string is palindrome");
// }
// else{
//     document.write("The passed string is not palindrome");

// }

//Task 11:
// var str = ("the quick brown fox");
// document.write("Example String: " + str + "<br>");
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newArray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newArray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newArray1.join(' ');
// }
// document.write("Expected Output: " + uppercase(str));

//Task 12:
// var str = "Web Development Tutorial";
// document.write("Example String: " + str + "<br>");
// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write("Expected Output: " + find_longest_word(str));

//Task 13:
// var str = prompt("Enter the string:");
// var letter = prompt("Enter any letter:");
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }
// document.write("The number of occurrences of " + letter + " within the string " + str + " is " + char_count(str,letter));


//Task 14:
// var r = prompt("Enter radius of circle:");
// function calcCircumference(r){
//     var c = 2*(3.142)*r;
//     return c;
// }

// function calcArea(r) {
//     var a = (3.142)*(r*r);
//     return a;
// }
// document.write("The circumference of circle is " + calcCircumference(r) + "<br>" + "The area of circle is " + calcArea(r));