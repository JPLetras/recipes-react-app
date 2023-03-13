import { Photo, PhotoContainer } from "./styles";

const Home = () => {
  return (
    <PhotoContainer>
      <Photo src={require("../../assets/intro.jpg")} />
    </PhotoContainer>
  );
};

export default Home;
