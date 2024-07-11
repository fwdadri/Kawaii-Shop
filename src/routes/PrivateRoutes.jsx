import { Navigate } from "react-router";

const PrivateRoutes = ({ route }) => {
    
    const session = sessionStorage.getItem("session") || null; //si existe, guarda el objeto, si no será nulo 

  return session ? route : <Navigate to="/" />;
};

export default PrivateRoutes;
