import React from "react";
import style from "./Navbar.module.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"
function Navbar() {
  const { user, dispatch } = useContext(AuthContext);
  function handleLogout() {
    dispatch({ type: "LOGOUT" });
  }
  const toNav=useNavigate()
  return (
    <div className={style.navbar}>
      <div className={style.navContainer}>
        <span className={style.logo}>YoYo Rooms</span>
        {user ? (
          <div className={style.navItems}>
            <button onClick={handleLogout} className={style.navButton}>
              Log Out
            </button>{" "}
            <p> Welcome, {user.username}</p>
          </div>
        ) : (
          <div className={style.navItems}>
            <button onClick={()=>toNav("/register")} className={style.navButton}>Register</button>
            <button onClick={()=>toNav("/login")} className={style.navButton}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
