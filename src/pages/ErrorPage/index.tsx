import { useLocation } from "react-router-dom";
import { Error } from "./styles";

const ErrorPage = () => {
  const location = useLocation();

  return (
    <Error>
      <h3>404 - {location.pathname} Page not found!</h3>
    </Error>
  );
};

export default ErrorPage;
