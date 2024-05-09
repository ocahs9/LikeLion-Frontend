import Header from "./components/Header";
import MainHeader from "./components/MainHeader";
import Body from "./components/Body";
import styled from "styled-components";

function App() {
  return (
    <CarrotPage>
      <Header/>
      <MainHeader/>
      <Body/>

    </CarrotPage>
    
  );
}

const CarrotPage = styled.main`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export default App;
