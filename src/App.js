import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ComingSoon } from "./components/Pages/ComingSoon/ComingSoon";
import ConfirmationPage from "./components/Pages/ComingSoon/ConfirmationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<ComingSoon />} />
        <Route path="*" element={<ConfirmationPage />} />
      </Routes>
    </div>
  );
}

export default App;
