//This is a one-line comment
//anything you write after // is inactive- just for the humans

/*

This is a block comment that can go multiple lines. This is also how you do comments in css.

*/

//Strings
//"Name" It's a word with quotations -those are two different strings

"Hello World"
"3"

'Hello\nWorld'
"!@#)$#"

    `   This is a template literal
It can go multiple lines` //this backtick is the one next to the tilde. It can cause text to go multiple lines.

//Numbers

//Numbers are different than Strings. They can be integers, negative or long. There is an upper limit to the size of numbers. Decimals.

0
    - 123
23.56
3

//Operations on Numbers
2 + 3
2 - 3
2 * 3
2 / 3
2 % 3 //remainder after division
Math.pow(2, 3); //2 to the power of 3

//StringOperations

//Concatenation:
"Hello" + "World" //Contatenation. There is no space in this. This just puts two things together.
"Hello " + "World" //add another space so that the two word are separate. Empty quotations doesn't do anything. You can concatenate tons of strings together.
"2" + "3" //"23"


//Booleans - the basis of being able to pick between two different options in your code. Two different options or ways to go. Can use "and" "or" and "not." They have  to be booleans- not numbrers to use the and/or/funcitons.
true
false

A && B // and
A || B// or
!A //not

!true // false
!false // true


    //Comparisons
    //https://dorey.github.io/JavaScript-Equality-Table/ - FOR MORE INFORMATION
    //You can compare any primitive to any primitive. Do parentheses

    ("Joe" === "joe") // They are not equal because they are case sensitive.They are false. If case sensitive, they would be true. 

    // === 3 equal signs are the comparison operator

    ("Joe" === "Joe")// they are case sensitive and this would be true. 

    // == is the "lazy comparison operator."

    (2 == 1 + 1) //true
    (4 === 2 + 2)//true
    (4 === "4")// false - must be the same TYPE.
    (4 == "4")//true -- this is becaue the lazy comparison operator will find them true even though they're not the same type. 
    //You can compare across types.
    (3 < 4) //true
    (3 > 4) // false
    (3 >= 4) // false
    (3 <= 4) //true

//They are defined so that a string and a number will valuate to the same thing. Comparison operator asks on top of it, 
//if they are the same type.
//Case sensitivity still matters with the lazy comparison operator. The lazy comparison operator is lazy because it doesn't 
//check type. - It actually does more work beause
//it converts the type to whatever might be similar to it. Case sensitivity will always matter in javascript. 
//Spacing does not matter outside of quotes, but does matter inside.
//Also doesn't matter if you have new lines in there. 


//Variables
// var... called the var keyword. Var is used to declare a variable. Here, we are declaring a variable x:
var x = 4;
//the single = is called the assignment operator

//here we are declaring a variable y. To compare, surround your "qquestion" parentheses. 
//And use a comparisoin operator. 
var y;

var myName = "Marissa";

(myName === "Marissa") //true

//Javascript goes through...you guys have question for me. I'm going to see where this variable was last set and I"m goign to replace it to what it was assinged to. 
//Now that there are no longer variables, I'll answer it for you. 


y = 7;

now...is(x == y) //false. Javascript says what was x...looks back.. it is 4. What is why...looks back...it's 7. So false.
    (y == x) //still false. Order doesnt' matter. If you redeclare...the order of which way the code runs does matter. 

//Special Assignments: 

y += 2 // y=y+2  //y = 7
y -= 2// y=y-2 // y = 5
y++ //y =y+1 //y = 6
y-- // y = y-1 // y=5

//This does work with strings. OR at least += works with strings. 
MyName += " Ellingson"; // myName = "Marissa Ellingson"

var height = (5 * 12) + 9;

var isTall = (height > 72);

//now there is a boolean isTall. 

//Practice: 

var name = "Marissa";
var height = 65;
var isTall = (height > 65);
var isGiant = (height > 65);
var rightName = (name === "Marissa");
var isTall && rightName;


