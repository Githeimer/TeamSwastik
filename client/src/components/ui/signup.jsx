import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("user");

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhonenumber = (e) => setPhonenumber(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const URL_sign = "http://localhost:3000/auth/signup";
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(URL_sign, {
        username,
        email,
        password,
        phonenumber,
        role,
      })
      .then((response) => {
        if (response.data.message) {
          setStatus(response.data.message);
          setError("");
          navigate("/signin");
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
        <h1>Sign up</h1>

        <form className="sign-form" onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          {status && (
            <p className="status">
              {status}. Proceed to{" "}
              <span className="toggle">
                <Link to="/signin">
                  <button>Sign In</button>
                </Link>
              </span>
            </p>
          )}
          <label htmlFor="username">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Himesh Dulal"
            onChange={handleUsername}
            required
          />

          <label htmlFor="phonenumber">Phone Number:</label>
          <input
            type="text"
            id="phonenumber"
            value={phonenumber}
            placeholder="+977 9813704229"
            onChange={handlePhonenumber}
            required
          />

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

          <label htmlFor="role">Role: </label>
          <select name="role" id="role" value={role} onChange={handleRole}>
            <option value="user">User</option>
            <option value="organization">Organization</option>
          </select>

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
            Sign Up
          </button>
        </form>
        <span className="toggle">
          Already Have an account?{" "}
          <Link to="/signin">
            <button>Sign In</button>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Signup;
