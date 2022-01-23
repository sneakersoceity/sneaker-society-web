import React, { useEffect, useState } from "react";
import {
  auth,
  logout,
  signIn,
  signInWithGoogle,
  whoIsIn,
} from "../../../auth/firebase";
import "./LoginPage.css";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <div className="login__container">
        <input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="login__btn" onClick={() => signIn(email, password)}>
          Login
        </button>
        <button className="login__btn" onClick={() => signInWithGoogle()}>
          Login Google
        </button>
        <button className="login__btn" onClick={() => whoIsIn()}>
          Curernt User
        </button>
        <button className="login__btn" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </div>
  );
}