//If Statements
//If these things are true, then it wil run that boolean. Can extend with true/false or else. 
if (bool) {
    //some code here.
}


else {
    //block of code here.
}
//if the first one ended up being false, then this block of code would run.You can think of this as "if not bool" There is also the "else if ()" with code block.
//The else statement does not need the parentheses. The else if statement is. Only one of the if/else if statements will run. You can have many, but only 1 will run.
//you will never have a standalone else or a standalone else if statement. Else only runs on any other case. 

if (myName === "Joe") {
    var x = 6;
}

//if the variable my name had the word joe, then x would be six. Otherwise x is equal to three. 

//Arrays

var empty = [] //empty array
var a = [0, 1, 2] //array with 3 integers. They are comma separated.
var team5 = ["Brian", "Neal", "Joe"];
var b = [45, "y", true];
var nested = [[1, 2], [1, 3], [3, 4]]; //can be useful to have an array with pointson a graph or something like that. There are 3 elements. 
//can also write the nested array vertically. 

var firstEl = b[0] //everything starts at 0. You do not start counting at 1. So the first element will be 0. This is the 45. 
var secondEl = b[1]// this is the y
var thridEl = b[2]// this is the true. 

var firstArray = nested[0] //first array in the group is 0
var justTheOne = firstArray[0];
var justTheOne = nested[0][0];//can go deep inside the array by going deeper and deeper by adding brackets.

var myTeam = ["Meng", "Dani", "Branden", "Marissa"];


//Loops

var array = [];
//to loop over a whole array, use the for ...in loop. 

var myTeam = ["Meng", "Dani", "Branden", "Marissa"];

//the code in this block will run once for every element in the array. 
//in list
//i will be set to every intext in the array.

for (var i in list) {
    var teammate = myTeam[i]
    console.log(list[i]);
]
    //So...
    var list = ["Zeroth", "oneth", 'twoth', 'threeth']
    console.log(list[i])

    //this will console log: 
    // "Zeroth"
    // "Oneth"
    // "Twoth"
    // "Threeth"



    //While Loop
    //Conditions look like if statements
    while (condition) {
        //some code to loop
    }
    var condition = true;
    var x = 0;
    while (true) {
        console.log("X is " + x);
        x++;
        if (x > 15) {
            condition = false;
        }
    }
}
//For loop. In almost every programming language. This allows you to loop from one value to another and all the values
//inbetween there. Every loop, run i++ which adds one to i. 
for (var i = 0; i <= 15; i++) {
    console.log("I is " + i);
}
//i++ happens at the end. Cuts off at i. 


var sum = 0;
for (var i = 1; x <= 50; x++) {
    console.log("X is " + sum);
    sum += x;
}
//this one ^ got messed up so don't reference it in your homework. 

var x = 0;
while (x <= 50) {
    sum += x;
    x++;

}

//functions
//This is a code that we want to come back and run at a later time. 
//TO DEFINE A FUNCTION IN JAVASCRIPT
function conjunctionJunction(argument1, argument2, argument3) {
    //this is where the code goes
    return something;
}
//to call this fuction use this syntax: 
functionName(1, 2, 3);
//Define x squared
function square(x) {
    return x * x;
}
var y = square(2); //y=4


function add(a, b, ) {
    return a + b;
}
var c = add(2, 4);

function sayHello(person) {
    console.log("Hello, " + person);
}
sayHello("Cary");

//Objects
//Objects go multiple lines becaue it makes more sense. Quotes on the property are technically optional. Your property could be an array with multiple values
//values can be functions, strings, arrays, true/false or another object.

var obj = {
    "property1" : "value1",
    "property2" : 2,
    "property3" : [0,1,2,3,4],
    "property4" : true,
    "property5" : function(arg) {return arg},
    "property6" : {}
}
obj["property1"] // "value1"
obj["property2"] //2
var x = obj[property2] //2
