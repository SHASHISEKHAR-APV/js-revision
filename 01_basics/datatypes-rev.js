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