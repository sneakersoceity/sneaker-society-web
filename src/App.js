import "./App.css";
import { Route, Link, Routes } from "react-router-dom";
import Mysociety from "./components/Pages/Mysociety";
import Layout from "./components/Layout";
import Explore from "./components/Pages/Explore";
import Groups from "./components/Pages/Groups";
import Profile from "./components/Pages/Profile";
import LoginPage from "./components/Pages/Login";

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/mysociety">My Society</Link>
        </li>
        <li>
          <Link to="/explore">Explore</Link>
        </li>
        <li>
          <Link to="/groups">Groups</Link>
        </li>
        <li>
          <Link to="/profile">Proifle</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/mysociety" element={<Mysociety />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
