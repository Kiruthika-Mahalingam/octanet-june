/*
import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = () => {
    if (isSignUp) {
      // Handle sign up
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push({ email, password });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User signed up!");
    } else {
      // Handle login
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        onLogin(true);
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="login">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>{isSignUp ? "Sign Up" : "Login"}</button>
      <button onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Switch to Login" : "Switch to Sign Up"}
      </button>
    </div>
  );
};

export default Login;
*/
// src/components/Login.js

import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(true);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;


/*
// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin, onSwitchToSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onLogin(true);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <button onClick={onSwitchToSignup}>Sign Up</button>
      </p>
    </div>
  );
};

export default Login;
*/
