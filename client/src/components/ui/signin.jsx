import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  axios.defaults.withCredentials = true; //normally browsers dont send cookie in CORS request, with this
  //cookies will be included and as well as authorization headers such as JWT Tokens
  const URL_sign = "http://localhost:3000/auth/signin";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL_sign, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          console.log(response);
          setStatus(response.data.message);
          setError("");
          navigate("/");
        }
      })
      .catch((err) => {
        if (err.response?.data?.message) {
          setError(err.response.data.message);
          setStatus("");
        } else {
          setError("An error occurred. Please try again.");
          setStatus("");
        }
      });
  };

  return (
    <div className="container center">
      <div className="sign-container">
        <h1>Sign In</h1>

        <form className="sign-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          {status && (
            <p className="status">
              {status}. Procced to{" "}
              <span className="toggle">
                <Link to="/signup">
                  <button>Signup</button>
                </Link>
              </span>
            </p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            autoComplete="off"
            placeholder="random@gmail.com"
            onChange={handleEmail}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="*************"
            onChange={handlePassword}
            required
          />

          <button type="submit" className="sign-btn">
            Sign In
          </button>
        </form>
        <Link to="/forgotPassword">Forgot Password?</Link>

        <span className="toggle">
          Don't Have an account?{" "}
          <Link to="/signup">
            <button>Sign Up</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signin;
