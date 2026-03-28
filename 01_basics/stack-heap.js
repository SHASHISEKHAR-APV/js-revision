// 🔹 STACK (Primitive → Copy by value)

let x = 10;           // x = 10
let y = x;            // y = 10 (copied)

y = 20;               // only y changes

console.log(x);       // 10
console.log(y);       // 20


// 🔹 HEAP (Reference types → Copy by reference)

let a = { val: 1 };   // a -> { val: 1 } (heap)
let b = a;            // b -> same object

b.val = 2;            // modifies shared object

console.log(a.val);   // 2
console.log(b.val);   // 2


// 🔹 FIX: Create new object (no shared reference)

let c = { val: 1 };       
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