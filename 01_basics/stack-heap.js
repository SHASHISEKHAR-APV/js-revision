// 🔹 STACK (Primitive → Copy by value)

let x = 10;           // x = 10
let y = x;            // y = 10 (copied)

y = 20;               // only y changes

console.log(x);       // 10
console.log(y);       // 20


// 🔹 HEAP (Reference types → Copy by reference)

let a = { val: 10 };   // a -> { val: 1 } (heap)
let b = a;            // b -> same object

b.val = 20;            // modifies shared object

console.log(a.val);   // 2
console.log(b.val);   // 2


// 🔹 FIX: Create new object (no shared reference)

let c = { val: 10 };       
let d = { ...c };     // new copy (shallow)

d.val = 5;

console.log(c.val);   // 1
console.log(d.val);   // 5


// 🔹 FUNCTION STACK FLOW

function add(n) {
  return n + 1;       // local variable lives in stack frame
}

let res = add(5);     

console.log(res);     // 6



/*
================= STACK vs HEAP (JavaScript Summary) =================

STACK:
- Stores primitive values (number, string, boolean, null, undefined, bigint, symbol)
- Copy by VALUE → independent copies
- Fast, fixed size

HEAP:
- Stores objects (object, array, function)
- Variables store REFERENCE (memory address)
- Copy by REFERENCE → shared data
- Dynamic size

KEY RULE:
- Primitive → copied
- Object → referenced

IMPORTANT CASES:

1. Assignment:
   let a = 10;
   let b = a;        // copy (independent)

   let obj1 = {};
   let obj2 = obj1;  // same reference

2. Mutation:
   obj2.name = "x";  // affects obj1 too (shared heap)

3. Reassignment:
   obj2 = {};        // new object (no effect on obj1)

4. Shallow Copy:
   let copy = { ...obj };  
   // only first level copied, nested still shared

5. Deep Copy:
   JSON.parse(JSON.stringify(obj));
   // fully independent object

6. Functions:
   - Primitives → passed by value
   - Objects → reference is copied (can mutate original)

7. const:
   - Cannot reassign reference
   - CAN modify object contents

8. Comparison:
   {} === {} → false (different references)
   obj1 === obj2 → true only if same reference

ONE-LINER:
"Primitives copy values, objects copy references."
*/