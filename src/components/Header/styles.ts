import { Link } from "react-router-dom";
import styled from "styled-components";

type NavLabelProps = {
  active: boolean;
};

export const Container = styled.header`
  padding: 5px;
`;

export const Logo = styled.img`
  width: 100px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const NavOption = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
`;

export const NavLabel = styled.span<NavLabelProps>`
  color: ${(props) =>
    props.active
      ? props.theme.palette.secondary
      : props.theme.palette.text.primary};
  &:hover,
  &:focus {
    color: ${(props) => props.theme.palette.secondary};
  }
`;
