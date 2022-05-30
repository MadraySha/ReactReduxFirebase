
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/NavBar";
import {Mainpage} from "./pages/Mainpage";
import {Contacts} from "./pages/Contacts";
import {RegisterPg} from "./pages/RegisterPg";
import {LoginPage} from "./pages/LoginPage";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Mainpage/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/register" element={<RegisterPg/>}/>
          <Route path="/login" element={<LoginPage/>}/>
        </Route>
      </Routes>
  );
}

export default App;