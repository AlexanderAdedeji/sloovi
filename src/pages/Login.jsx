import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../utils/apis";
import { setAccessToken } from "../utils/services/apiAdapter";
import {toast} from "react-toastify"
const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigateHandler = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const onSubmit = async (arams) => {
    console.log(loginDetails);
    try {
      const { data } = await userLogin(loginDetails);
      console.log(data);
      setAccessToken(data.results.token);
      localStorage.setItem("loginData", JSON.stringify(data.results));
      localStorage.setItem("userId", data.results.user_id);
      navigateHandler();
    } catch (error) {
        toast.error(error?.response?.data?.error_description || "An error occured")
    }
  };
  return (
    <div>
      <input
        placeholder="email"
        name="email"
        onChange={(e) => onChangeHandler(e)}
      />
      <input
        placeholder="password"
        name="password"
        onChange={(e) => onChangeHandler(e)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};

export default Login;
