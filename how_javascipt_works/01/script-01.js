x = 30;
console. log(`Value of X1 is ${x}`);
var x = 10;
console.log(`Value of X2 is ${x}`);

/*
HOISTING EXPLANATION:

1. VAR HOISTING:
   - Variable declarations with 'var' are hoisted to the top of their scope
   - The declaration is moved up, but the assignment stays at the original line
   - Before assignment, the variable exists but has value 'undefined'
   - This is why x = 30 works before var x = 10 declaration

2. LET and CONST HOISTING:
   - let and const declarations are also hoisted to the top of their scope
   - However, they are placed in a "Temporal Dead Zone" (TDZ)
   - Variables in TDZ cannot be accessed before their declaration line
   - Accessing them before declaration throws a ReferenceError

3. WHAT HAPPENS IN THIS CODE:
   - var x declaration is hoisted to the top (but not the assignment)
   - x = 30 assigns value to the already declared (but undefined) variable
   - console.log shows x = 30
   - var x = 10 then reassigns x to 10
   - Second console.log shows x = 10
*/