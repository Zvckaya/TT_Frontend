import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const islogin = false;

  if (islogin) {
    return <Navigate to="/account/sign_in"></Navigate>;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
