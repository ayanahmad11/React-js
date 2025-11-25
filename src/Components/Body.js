import RestaurantCard from "./RestauranCard";
import { useEffect, useState } from "react";
import resList from "../utils.js/mockdata"

// What is a Hook?
// A normal js function which react gave to us which has its own 
// specific use case.

//* Whenever a state variable changes
//* react will re-render my component



const Body = () => {
    //* local State variable - Super powerful variable
    const [ObjList,setObjList] = useState(resList); //  destructuring 
    
    useEffect(()=>{
        console.log("useEffect Called")
        fetchData();
      },[]);
      const  fetchData = async () =>{
        const data  =  await fetch("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.49753543211703&lng=77.39223153375454&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        const info = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
        // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
        // 
        // setObjList(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      };
      
    

    console.log("Body rendered")

    return (
      <div className="Body">
      
        <div className="filter"> 
            <button
            className="filter-btn"
            onClick={()=>{
               let newObjList = ObjList.filter(
                    (res) =>res.info.avgRating>4)
                   setObjList(newObjList)
                }
            }>
            Top rated restaurants
            </button>
        </div>

        <div className="res-container" >
          {
              ObjList.map((restaurant)=>(
                  <RestaurantCard 
                  key = {restaurant.info.id}
                  resData = {restaurant}
                  />
              ))
          }
        </div>

      </div>
    );
  };
export default Body  

{/* <RestaurantCard
          resname  = "Meghana Food"
          cuisine = "Biryani , North Indian, Asian"/> */
}

/*
   internally usestate looks like this 
   usestatefunction useState(initialValue) {
  return [currentValue, setterFunction];
}

 ObjList → holds the actual state (initially equal to resList)

 setObjList → is just a function created by React to update the state
*/