import React from "react";
import style from "./mailList.module.css";
import fire from "../../Assets/fireLogo.png"
import TextField from '@mui/material/TextField';



function MailList() {
 
  return (
    <div className={style.mail}>
        <img src={fire} alt="" className={style.fire} />
        <div className={style.dealSpan}>
      <span className={style.exclusive}>Get access to exclusive deals</span>
      <span className={style.inboxdeals}>Only the best deals reach your inbox</span>
     </div>
     <div className={style.mailBox}>
       <TextField
          id="outlined-textarea"
          label="Your email"
          color="grey"
          placeholder="e.g.,john@mail.com"
          multiline
          InputProps={{
            className: `${style.mailInput}`
          }}
        />
      <button className={style.mailbtn} >Notify me</button>
      </div>
    </div>
  );
}

export default MailList;
