import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import style from "./Login.module.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
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
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type:"LOGIN_SUCCESS",payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type:"LOGIN_FAILURE",payload: err.response.data });
    }
  };
  
  console.log(user)
  return (
    <div className={style.login}>
      <div>
        <img src="https://wallpapercave.com/wp/wp2234615.png" width='100%' height='479.5rem' alt="myimg.jpeg" />
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
          Login
        </button>
        {error && <span>{error.message}</span>}
        Don't have an account ?<Link to="/register">Register</Link> 
      </div>
    </div>
  );
};

export default Login;
