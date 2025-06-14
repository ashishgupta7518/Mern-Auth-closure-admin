import { Navigate, Route, Routes } from "react-router-dom";

import AuthLayout from "./components/AuthLayout";

import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import DashboardPage from "./pages/DashboardPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";

import LoadingSpinner from "./components/LoadingSpinner";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import { useEffect } from "react";
import About from "./pages/About";

// Dashboard Components
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./Routes/Dashboard";

// Authenticated Routes

import Credential from "./Routes/Credential";
import EmailEditor from "./Routes/EmailEditor";
import Makerchaker from "./Routes/Makerchaker";
import LogoUpload from "./Routes/LogoUpload";
import ApiConsumer from "./Routes/ApiConsumer";
import SmsEditor from "./Routes/SmsEditor";
import NewPdfEditor from "./Routes/NewPdfEditor";
import CmrUpload from "./Routes/CmrUpload";
import AddDomain from "./Routes/AddDomain";
import ClientLogin from "./pages/ClientLogin";
import Consent from "./pages/Consent";
import Success from "./pages/Success";

// Auth guards
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  if (!user.isVerified) return <Navigate to="/verify-email" replace />;
  return children;
};

const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) return <Navigate to="/" replace />;
  return children;
};


const DashboardLayout = ({ children }) => (
  <div className="flex h-screen bg-gray-100">
  {/* Sidebar - 20% of screen */}
  <div className="w-[20%] fixed top-0 left-0 bottom-0 bg-white shadow-md z-50">
    <Sidebar />
  </div>

  {/* Main content area - 80% of screen, pushed right by sidebar */}
  <div className="w-[80%] ml-[20%] flex flex-col">
    {/* Navbar - fixed at top with 60px height */}
    <div className="h-[60px] fixed top-0 left-[20%] right-0 z-40 bg-white shadow flex items-center ">
      <Navbar />
    </div>

    {/* Content below navbar */}
    <div className="mt-[60px] p-6 flex-1 overflow-auto">
      {children}
    </div>
  </div>
</div>
);

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <>
      <Routes>
        {/* Dashboard Layout Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <About />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/credential"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Credential />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/emaileditor"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <EmailEditor />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/makerchecker"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <Makerchaker />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/logoupload"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <LogoUpload />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/apiconsumer"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <ApiConsumer />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/smseditor"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <SmsEditor />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/newpdfeditor"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <NewPdfEditor />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/cmrupload"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <CmrUpload />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/adddomain"
          element={
            <ProtectedRoute>
              <DashboardLayout>
                <AddDomain />
              </DashboardLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/login/client"
          element={
            <ProtectedRoute>
              <ClientLogin/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login/client/:clientcode"
          element={
            <ProtectedRoute>
              <Consent/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login/client/:clientcode/success"
          element={
            <ProtectedRoute>
              <Success/>
            </ProtectedRoute>
          }
        />

        {/* Auth Pages - Centered with gradient background */}
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <AuthLayout>
                <SignUpPage />
              </AuthLayout>
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <AuthLayout>
                <LoginPage />
              </AuthLayout>
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/forgot-password"
          element={
            <RedirectAuthenticatedUser>
              <AuthLayout>
                <ForgotPasswordPage />
              </AuthLayout>
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <RedirectAuthenticatedUser>
              <AuthLayout>
                <ResetPasswordPage />
              </AuthLayout>
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<AuthLayout><EmailVerificationPage /></AuthLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Toaster />
    </>
  );
}

export default App;
