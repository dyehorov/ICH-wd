/*

===========Form Events & Event Object============

`event` is the object the browser creates whenever a user triggers an action (click, input, submit). It is passed as the first argument to every listener and stores details such as event type and target element.

event methods:
- preventDefault() - cancels the default browser action (e.g., form submit + reload).
- stopPropagation() - stops bubbling to parent elements.
- stopImmediatePropagation() - stops bubbling and prevents the remaining handlers on the same element from firing.

Common form events:
- submit / reset - submitting or resetting a form.
- change - input value changed and focus moved away.
- input - fired on every keystroke inside text inputs (live feedback).
- focus / blur - element receives or loses focus.
- keydown / keyup - key pressed or released.

Email check example:
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = event.target.elements["email"].value;
  console.log(email.includes("@") ? "Form data has been sent" : "Invalid data");
});

Working with select:
- On submit read the select value (`event.target.elements["lang"]` or a saved reference).
- Display `Language selected: ${select.value}` inside a pre-created <p>.

Working with radios:
- On submit grab `event.target.elements["color"].value`.
- If a value exists, update `document.body.style.backgroundColor`.

===========push / forEach / map============

push()
- Adds items to the end of the array (mutates the original).
- Returns the new length (great for storing immediately).
- Example: `const len = numbers.push(4, 5); // len === numbers.length`.
- Rule of thumb: methods that add return length; methods that remove return the removed item.

Callback (a.k.a. callback function) - a function passed as an argument into another function. Critical for array methods.

Important: `break` and `continue` do not work inside array methods.

forEach()
- Signature: `array.forEach((element, index, array) => { ... })`.
- Executes the callback for every element and always returns undefined.
- Does not mutate the array unless you change elements manually.
- Great for side effects: logging even numbers, printing names, etc.

map()
- Iterates over the array and always returns a brand-new array.
- The callback must return something; otherwise you get an array of undefined.
- Example: `const doubled = numbers.map((n) => n * 2);`.
- Perfect for transforming data structures (keep only `name`, convert numbers to strings, etc.).

===========pop / filter / sort============

pop()
- Removes the last element.
- Mutates the original array and returns the removed value.
- Handy when you just need the tail of the list.

filter()
- Builds a new array from items that satisfy a predicate (function that returns true/false).
- Never mutates the original.
- Signature: `array.filter((element, index, array) => { ... })`.
- Examples: keep only positive numbers, keep only evens, keep numbers divisible by 3.

sort()
- Sorts the array in place and returns the same (now sorted) array.
- Default behavior compares strings by ASCII, so `[4, 11, 2]` becomes `[1, 11, 2, 3...]` without a comparator.
- Comparator must return a negative, zero, or positive number:
  ● < 0 - `a` comes first.
  ● 0  - order of `a` and `b` stays the same.
  ● > 0 - `b` comes first.
- Numbers ascending: `(a, b) => a - b`. Descending: `(a, b) => b - a`.
- Objects: compare by `age`, `name.length`, or even `name.charCodeAt(i)`.

Combo example:
const result = numbers
  .filter((number) => number > 0)
  .map((number) => number * 2);
// Filter first, then transform to avoid extra passes.

===========shift / unshift / reduce============

shift()
- Removes the first element and returns it.

unshift()
- Adds elements to the front and returns the new length.

reduce()
- Collapses an array into a single value (sum, object, array, etc.).
- Signature: `array.reduce((accumulator, element, index, array) => { ... }, initialValue)`.
- Without `initialValue`, the first element becomes the initial accumulator and iteration starts at index 1.
- Better to pass an initial value to avoid edge cases.
- The callback return becomes the accumulator for the next iteration; the final accumulator is the reduce result.

Examples:
const sum = numbers.reduce((acc, value) => acc + value, 0); // array sum

const doubledPositives = numbers.reduce((acc, value) => {
  if (value > 0) {
    acc.push(value * 2);
  }
  return acc;
}, []); // reduce can replace filter + map

function doubleEvenNumbers(array) {
  return array.reduce((acc, value) => {
    if (value % 2 === 0) {
      acc.push(value * 2);
    }
    return acc;
  }, []);
}

function calculateAverage(array) {
  const total = array.reduce((acc, value) => acc + value, 0);
  return total / array.length;
}

===========Scope Reminder============

Variables declared inside a function are scoped to that function. Trying to use them outside throws `ReferenceError`.

Example:
function func(x) {
  let num = x * 2;
}
func(5);
console.log(num); // ❌ num is not defined

===========Array Methods Quick Reference============

push()
- Mutates the array (adds to the end).
- Returns the new length.

pop()
- Mutates (removes from the end).
- Returns the removed element.

unshift()
- Mutates the original (adds elements to the front).
- Returns the new length.

shift()
- Mutates the original (removes the first element).
- Returns the removed element.

forEach()
- Does not mutate on its own.
- Always returns undefined (used for side effects).

map()
- Leaves the source untouched and creates a new array.
- Returns the new array filled with callback results.

filter()
- Leaves the source untouched and creates a new array.
- Returns the items whose callback returned true.

sort()
- Mutates the source array by sorting in place.
- Returns the same array reference (already sorted).

reduce()
- Does not mutate the source but can accumulate anything.
- Returns the final accumulated value.

===========Mutating vs Non-Mutating============

Mutate the original array (and what they return):
- push() -> new length.
- pop() -> removed element from the end.
- shift() -> removed element from the front.
- unshift() -> new length.
- sort() -> the same array instance, sorted.

Do not mutate the original (and what they return):
- forEach() -> always undefined.
- map() -> new array with callback results.
- filter() -> new array with elements that passed the check.
- reduce() -> single accumulated value (result of last iteration).
*/
