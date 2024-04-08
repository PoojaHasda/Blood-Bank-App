import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage.js";
import Login from "./Pages/auth/Login.js";
import Register from "./Pages/auth/Register.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/routes/protectedRoute.js";
import PublicRoute from "./Components/routes/publicRoute.js";
import Donar from "./Pages/Dashboard/donar.js";
import Hospitals from "./Pages/Dashboard/hospital.js";
import OrganisationPage from "./Pages/Dashboard/organisation.js";
import Consumer from "./Pages/Dashboard/consumer.js";
import Donation from "./Pages/Donation.js";
import Analytics from "./Pages/Dashboard/Analytics.js";
import HospitalList from "./Pages/Admin/HospitalList.js";
import DonarList from "./Pages/Admin/DonarList.js";
import OrgList from "./Pages/Admin/OrgList.js";
import AdminHome from "./Pages/Admin/AdminHome.js";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
      <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/donar"
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
         <Route
          path="/hospital"
          element={
            <ProtectedRoute>
              <Hospitals />
            </ProtectedRoute>
          }
        />
           <Route
          path="/hospital-list"
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />   
        <Route
        path="/donar-list"
        element={
          <ProtectedRoute>
            <DonarList/>
          </ProtectedRoute>
        }
      />
         <Route
          path="/org-list"
          element={
            <ProtectedRoute>
              <OrgList />
            </ProtectedRoute>
          }
        />
         <Route
          path="/donation"
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consumer"
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
           <Route
          path="/organisation"
          element={
            <ProtectedRoute>
              <OrganisationPage />
            </ProtectedRoute>
          }
        />
          <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
            <Route
          path="/analytics"
          element={
            <ProtectedRoute>
              <Analytics/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
