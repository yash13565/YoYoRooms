import React from "react";
import style from "./Featured.module.css";
import useFetch from "../../hooks/useFetch";
function Featured() {
  const {data,loading,error}=useFetch("/hotels/countByCity?cities=agra,lucknow,kanpur")
  // console.log(data)
  return (
    <div className={style.featured}>
      {loading ?"Laoding Please Wait": <><div className={style.featuredItem}>
        <img
          alt=""
          className={style.featuredImg}
          src="https://q-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o="
        />
        <div className={style.featuredTitles}>
          <h1>Goa</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className={style.featuredItem}>
        <img
          alt=""
          className={style.featuredImg}
          src="https://r-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="
        />
        <div className={style.featuredTitles}>
          <h1>Ooty</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className={style.featuredItem}>
        <img
          alt=""
          className={style.featuredImg}
          src="https://r-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
        />
        <div className={style.featuredTitles}>
          <h1>Mumbai</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      <div className={style.featuredItem}>
        <img
          alt=""
          className={style.featuredImg}
          src="https://q-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
        />
        <div className={style.featuredTitles}>
          <h1>New Delhi</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className={style.featuredItem}>
        <img
          alt=""
          className={style.featuredImg}
          src="https://r-xx.bstatic.com/xdata/images/city/170x136/684534.jpg?k=d1fe86c22f2433f4e2dda14ddcbe80feb024b0fb30305e5684a1241fba5d4cff&o="
        />
        <div className={style.featuredTitles}>
          <h1>Banglore</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      </>}
    </div>
  );
}

export default Featured;
