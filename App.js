const heading1 = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!!!")

const root1 = ReactDOM.createRoot(document.getElementById("root1"))

console.log("heading1: ", heading1)
console.log("typeof heading1", typeof heading1)
console.log(typeof root1)

root1.render(heading1);

/*
Creating nested react element similar to this using React.createElement() method

    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    )
);

const nestedReactElement = ReactDOM.createRoot(document.getElementById("nestedReactElement"))

nestedReactElement.render(parent);