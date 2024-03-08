import "./App.css";

import { Route, Routes } from "react-router-dom";
import Pageone from "./pages/page-one";
import Navbar from "./component/navbar";

function App() {
  return (
    <>

      <Routes>
      <Route path="/" element={<Navbar />} />
  
      </Routes>
    </>
  );
}

export default App;
