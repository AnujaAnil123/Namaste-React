import React, { useEffect, useState } from 'react'
import ResCard from './ResCard'
import resList from '../utils/mockData'
import Shimmer from './Shimmer';
const Body = ()=>{
    const [rest, setRest] = useState([]);
    const [searchText,setSearchText] = useState("")
    const [filteredRest,setFilteredRest] = useState([])

   useEffect(()=>{
    fetchData()

},[])
    const fetchData = async ()=>{
       const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9312328&lng=76.26730409999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
       const json = await data.json()
       
       console.log(json)
       setRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRest(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

  

   const filterHandler=()=>{
      setRest(rest?.filter(highratin=> highratin.info.avgRating > 4))
     
    }


    return (
      <>
    
        {rest?.length === 0 ? (
          <Shimmer />
        ) : (
        
          <div className="body">
            
            <div className="filter">
            <div className="search">
              <input type='text' value={searchText}  className='search-box' onChange={(e)=>{setSearchText(e.target.value)}}/>
              <button onClick={() => {
  const filteredRest = rest.filter((item) =>
    item.info.name.toLowerCase().includes(searchText.toLowerCase()) || 
    item.info.cuisines.some((cuisine) =>
      cuisine.toLowerCase().includes(searchText.toLowerCase())
    )
  );
  setFilteredRest(filteredRest);
}}
 className='filter-btn'>search</button>
            </div>
            
              <button className="filter-btn" onClick={filterHandler}>
                Top Rated Restaurant
              </button>
            </div>
            <div className="body-container">
              {filteredRest?.map((restaurant) => (
                <ResCard key={restaurant.info.id} resData={restaurant} />
              ))}
            </div>
          </div>
        )}
      </>
    );
   }

export default Body