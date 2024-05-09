import styled from "styled-components";

function Header()
{
  return(
    <SHeader>
      <SImg src="./images/logo.png"/>
      <List>
        <Span>중고거래</Span>
        <Span>동네업체</Span>
        <Span>알바</Span>
        <Span>부동산</Span>
        <Span>중고차 직거래</Span>
      </List>
      <span>
        <Sinput placeholder="멋사를 검색해보세요!"></Sinput>
        <Sbutton type="button">채팅하기</Sbutton>
      </span>
      
      
    </SHeader>
  );
}

const SHeader = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  height: 10vh;
  
`;

const SImg = styled.img`
  //정의 안할것
`;

const List = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

const Span= styled.span`
  display: inline-block;

  font-size: 1rem;
  color: gray;

  &:hover{
    color:orange;
  }
`;

const Sinput = styled.input`
  border-radius: 0.3rem;
  height: 2rem;
  width: 15rem;

  background-color: lightgray;
  border: solid lightgray 1px;
  
  margin-right: 1rem;
`;

const Sbutton = styled.button`
  border-radius: 0.3rem;
  height: 2rem;
  width: 4rem;
  background-color: white;
  border: solid lightgray 1px
`;

export default Header;