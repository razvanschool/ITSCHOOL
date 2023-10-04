import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeAdmin from "./admin/HomeAdmin";
import HomeGuest from "./guest/HomeGuest";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/moto/:id" element={<HomeGuest />} />
      <Route path="/" element={<HomeGuest />} />
    </Routes>
  );
}

export default App;
