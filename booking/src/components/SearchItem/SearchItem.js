import React from 'react'
import style from "./SearchItem.module.css"
import {BsCurrencyRupee} from "react-icons/bs"
import { useNavigate,Link } from 'react-router-dom'
function SearchItem({item}) {
    const toNav=useNavigate()
  return (
    <>
    <div className={style.searchItem}>
       <img src={!item.photos[0] &&"https://cf.bstatic.com/xdata/images/hotel/square600/239456066.webp?k=587601f8f818bcdf3f1be20bea509fa0e187a7bdfb7883b872cfc43a3d8083e2&o=&s=1"} alt="" className={style.siImg} />
    <div className={style.siDesc}>
      <h1 className={style.siTitle}>{item.name}</h1>
       <span className={style.siDistance}>{item.distance}m from center</span>
       <span className={style.siTaxiOp}>Free airport Taxi</span>
    <span className={style.siSubtitle}>
    Executive Double Room
    </span>
    <span className={style.siFeatures}>
        {item.description}
    </span>
    <span className={style.siCancelOp}>Free Cancellation</span>
    <span className={style.siCancelOpSubtitle}>You can cancel later,so lock in this great price today!</span>
    </div>
    <div className={style.siDetails}>
       {item.rating && <div className={style.siRating}>
            <span>Excellent</span>
            <button>{item.rating}</button>
        </div>}
        <div className={style.siDetailTexts}>
            <span className={style.siPrice}><BsCurrencyRupee/> {item.cheapestPrice}</span>
            <span className={style.siTaxOp}>Includes taxes and fees</span>
             <button className={style.siCheckButton} onClick={()=>toNav(`${item._id}`)} >Book Now</button>
        </div>
    </div>
 </div>
 </>
  )
}

export default SearchItem
