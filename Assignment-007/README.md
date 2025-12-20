
<section>
  <h2>React Basics </h2>

  <h3>Q1. What is JSX, and why is it used?</h3>
  <p>
    <strong>JSX (JavaScript XML)</strong> is a syntax extension for JavaScript that allows  to write HTML-like code inside JavaScript.
    It makes React code more readable and expressive.
  </p>

  <p><strong> Why it’s used:</strong></p>
  <ul>
    <li>Makes UI structure clear and declarative</li>
    <li>Allows embedding JavaScript expressions using <code>{}</code></li>
    <li>Improves developer experience and readability</li>
  </ul>

  <pre>
<code>
const element = &lt;h1&gt;Hello, World!&lt;/h1&gt;;
</code>
  </pre>

  <p>is equivalent to:</p>

  <pre>
<code>
const element = React.createElement("h1", null, "Hello, World!");
</code>
  </pre>

  <hr />

  <h3>Q2. What is the difference between State and Props?</h3>

  <table border="1" cellspacing="0" cellpadding="8">
    <tr>
      <th>Feature</th>
      <th>State</th>
      <th>Props</th>
    </tr>
    <tr>
      <td><strong>Definition</strong></td>
      <td>A component’s own data, managed internally</td>
      <td>Data passed from parent to child</td>
    </tr>
    <tr>
      <td><strong>Mutability</strong></td>
      <td>Mutable (can be updated with <code>setState</code> / <code>useState</code>)</td>
      <td>Immutable (read-only)</td>
    </tr>
    <tr>
      <td><strong>Ownership</strong></td>
      <td>Owned by the component itself</td>
      <td>Owned by the parent component</td>
    </tr>
    <tr>
      <td><strong>Usage</strong></td>
      <td>Used for dynamic data that changes over time</td>
      <td>Used for configuration and data passing</td>
    </tr>
  </table>

  <hr />

  <h3>Q3. What is the <code>useState</code> hook, and how does it work?</h3>
  <p>
    The <strong>useState</strong> hook is a built-in React hook that allows to manage state inside functional components.
    It returns an array with two elements:
  </p>
  <ol>
    <li>The current state value</li>
    <li>A function to update that value</li>
  </ol>

  <pre>
<code>
const [count, setCount] = useState(0);

// Update state
setCount(count + 1);
</code>
  </pre>

  <p>
    Every time i call the setter function (like <code>setCount</code>), React re-renders the component with the new state value.
  </p>

  <hr />

  <h3>Q4. How can you share state between components in React?</h3>
  <p>You can share state between components in several ways:</p>
  <ul>
    <li><strong>Lifting state up:</strong> Move the shared state to the nearest common parent and pass it down via props.</li>
    <li><strong>Context API:</strong> For deep component trees, use React Context to provide and consume shared state.</li>
    <li><strong>State management libraries:</strong> For larger apps, use tools like Redux.</li>
  </ul>

  <hr />

  <h3>Q5 How is event handling done in React?</h3>
  <p>
    In React, event handling is similar to handling events in the DOM, but with some key differences:
  </p>
  <ul>
    <li>Events are written in <strong>camelCase</strong> (e.g., <code>onClick</code> instead of <code>onclick</code>).</li>
    <li>I pass a <strong>function reference</strong>, not a string.</li>
    <li>React uses a <strong>synthetic event system</strong> for better cross-browser compatibility.</li>
  </ul>

  <pre>
<code>
function Button() {
  const handleClick = () =&gt; {
    alert("Button clicked!");
  };

  return &lt;button onClick={handleClick}&gt;Click Me&lt;/button&gt;;
}
</code>
  </pre>
</section>
