import { Navigate, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user.loggedInUser);
  if (user === null) {
    return <Navigate to="/" />;
  }
  return <Routes>{children}</Routes>;
};
