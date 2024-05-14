import React from "react"
import ReactDOM from "react-dom/client"

// React.createElement => gives us ReactElement(JS Object) => rendered as HTMLElement on DOM
const heading1 = React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello World from React!!!");//React element using core React

const root1 = ReactDOM.createRoot(document.getElementById("root1"))

console.log("heading1: ", heading1)
console.log("typeof heading1", typeof heading1)
console.log(typeof root1)

root1.render(heading1);

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// JSX => Extension of JS language for writing HTML-like markup inside a JS file.
//JSX is not a part of React && JSX is not pure JS
// jsx is syntax and react element is object

// JSX (it is transpiled before it reaches JS engine and is done by Parcel with the help of Babel)

//JSX => transpiled into React.createElement => gives us ReactElement(JS Object) => rendered as HTMLElement on DOM
const jsxHeading = (<h1 id="heading" className="jsxRoot">Namaste React using JSX</h1>);//React element using JSX
console.log(jsxHeading)
console.log("typeof JSX tag: ", typeof jsxHeading);

const jsxRoot = ReactDOM.createRoot(document.getElementById("jsxRoot"))

jsxRoot.render(jsxHeading)

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------
// React Functional Component(NEW) is just a normal JS function that returns some piece of JSX or React Element

// const HeadingComponent = () => {
//     return <h1>Namaste React's First Functional Component</h1>;
// }

const Title = () => (
    <h1>Title Component</h1>
);

const num = 109283746;

const HeadingComponent = () => (
    <div id="container">
        <Title></Title>
        <Title />{/* Rendering React Component inside React Component */}
        {Title()}
        {/* Execute any JS Expression/Code inside JSX */}
        <h2>{num}</h2>
        {jsxHeading/*Rendering React Element inside React Component */}
        <h1 id="heading">Namaste React's First Functional Component</h1>
    </div>
);

const componentRoot = ReactDOM.createRoot(document.getElementById("functionalComponentRoot"))
componentRoot.render(<HeadingComponent />)

//Component Composition == Nesting of Component
//JSX takes care of Injection Attacks - Prevents cross site scripting 