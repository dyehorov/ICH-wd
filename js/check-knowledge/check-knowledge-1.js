/*

Check Knowledge #1 (based on glossary.js)

1. List every JavaScript primitive type mentioned in the glossary, give an example for each, and explain how reference (non-primitive) types differ in memory behavior.

primitive - number (5), string ("Hello"), boolean (true), undefined (undefined), null(null), BignInt (6n), Symbol ()
non-primitve - objects (objects, arrays )



2. Compare `var`, `let`, and `const` in terms of scope, redeclaration, reassignment, and hoisting. In which modern scenarios is `var` still acceptable, if any?

3. Explain why accessing a `let` or `const` declared inside an `if` block from outside that block throws a `ReferenceError`, but doing the same with `var` works inside the same function.

4. In loop contexts, when should you choose `let` over `const`, and why can `for...of` or `for...in` safely use `const` in some cases?

5. Predict the results of the following coercions and explain the rules: `String(123)`, `Number("45")`, `Boolean("")`, `"5" - 1`, `"5" + 1`.

6. Name all falsy values listed in the glossary and describe why `document.all` is a special case.

7. When would you use the nullish coalescing operator (`??`) instead of the logical OR operator (`||`)? Provide a short code snippet to illustrate the difference.

8. Describe the default behavior of a form submit event and show how `event.preventDefault()` changes the flow using the email validation example.

9. Contrast the `change` and `input` form events. Which form controls trigger each event according to the glossary and why?

10. Summarize what `push`, `pop`, `shift`, and `unshift` return and whether they mutate the array. Include a short example where their return values are used immediately.

11. Why do `break` and `continue` not work inside `forEach`, and what alternative pattern (method or loop) would you use when you need early exits?

12. Explain why providing an initial accumulator value to `reduce` is recommended. What happens when you omit it, and how can that lead to bugs with empty arrays?

13. The glossary warns that default `sort()` compares values as strings. Demonstrate with a code snippet why `[4, 11, 2]` sorts unexpectedly and how to fix it.

14. Describe a scenario where chaining `.filter().map()` is less efficient than combining the logic inside a single `.reduce()`. Provide pseudocode or actual code that uses `reduce` instead.

*/
