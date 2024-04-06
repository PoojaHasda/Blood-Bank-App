import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/homePage.js";
import Login from "./Pages/auth/Login.js";
import Register from "./Pages/auth/Register.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./Components/routes/protectedRoute.js";
import PublicRoute from "./Components/routes/publicRoute.js";
function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <HomePage />
            </PublicRoute>
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
