import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../components/Layout/Loader";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);

  if (isLoading === true) {
    return (
      <Loader />
    )
  } else {
    if (isLoading === false) {
      if (!isSeller) {
        return <Navigate to={`/shop-login`} replace />;
      }
    }
  }

  return children;
};

export default ProtectedRoute;
