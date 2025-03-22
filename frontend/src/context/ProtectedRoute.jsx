import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const storedUser = localStorage.getItem("user");

  if (loading) return <p>Loading...</p>;

  return user || storedUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
