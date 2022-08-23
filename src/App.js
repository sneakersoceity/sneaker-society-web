import "./App.css";
import { Route, Routes, Navigate, Outlet, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/Pages/Login/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestApi from "./components/TestApi/TestApi";
import MemberIntakeForm from "./components/Pages/Members/MemberIntakeForm";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MemberDashboard from "./components/Pages/Members/Dashboard/MemberDashboard";

const ProtectedRoute = ({ user, redirectPath = "/login", children }) => {
  let authToken = sessionStorage.getItem("token");

  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("Nothign");
    }
  });

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/member">
          <Route path="" element={<MemberDashboard />} />
          <Route path=":memberId" element={<MemberIntakeForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
