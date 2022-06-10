import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/Pages/Login/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestApi from "./components/TestApi/TestApi";

const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
  let authToken = sessionStorage.getItem("token");

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("User Signed out");
    }
  });
  console.log(auth);

  if (!authToken) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute redirectPath="/login" />}>
          <Route path="/" element={<Layout />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestApi />} />
      </Routes>
    </div>
  );
}

export default App;
