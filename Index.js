import React from "react";
import ReactDOM from "react-dom/client"

//? React Element --- > is an object
// React.createElement => ReactElement- ( Js object ) => Html element (render)

// How Jsx works?
// Jsx code  ( Babel converts it into)=> react.createElement => react element(Js object) => Html Element (render)

//? Babel is a transpiler
const heading = React.createElement("h1",{id:"Heading"},"Namastey React")
// not a Html Element but an object
// when we render this to dom it converts to html
const root = ReactDOM.createRoot(document.getElementById("root"));


// TODO: Find out about different attributes in h1 tag

// React Element 
const jsxHeading = (
    <>
      <h1>Namaste react using Jsx</h1>
      <h2>Hey there I am using react.js</h2>
    </>
  );
  

//? React Component -  
//* Class Based Component  - OLD
//* Functional Component   - NEW

// React Functional Compenent
// ? -->   Js Function that return a react Element

//? Component Composition  ---> Component inside component

const Title = () =>(
    <h1 className="heading"> Namaste React Functional Component </h1>
);
function t(){
    console.log("HNi")
}
const HeadingComponent = () =>  (
    
    <div id = "container">
        {/* {"hi"} */}
       <Title></Title>
    </div>

)
const HeadingComponent2 = () => {
    return <h1>
         Namaste React Functional Component 
         </h1>}

const fn2 = () => true;
const fn1 = () =>{
       return true; 

}
root.render(<HeadingComponent/>)

// Use arrow function but this is also valid

const Title1 = function(){
    return (<h1 className="heading"> Namaste React Functional Component </h1>)
}


