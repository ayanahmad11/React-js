// /**
//  * <div id = "parent">
//  *      <div id = "child1">
//  *          <h1> I am a h1 tag </h1>
//  *          <h2> I am h2 tag </h2>
//  *       </div>
//  *
//  * </div>       
//  *  
//  * 
//  */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div", { id: "parent" }, [
    React.createElement(
      "div",
      { id: "Child1", key: "child1" }, // ✅ key added
      [
        React.createElement("h1", { id: "h1", key: "h1" }, "I am a H1 Tag"),
        React.createElement("h4", { id: "h4", key: "h4" }, "I am a H4 Tag")
      ]
    ),
    React.createElement(
      "div",
      { id: "Child2", key: "child2" }, // ✅ key added
      [
        React.createElement("h2", { id: "h2", key: "h2" }, "I am a Ayna's Tag"),
        React.createElement("h3", { id: "h3", key: "h3" }, "I am a H3 Tag")
      ]
    )
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// complex code , it get messier when one parent have
//  children and these children have their children.
// //! JSX comes into picture.



// import React from "react";
// import ReactDOM from "react-dom/client"

// const parent = React.createElement(
//     "div",{id:"parent"},[  React.createElement(
//         "div",{id : "Child"},
//         [React.createElement("h1",{id : "h1",key:"h1"},"I am a H1 Tag"),React.createElement("h4",{id : "h4",key:"h4"},"I am a H4 Tag")]
//     ),  React.createElement(
//         "div",{id : "Child"},
//         [React.createElement("h2",{id : "h2",key:"h2"},"I am a H2 Tag"),React.createElement("h3",{id : "h3",key:"h3"},"I am a H3 Tag")]
//     )]
// )


// const heading = React.createElement("h1", {id:"heading"}, "Hello World From React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(heading);
// console.log(parent)
// root.render(parent)  
