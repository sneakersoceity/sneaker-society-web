import "./App.css";
import { Route, Routes, Navigate, Outlet, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/Pages/Login/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestApi from "./components/TestApi/TestApi";
import MemberIntakeForm from "./components/Pages/Members/MemberIntakeForm";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MemberDashboard from "./components/Pages/Members/Dashboard/MemberDashboard";

const testUser = {
  loggedIn: true,
};

const ProtectedRoute = ({ user, children, redirectPath }) => {


  if (!user?.loggedIn) {
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

        <Route path="/member">
          <Route
            element={<ProtectedRoute user={testUser} redirectPath="/login" />}
          >
            <Route path="" element={<MemberDashboard />} />
          </Route>
          <Route path=":memberId" element={<MemberIntakeForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
