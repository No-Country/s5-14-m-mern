import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const RequireAuth = ({ allowedRole }) => {
  const { userLogged } = useSelector(state => state.auth);
  const location = useLocation();
  if (!userLogged) {
  }

  if (userLogged) {
    if (userLogged.role === "admin" || (userLogged.role === "user" && allowedRole === "user")) {
      return <Outlet />;
    } else {
      console.log("logueado pero no autorizado");
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }
  } else {
    console.log("no esta logueado va al loguin");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
export default RequireAuth;

RequireAuth.propTypes = {
  allowedRole: PropTypes.string.isRequired
};
