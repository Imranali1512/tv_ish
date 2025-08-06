import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./pages/footer";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page"; // Ensure this component exists
import SignupPage2 from "./pages/signup_page2";
import ForgotPasswordPage from "./pages/forgetpassword_page";
import ForgotPasswordPage2 from "./pages/forgetpassword_page2";
import ForgotPasswordPage3 from "./pages/forgetpassword_page3"; //


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-black text-white">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup_page" element={<SignupPage />} />
          <Route path="/signup_page2" element={<SignupPage2 />} />
          <Route path="/forgetpassword_page" element={<ForgotPasswordPage />} />
          <Route path="/forgetpassword_page2" element={<ForgotPasswordPage2 />} />
          <Route path="/resetpassword_page" element={<ForgotPasswordPage3 />}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
