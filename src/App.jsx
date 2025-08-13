import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Page Components
import Footer from "./pages/footer";
import NavbarPage from "./pages/navbar_page";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";
import SignupPage2 from "./pages/signup_page2";
import ForgotPasswordPage from "./pages/forgetpassword_page";
import ForgotPasswordPage2 from "./pages/forgetpassword_page2";
import ForgotPasswordPage3 from "./pages/forgetpassword_page3";
import HomePage from "./pages/home_page";
import MoviesPage from "./pages/movies";
import TVSHOWSPAGE from "./pages/tvshows";
import PodcastPage from "./pages/podcast"; // ✅ NEW IMPORT
import Snip from "./pages/snips";

// Layout wrapper to conditionally show Navbar/Footer
const Layout = ({ children }) => {
  const location = useLocation();

  // Paths where Navbar and Footer should be hidden
  const hideLayoutPaths = [
    "/login",
    "/signup_page",
    "/signup_page2",
    "/forgetpassword_page",
    "/forgetpassword_page2",
    "/resetpassword_page"
  ];

  const shouldHideLayout = hideLayoutPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {!shouldHideLayout && <NavbarPage />}
      <main className="flex-grow">{children}</main>
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public/Main Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} /> 
          <Route path="/tvshows" element={<TVSHOWSPAGE />} /> 
          <Route path="/podcast" element={<PodcastPage />} /> 
          <Route path="/snips" element={<Snip/>} /> {/* ✅ NEW ROUTE */}

          {/* Auth Routes (without layout) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup_page" element={<SignupPage />} />
          <Route path="/signup_page2" element={<SignupPage2 />} />
          <Route path="/forgetpassword_page" element={<ForgotPasswordPage />} />
          <Route path="/forgetpassword_page2" element={<ForgotPasswordPage2 />} />
          <Route path="/resetpassword_page" element={<ForgotPasswordPage3 />} />

          {/* Navbar standalone (for testing or dev only) */}
          <Route path="/navbar" element={<NavbarPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
