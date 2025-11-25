import { CdnURL } from "../utils.js/constants"; // named import 
const RestaurantCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId} = resData.info //? destructuring
        return (
        <div className="res-card" >
            <img 
            className="res-logo" src = { CdnURL + cloudinaryImageId}>
            </img>
            <h3>{resData.info.name}</h3>
            <h3>
            {resData.info.cuisines.slice(0, 3).join(", ")}
            {resData.info.cuisines.length > 3 && " + more"}
            </h3>
            <h3>{resData.info.avgRating}</h3>
            <h3>{resData.info.costForTwo}</h3>
            {/* <h4>{time}</h4> */}
        </div>
        );
};
export default RestaurantCard



// hard - coded this card , it is not dynamic, data is not  entered dynmically.
// so we used 'props' properties
// passing props to the component

// const RestaurantCard = (props) => {
// console.log(props);//object
 // destructuring
 // const {resname,cuisine,ratings,time} = props;
// const RestaurantCard = ({resname,cuisine,ratings,time}) =>{
 
