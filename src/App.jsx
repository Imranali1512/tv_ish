import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

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
import PodcastPage from "./pages/podcast";
import Snip from "./pages/snips";
import Music from "./pages/music";
import Education from "./pages/education";
import Sports from "./pages/sports";

// ✅ Dashboard Pages
import Dashboard from "./pages/dashboard";

// ✅ Layouts
import DashboardSidebar from "./components/dashboard_sidebar";

// ✅ General Layout Wrapper
const MainLayout = ({ children }) => {
  const location = useLocation();

  // Hide navbar/footer on auth-related routes + dashboard route
  const hideLayoutPaths = [
    "/login",
    "/signup_page",
    "/signup_page2",
    "/forgetpassword_page",
    "/forgetpassword_page2",
    "/resetpassword_page",
    "/dashboard"   // Dashboard route added here
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

// ✅ Dashboard Layout with Sidebar
const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-black">
      <DashboardSidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/tvshows" element={<TVSHOWSPAGE />} />
          <Route path="/podcast" element={<PodcastPage />} />
          <Route path="/snips" element={<Snip />} />
          <Route path="/music" element={<Music />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sports" element={<Sports />} />

          {/* Auth Routes (no navbar/footer) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup_page" element={<SignupPage />} />
          <Route path="/signup_page2" element={<SignupPage2 />} />
          <Route path="/forgetpassword_page" element={<ForgotPasswordPage />} />
          <Route path="/forgetpassword_page2" element={<ForgotPasswordPage2 />} />
          <Route path="/resetpassword_page" element={<ForgotPasswordPage3 />} />

          {/* Dashboard Routes (with sidebar) */}
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            }
          />

          {/* Standalone Navbar (optional) */}
          <Route path="/navbar" element={<NavbarPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
