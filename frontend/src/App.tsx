import LoginComponent from "./components/Login";
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
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
