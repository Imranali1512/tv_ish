import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
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

// Dashboard Pages
import Dashboard from "./pages/dashboard";
import MyVideos from "./components/my-videos";
import Liked from "./pages/liked";  
import Playlist from "./pages/playlist";  
import WatchLater from "./pages/watch-later";
import History from "./pages/history";
import Settings from "./pages/settings";



// Layout Components
import DashboardSidebar from "./components/dashboard_sidebar";
import ProfileInfo from "./components/ProfileInfo";
import EmailAddress from "./components/EmailAddress";
import PhoneNumber from "./components/PhoneNumber";
import NotificationPreferences from "./components/NotificationPreferences";
import ChangePassword from "./components/ChangePassword";
import TwoFactorAuthentication from "./components/TwoFactorAuth";
import LanguagePreferences from "./components/LanguagePreferences";
import ThemePreferences from "./components/ThemePreferences";
import BlockedUsers from "./components/BlockedUsers";
import PrivacyControls from "./components/PrivacyControls";
import NameEdit from "./components/nameedit";
import AccountOwnership from "./components/accountownership";



// ✅ Layout Wrapper Component
const MainLayout = ({ children }) => {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideLayoutPaths = [
    "/login",
    "/signup_page",
    "/signup_page2",
    "/forgetpassword_page",
    "/forgetpassword_page2",
    "/resetpassword_page",
    "/my-videos",
    "/liked",
    "/playlist",
    "/watch-later",
    "/history",
    "/settings",
    "/dashboard",
    "/ProfileInfo",
    "/EmailAddress",
    "/PhoneNumber",
    "/NotificationPreferences",
    "/PrivacyControls",
    "/ChangePassword",
    "/TwoFactorAuth", 
    "/LanguagePreferences",
    "/ThemePreferences",
    "/BlockedUsers",
    "/nameedit",
    "/accountownership"
    
  ];

  // Hide Navbar/Footer if current path matches hide list
  const shouldHideLayout =
    hideLayoutPaths.includes(location.pathname) ||
    location.pathname.startsWith("/dashboard");

  // Show Sidebar on dashboard and dashboard-related pages
  const shouldShowSidebar =
    location.pathname.startsWith("/dashboard") ||
    location.pathname.startsWith("/my-videos") ||
    location.pathname.startsWith("/liked")||
    location.pathname.startsWith("/playlist")|| 
    location.pathname.startsWith("/watch-later")||
    location.pathname.startsWith("/history")||
    location.pathname.startsWith("/settings")||
    location.pathname.startsWith("/ProfileInfo")||
    location.pathname.startsWith("/EmailAddress")||
    location.pathname.startsWith("/PhoneNumber")||
    location.pathname.startsWith("/NotificationPreferences")||
    location.pathname.startsWith("/PrivacyControls")||
    location.pathname.startsWith("/ChangePassword")||
    location.pathname.startsWith("/TwoFactorAuth")||
    location.pathname.startsWith("/LanguagePreferences")||
    location.pathname.startsWith("/ThemePreferences")||
    location.pathname.startsWith("/BlockedUsers")||
    location.pathname.startsWith("/nameedit")||
    location.pathname.startsWith("/accountownership");

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      {/* Conditional Navbar */}
      {!shouldHideLayout && <NavbarPage />}

      {/* Main Content with Sidebar */}
      <div className="flex flex-1 flex-col lg:flex-row overflow-hidden">
        {/* Sidebar - Always visible on dashboard-related pages */}
        {shouldShowSidebar && (
          <div className="w-full lg:w-64 flex-shrink-0 bg-gray-900 border-r border-gray-700 overflow-y-auto">
            <DashboardSidebar />
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow w-full overflow-auto p-4 sm:p-6">{children}</main>
      </div>

      {/* Conditional Footer */}
      {!shouldHideLayout && <Footer />}
    </div>
  );
};

// ✅ App Component
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

          {/* Auth Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup_page" element={<SignupPage />} />
          <Route path="/signup_page2" element={<SignupPage2 />} />
          <Route path="/forgetpassword_page" element={<ForgotPasswordPage />} />
          <Route path="/forgetpassword_page2" element={<ForgotPasswordPage2 />} />
          <Route path="/resetpassword_page" element={<ForgotPasswordPage3 />} />

          {/* Navbar test route */}
          <Route path="/navbar" element={<NavbarPage />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/my-videos" element={<MyVideos />} />
          <Route path="/liked" element={<Liked/>} />
          <Route path="/playlist" element={<Playlist/>} />
          <Route path="/watch-later" element={<WatchLater/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/settings" element={<Settings/>} />
          <Route path="/ProfileInfo" element={<ProfileInfo/>} />
          <Route path="/EmailAddress" element={<EmailAddress/>} />
          <Route path="/PhoneNumber" element={<PhoneNumber/>} />
          <Route path="/NotificationPreferences" element={<NotificationPreferences/>} />
          <Route path="/PrivacyControls" element={<PrivacyControls/>} />
          <Route path="/ChangePassword" element={<ChangePassword/>} />
          <Route path="/TwoFactorAuth" element={<TwoFactorAuthentication/>} />
          <Route path="/LanguagePreferences" element={<LanguagePreferences/>} />
          <Route path="/ThemePreferences" element={<ThemePreferences/>} />
          <Route path="/BlockedUsers" element={<BlockedUsers/>} />
          <Route path="/nameedit" element={<NameEdit/>} />
          <Route path="/AccountOwnership" element={<AccountOwnership/>} />


        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
