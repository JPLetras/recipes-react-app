import styled from "styled-components";

export const Container = styled.div``;

export const PhotoContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Photo = styled.img`
  width: 70%;
  border: 5px solid ${(props) => props.theme.palette.secondary};
`;
