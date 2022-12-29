import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import LogIn from "./Login";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";
import Cookies from "universal-cookie";
import Register from "./Register";

function App() {

const cookies = new Cookies();
const isAuth = cookies.get("TOKEN");
  
  return (
      <Routes>
          <Route path="/" element={isAuth ? <AuthComponent/> : <Register/>}/>
          <Route path="/login" element={isAuth ? <AuthComponent/> : <LogIn/>}/>
          <Route element={<ProtectedRoutes/>}>
              {/* Must be authenticated to access this page */}
              <Route path="/auth" element={<AuthComponent/>}/>
          </Route>
      </Routes>      

    
  );
}

export default App;
