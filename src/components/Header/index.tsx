import { Link, useLocation } from "react-router-dom";
import ThemeButton from "../ThemeButton";
import { Container, Logo, Navigation, NavLabel, NavOption } from "./styles";

const Header = () => {
  const location = useLocation();

  const navList = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "Intro",
      path: "/intro",
    },
    {
      name: "Search",
      path: "/search",
    },
  ];

  return (
    <Container>
      <Navigation>
        <div>
          <Link to="/">
            <Logo src={require("../../assets/logo.png")} alt="Recipes Logo" />
          </Link>
        </div>
        <div>
          <h2>ReactCook</h2>
        </div>
        <div>
          {" "}
          {navList.map((item) => (
            <NavOption key={item.name} to={item.path}>
              <NavLabel active={location.pathname === item.path}>
                {item.name}
              </NavLabel>
            </NavOption>
          ))}
          <ThemeButton />
        </div>
      </Navigation>
    </Container>
  );
};

export default Header;
