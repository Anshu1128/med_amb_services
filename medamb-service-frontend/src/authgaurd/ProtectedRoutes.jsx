/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = ({ children }) => {
  const { loading, isLoggedIn } = useAuth();
  if (loading) {
    return null;
  }

  // If not loggedin and try to open other routes
  if (!loading && !isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
