import "./App.css";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/Pages/Login/LoginPage";

const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
  let authToken = sessionStorage.getItem("Auth Token");

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
      </Routes>
    </div>
  );
}

export default App;
