import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeAdmin from "./admin/HomeAdmin";
import AddMotos from "./common/AddMotos/AddMotos";
import Moto from "./common/Motos/Moto";
import EditMoto from "./common/EditMoto/EditMoto";
import Forum from "./admin/Forum/Forum";
import ForumPage from "./admin/Forum/ForumPage";
// Importam elementele necesare
import { useReducer } from "react";
import { initialState, motoReducer } from "./store/Motos/reducer";
import { MotoContext } from "./store/Motos/context";
import Test from "./common/test";
import {
  contorReducer,
  initialStateContor,
} from "./store/Motos/Contor/reducerContor";
import { ContorContext } from "./store/Motos/Contor/contextContor";

function App() {
  // Initializam reducerul
  const [stateGlobal, dispatch] = useReducer(motoReducer, initialState);

  const [stateGlobalContor, dispatchContor] = useReducer(
    contorReducer,
    initialStateContor
  );
  // Cream valoarea pe care o vom pasa lui MotoContext.Provider.
  const motoContextValue = {
    stateGlobal,
    dispatch,
  };

  const contorContextValue = {
    stateGlobalContor,
    dispatchContor,
  };

  return (
    // Facem dissponibile catre intreaga aplicatie state-urile globale, precum si functiile ce modifica state-urile globale.
    <MotoContext.Provider value={motoContextValue}>
      <ContorContext.Provider value={contorContextValue}>
        <Routes>
          <Route path="/admin" element={<HomeAdmin />} />
          <Route path="/home" element={<HomeAdmin />} />
          <Route path="/moto/:id" element={<Moto />} />
          <Route path="/moto/add" element={<AddMotos />} />
          <Route path="/moto/edit/:id" element={<EditMoto />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/forum/page" element={<ForumPage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<HomeAdmin />} />
        </Routes>
      </ContorContext.Provider>
    </MotoContext.Provider>
  );
}

export default App;
