import styled from "styled-components";

export const Title = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    padding: 0;
  }
`;

export const Description = styled.div`
  text-align: justify;
  padding: 5px 215px;

  h3 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0 0 0 1;
  }
`;

export const PhotoContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const Photo = styled.img`
  width: 70%;
  border: 5px solid ${(props) => props.theme.palette.secondary};
`;
