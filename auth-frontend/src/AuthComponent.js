import React from "react";
import { Button } from "react-bootstrap";
import Cookies from "universal-cookie";
// import "./style.css";

export default function AuthComponent() {

    const cookies = new Cookies();

    const logout = () => {
        // destroy the cookie
        cookies.remove("TOKEN", { path: "/" });
        window.location.href = "/";
    }
    
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" 
      d="M0,224L60,208C120,192,240,160,360,149.3C480,139,600,149,720,170.7C840,192,960,224,1080,240C1200,256,1320,
      256,1380,256L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
        <Button type="submit" variant="danger" id="logoutBtn" onClick={() => logout()}>Logout</Button>
      <div className='centerDiv'>
        <h1 className="text-center">You have been authenticated</h1>
      </div>
      <svg className="bottomBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" 
      d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,
      1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,
      320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  );
}