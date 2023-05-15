import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import style from "./list.module.css";
import { format } from "date-fns";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/SearchItem/SearchItem";
function List() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [dates, setDates] = useState(location.state.dates);
  const [min,setMin]=useState(null)
  const [max,setMax]=useState(null)
  const {data,loading,error,reFetch}=useFetch(`/hotels?city=${destination}&min=${min ||0}&max=${max || 999}`)
  console.log(location)
  console.log(data)
  function handleSearch(){
    reFetch()
  }
  return (
    <>
      <Navbar />
      <Header type="list" />
      <div className={style.listContainer}>
        <div className={style.listWrapper}>
          <div className={style.listSearch}>
            <h1 className={style.lsTitle}>Search</h1>
            <div className={style.lsItem}>
              <label>Destination</label>
              <input type="text" placeholder={destination} className={style.inputc} />
            </div>
            <div className={style.lsItem}>
              <label>Check-in date</label>
              <span className={style.inputc} onClick={() => setOpen(!open)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} - ${format(dates[0].endDate, "dd/MM/yyyy")} `}</span>
              {open && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className={style.lsItem}>
              <label>Options</label>
              <div className={style.lsOptions}> 
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Min price <small>per night</small></span>
             <input type="number" className={style.lsOptionInput} onChange={(e)=>setMin(e.target.value)}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Max price <small>per night</small></span>
             <input type="number" className={style.lsOptionInput} onChange={(e)=>setMax(e.target.value)}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Adult </span>
             <input type="number" min={1} placeholder={options.adult} className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Children </span>
             <input type="number" min={0} placeholder={options.children} className={style.lsOptionInput}/>
             </div>
             <div className={style.lsOptionItem}>
              <span className={style.lsOptionText}>Room </span>
             <input type="number" min={1} placeholder={options.room} className={style.lsOptionInput}/>
             </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className={style.listResult}>
           {loading ?"loading" :
           <>
           {data.map((item)=>
          <SearchItem item={item} key={item._id}/> )}
            </>}
          </div>
        </div>
      </div>
    </>
  );
}

export default List;
