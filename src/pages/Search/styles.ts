import styled from "styled-components";

export const Container = styled.div``;

export const Form = styled.div`
  display: flex;
  justify-content: center;

  h3 {
    font-size: 2.5rem;
    margin: 0;
    padding: 50px;
  }

  form {
    display: flex;
    justify-content: center;
  }

  button {
    background-color: #429ebd;
    color: #f7ad19;
    border-radius: 2px #f7ad19;
    cursor: pointer;
  }
`;
export const MealContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 50px;
`;

export const MealImage = styled.img`
  width: 50%;
`;

export const MealText = styled.div`
  width: 50%;
  padding-left: 1rem;
  font-size: 0.9rem;
`;

export const ZeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
