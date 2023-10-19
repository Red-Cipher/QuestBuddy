import LoginComponent from "./components/Login";
import Dashboard from "./Pages/Dashboard";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route element={<LoginComponent />} path="/login" />
          <Route element={<LoginComponent />} path="/" />
          <Route element={<Dashboard />} path="/dashboard" />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
