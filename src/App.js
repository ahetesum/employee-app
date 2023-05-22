import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./menu/Footer";
import NavBar from "./menu/NavBar";
import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";

function App(){




  return (
    < >
    <BrowserRouter>
    <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/employee-list" element={<EmployeeList/>} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  
    </>
  );
}

export default App;
