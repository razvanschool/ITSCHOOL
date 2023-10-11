import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeAdmin from "./admin/HomeAdmin";
import AddMotos from "./common/AddMotos/AddMotos";
import Moto from "./common/Motos/Moto";
import EditMoto from "./common/EditMoto/EditMoto";
import Forum from "./admin/Forum/Forum";
import ForumPage from "./admin/Forum/ForumPage";

function App() {
  return (
    <Routes>
      <Route path="/admin" element={<HomeAdmin />} />
      <Route path="/home" element={<HomeAdmin />} />
      <Route path="/moto/:id" element={<Moto />} />
      <Route path="/moto/add" element={<AddMotos />} />
      <Route path="/moto/edit/:id" element={<EditMoto />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/forum/page" element={<ForumPage />} />
      <Route path="/" element={<HomeAdmin />} />
    </Routes>
  );
}

export default App;
