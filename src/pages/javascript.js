import Head from "next/head";

// JavaScript is a programming language that allows you to create dynamic content on your website.
// It can be used to create animations, handle user inputs, and more.

// JavaScript can be added directly to an HTML file using the <script> tag, or it can be included in a separate .js file.

// Hold alt and click on the link below to see what this page looks like.
// http://localhost:3000/javascript

export default function JavaScript() {
  // This is a function. Functions are like recipes. They take some ingredients (called "arguments") and do something with them.
  // This function doesn't take any ingredients. It just returns a list of instructions to the computer.

  // This function changes the text inside the <p> element with the id "text".
  function changeText() {
    document.getElementById("text").innerText = "JavaScript is awesome!";
  }

  // This script is included in the HTML and runs automatically.
  // It logs a message to the console when the page loads.
  console.log("JavaScript is connected and running!");

  return (
    <>
      <Head>
        <title>JavaScript</title>
        <meta name="description" content="Learn JavaScript with examples" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>JavaScript</h1>
        <p id="text">Click the button to change this text using JavaScript.</p>
        <button onClick={changeText}>Change Text</button>
        <p>
          JavaScript can make your web pages interactive. Try clicking the
          button above to change the text.
        </p>
        <p>
          You can also use JavaScript to change styles, hide elements, and much
          more.
        </p>
        <h2>Try it out:</h2>
        <ul>
          <li>
            Try changing the text inside the <code>changeText</code> function.
          </li>
          <li>Try adding another button that changes the color of the text.</li>
          <li>
            Try creating a function that adds a new paragraph to the page.
          </li>
        </ul>
        <style jsx>{`
          p {
            padding-bottom: 1rem;
          }
          button {
            margin-top: 1rem;
            padding: 0.5rem 1rem;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: #005bb5;
          }
        `}</style>
      </main>
    </>
  );
}
