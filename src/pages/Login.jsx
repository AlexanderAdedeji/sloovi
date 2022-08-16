import { useCallback } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../utils/apis";
import { setAccessToken } from "../utils/services/apiAdapter";
import { toast } from "react-toastify";
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(loginDetails);
    try {
      const { data } = await userLogin(loginDetails);
      console.log(data);
      setAccessToken(data.results.token);
      localStorage.setItem("loginData", JSON.stringify(data.results));
      localStorage.setItem("userId", data.results.user_id);
      navigateHandler();
    } catch (error) {
      toast.error(
        error?.response?.data?.error_description || "An error occured"
      );
    }
  };
  return (
    <div>
      <div class="parent clearfix">
        <div class="bg-illustration">
          <img src="https://i.ibb.co/Pcg0Pk1/logo.png" alt="logo" />

          <div class="burger-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="login">
          <div class="container">
            <h1>
              Login to access to
              <br />
              your account
            </h1>

            <div class="login-form">
              <form onSubmit={handleSubmit}>
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

                <button type="submit">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
