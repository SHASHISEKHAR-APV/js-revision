let score="50abc"

console.log(typeof score); // string
console.log(typeof(score));//string

let valueInNumber = Number(score) //number
console.log(typeof valueInNumber); // it will show it as number but it will print NaN
console.log(valueInNumber); // NaN not a number will be printed 

//"33"=> 33
// "33abc"=> NaN
// true=> 1; false=>0

let isLoggedIn=1

let booleanIsLoggedIn= Boolean(isLoggedIn)
console.log(booleanIsLoggedIn); //true

// 1=> true 0=> false

//*********************another operations to be studied**************** */

let value=3
let negValue= -value
console.log(negValue) //-3


console.log(2+2) //4
console.log(2-2) //0
console.log(2*2)//4
console.log(2/3)//0.666666
console.log(2%5) //2
console.log(2**3) //8

let str1 ="hello"
let str2 = " shahsi shekhar"

let str3=str1+str2
console.log(str3) // hello shashi shekhar


console.log(1+"2") //12
console.log("1"+2) //12
console.log("1"+2+3)//123
console.log(1+2+"3") //33
//here it it follows the rule of ecca > if first string then all other string if first number then procced with number addition if second is number too 

// console.log(3+4*5/3)// this is not preferred as code readability is reduced 

console.log(true)//true
console.log(+true)//1

console.log(+"") //0

let num1,num2,num3

num1=num2=num3=2+2 // it make code messy and not readable

let gameCounter =100
++gameCounter
console.log(gameCounter) //101

// more topics 
console.log(2>1) // true
console.log(2<1) //false
console.log(3<2) // false
console.log(3>3) // false
console.log(2==1) // false
console.log(2!=1)// true

console.log("2"> 1) // true
console.log("02"<1) // false


console.log(null>0) //false
console.log(null==0) //false
console.log(null<=0) //true
console.log(null>=0)// true

console.log(undefined==0) //false
console.log(undefined>0) //false
console.log(undefined<0) //false

//====   represents strict check on data types whether datatyes are same or different or not 
console.log("2" ===2) //false


// ===== PRIMITIVE DATA TYPES =====
let num = 42,
    str = "Hello",
    bool = true,
    undef,
    nul = null,
    big = 12345678901234567890n,
    sym = Symbol("id");

// values
console.log(num, str, bool, undef, nul, big, sym);
// output → 42 "Hello" true undefined null 12345678901234567890n Symbol(id)

// types
console.log(
  typeof num,   // number
  typeof str,   // string
  typeof bool,  // boolean
  typeof undef, // undefined
  typeof nul,   // object (special case)
  typeof big,   // bigint
  typeof sym    // symbol
);



// ===== NON-PRIMITIVE DATA TYPES =====
let arr = [1, 2, 3],
    obj = { name: "John" },
    fn = function() {};

// values
console.log(arr, obj, fn);
// output → [1,2,3] {name:"John"} function(){}

// types
console.log(
  typeof arr, // object
  typeof obj, // object
  typeof fn   // function
);