import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import style from "./Reserve.module.css";
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/searchContext";

const Reserve = ({ setOpen, hotelId }) => {
  const [selectedRooms, setSelectedRooms] = useState([]);
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);
  console.log(data)
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates?.some((date) =>
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {}
  };
  return (
    <div className={style.reserve}>
      <div className={style.rContainer}>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className={style.rClose}
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data?.map((item) => (
          <div className={style.rItem} key={item._id}>
            <div className={style.rItemInfo}>
              <div className={style.rTitle}>{item.title}</div>
              <div className={style.rDesc}>{item.description}</div>
              <div className={style.rMax}>
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className={style.rPrice}>{item.price}</div>
            </div>
            <div className={style.rSelectRooms}>
              {item.roomNumber?.map((roomNumber) => (
                <div className={style.room}>
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className={style.rButton}>
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default Reserve;