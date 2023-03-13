import { Container } from "../../styles";
import { Title, Description, PhotoContainer, Photo } from "./styles";

const Intro = () => {
  return (
    <Container>
      <Title>
        <h1>ReactCook</h1>
      </Title>
      <Description>
        <h3>
          ReactCook é uma aplicação de receitas moderna e fácil de usar que
          ajuda os usuários a descobrir suas receitas favoritas. Com uma
          interface de usuário intuitiva e elegante, ReactCook é a solução
          perfeita para quem quer criar refeições deliciosas e saudáveis em
          casa.
        </h3>
      </Description>
      <PhotoContainer>
        <Photo src={require("../../assets/Cook.jpg")} />
      </PhotoContainer>
    </Container>
  );
};

export default Intro;
