/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
export default function PublicRoutes({ children }) {
  const { loading, isLoggedIn } = useAuth();
  if (loading) {
    return null;
  }

  // If loggedin and try to open login page
  if (!loading && isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return children;
}
