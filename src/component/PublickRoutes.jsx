import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "../redux/auth";

export const PublickRoute = ({ children, redirectTo, restricted = false }) => {
  const isLogIn = useSelector(authSelectors.getIsLoggedIn);
  const shouldRedirect = isLogIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};
