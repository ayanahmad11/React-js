/**
 * <div id = "parent">
 *      <div id = "child1">
 *          <h1> I am a h1 tag </h1>
 *          <h2> I am h2 tag </h2>
 *       </div>
 *
 * </div>       
 *  
 * 
 */
const parent = React.createElement(
    "div",{id:"parent"},[  React.createElement(
        "div",{id : "Child"},
        [React.createElement("h1",{id : "h1"},"I am a H1 Tag"),React.createElement("h2",{id : "h2"},"I am a H2 Tag")]
    ),  React.createElement(
        "div",{id : "Child"},
        [React.createElement("h1",{id : "h1"},"I am a H1 Tag"),React.createElement("h2",{id : "h2"},"I am a H2 Tag")]
    )]
)
// complex code , it get messier when one parent have
//  children and these children have their children.
//! JSX comes into picture.

const heading = React.createElement("h1", {id:"heading"}, "Hello World From React");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
console.log(parent)
root.render(parent)  
