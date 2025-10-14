

<h2>1. Difference between <code>var</code>, <code>let</code>, and <code>const</code></h2>

<ul>
  <li><b>var</b>: Function-scoped, can be redeclared and updated. Hoisted with <i>undefined</i> initialization.</li>
  <li><b>let</b>: Block-scoped, can be updated but not redeclared in the same scope. Hoisted but not initialized (Temporal Dead Zone).</li>
  <li><b>const</b>: Block-scoped, must be initialized at declaration, cannot be reassigned. </li>
</ul>

<br>

<h2>2. Difference between <code>map()</code>, <code>forEach()</code>, and <code>filter()</code></h2>

<ul>
  <li><b>map()</b>: Returns a <i>new array</i> with transformed values. Does not modify the original array.</li>
  <li><b>forEach()</b>: Executes a function for each element but <i>does not return</i> anything.
  <li><b>filter()</b>: Returns a <i>new array</i> containing elements that pass a given condition.</li>
</ul>

<pre><code>const arr = [1,2,3,4];
arr.map(x => x * 2);     // [2,4,6,8]
arr.forEach(x => console.log(x)); // logs 1,2,3,4
arr.filter(x => x % 2);  // [1,3]
</code></pre>

<br>

<h2>3. What are arrow functions in ES6?</h2>

<p>
Arrow functions are a shorter syntax for writing functions in ES6. They are <b>lexically scoped</b>
</p>

<pre><code>// Normal function
function add(a, b) { return a + b; }

// Arrow function
const add = (a, b) => a + b;
</code></pre>

<br>

<h2>4. How does destructuring assignment work in ES6?</h2>

<p>
Destructuring allows extracting values from arrays or objects into separate variables in a concise way.
</p>

<pre><code>// Array destructuring
const [a, b] = [10, 20]; // a=10, b=20

// Object destructuring
const {name, age} = {name: "Alice", age: 25};
</code></pre>

<br>

<h2>5. Explain template literals in ES6. How are they different from string concatenation?</h2>

<p>
Template literals use backticks (<code>`</code>) and allow embedding variables with <code>${expression}</code>. 

</p>

<pre><code>const name = "Alice";
const age = 25;

// String concatenation
console.log("My name is " + name + " and I am " + age + " years old.");

// Template literal
console.log(`My name is ${name} and I am ${age} years old.`);
</code></pre>
