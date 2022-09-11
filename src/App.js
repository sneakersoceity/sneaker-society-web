import "./App.css";
import { Route, Routes, Navigate, Outlet, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import LoginPage from "./components/Pages/Login/LoginPage";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import TestApi from "./components/TestApi/TestApi";
import MemberIntakeForm from "./components/Pages/Members/MemberIntakeForm";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MemberDashboard from "./components/Pages/Members/Dashboard/MemberDashboard";
import { useAuth } from "./auth/auth";
import ComingSoon from "./components/Pages/ComingSoon/ComingSoon";
import NotFound from "./components/Pages/NotFound/NotFound";

const ProtectedRoute = ({ user, children, redirectPath }) => {
  if (!user?.loggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/member">
            <Route
              element={<ProtectedRoute user={user} redirectPath="/login" />}
            >
              <Route path="" element={<MemberDashboard />} />
            </Route>
            <Route path="stats" element={<ComingSoon />} />
            <Route exact path="projects" element={<ComingSoon />} />
          </Route>
          <Route element={<ProtectedRoute user={user} redirectPath="/login" />}>
            <Route exact path="messages" element={<ComingSoon />} />
          </Route>
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="member/:memberId" element={<MemberIntakeForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
