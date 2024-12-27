
import { Navigate } from "react-router-dom";



const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("access-token"); 

  return  isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
