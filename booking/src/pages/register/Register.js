import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from "./Register.module.css";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    email:undefined,
    country:undefined,
    city:undefined,
    phone:undefined,
    password: undefined,

  });

  const {user, loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  console.log(credentials);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type:"LOGIN_START"});
    try {
      const res = await axios.post("/auth/register", credentials);
      dispatch({ type:"LOGIN_SUCCESS",payload: res.data.details });
      navigate("/login");
    } catch (err) {
      dispatch({ type:"LOGIN_FAILURE",payload: err.response.data });
    }
  };
  
  console.log(user)
  return (
    <div className={style.login}>
      <div>
    <img src="https://wallpaperaccess.com/full/5675697.png" width='85%' height='479.5rem'
     alt="myimg.jpeg"/>
      </div>
      <div className={style.lContainer}>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className={style.lInput}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className={style.lInput}
        />
        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className={style.lInput}
        />
        <input
          type="text"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className={style.lInput}
        />
        <input
          type="text"
          placeholder="phone"
          id="phone"
          onChange={handleChange}
          className={style.lInput}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className={style.lInput}
        />
        <button
          disabled={loading}
          onClick={handleClick}
          className={style.lButton}
        >
          Register
        </button>
        {error && <span>{error.message}</span>}
        Already have an account ? <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Register;
