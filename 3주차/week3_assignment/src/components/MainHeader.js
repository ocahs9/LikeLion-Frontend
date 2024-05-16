import styled from "styled-components";
function MainHeader() {
  return (
    <SHeader>
      <Sdiv>
        <h1>우리 동네에서 찾는 당근 알바</h1>
        <p>걸어서 10분 거리의 동네 알바들~</p>
        <Sbtn>공고 올리기</Sbtn>
      </Sdiv>
      <Headerimg src="./images/header-image.png"></Headerimg>
    </SHeader>
  );
}

const Sbtn = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 0.6rem;
  border: 1px solid orange;
  background-color: orange;
  color: white;

  @media screen and (max-width: 768px) {
    width: 60px;
    height: 20px;
    font-size: 10px;
  }
`;

const Sdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;

  gap: 1rem;
`;

const SHeader = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 40vh;
  background-color: #ffe2d2;

  @media screen and (max-width: 768px) {
    font-size: 15px;
    h1 {
      font-size: 30px;
      width: 30vw;
    }
  }
`;

const Headerimg = styled.img`
  height: 100%;
`;

export default MainHeader;
