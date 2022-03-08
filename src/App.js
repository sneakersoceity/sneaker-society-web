import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Mysociety from "./components/Pages/Mysociety";
import Layout from "./components/Layout";
import Explore from "./components/Pages/Explore";
import Groups from "./components/Pages/Groups";
import Profile from "./components/Pages/Profile";
import LoginPage from "./components/Pages/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import { ComingSoon } from "./components/Pages/Coming Soon/ComingSoon";

function App() {
  // useEffect(() => {
  //   axios.get(process.env.REACT_APP_API_URL).then((response) => {
  //     setUserData(response.data);
  //   });
  // }, []);
  const [userData, setUserData] = useState([]);

  return (
    <div className="App">
      <Routes>
        {/* <Route path="*" element={<LoginPage />} /> */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
