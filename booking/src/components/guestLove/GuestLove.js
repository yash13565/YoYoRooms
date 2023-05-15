import React from 'react'
import style from "./GuestLove.module.css"
import {BsCurrencyRupee} from "react-icons/bs"
import useFetch from '../../hooks/useFetch';
function GuestLove() {
    const { data, loading, error } = useFetch("/hotels?featured=true");
  return (
    <div className={style.fp}>
       {loading ?"Loading": <>
       {data.map(item=>(
       <div className={style.fpItem} key={item._id}>
        <img src={!item.photos[0] &&"https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" }alt="" className={style.fpImg} />
       <span className={style.fpname}>{item.name}</span>
       <span className={style.fpCity}>
        {item.city}</span>
       <span className={style.fpPrice}>Starting from <BsCurrencyRupee/> {item.cheapestPrice}</span> 
       {item.rating &&
        <div className={style.fpRating}>
            <button>{item.rating}</button>
            <span>Excellent</span>
        </div>}
        </div>)) }
        </>}
    </div>
  )
}

export default GuestLove
