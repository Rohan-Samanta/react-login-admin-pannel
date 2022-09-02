import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./error/Error404";
import Error500 from "./error/Error500";
import Error401 from "./error/Error401";
import Maintenance from "./error/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/error500" element={<Error500 />} />
          <Route path="/error401" element={<Error401 />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
