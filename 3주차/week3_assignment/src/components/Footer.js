import styled from "styled-components";
function Footer()
{


  return(
    <Sdiv>
      <Simg src="./images/banner-icon.png"></Simg>
      <Sh2>대규모 채용이 필요하다면 당근알바 기업용 서비스에 대해 알아보세요!</Sh2>
      <Sbutton>7일 무료 체험</Sbutton>
      <Sbutton>1:1 문의</Sbutton>
    </Sdiv>
  );
}

const Simg = styled.img`
  height: 100%;
`;

const Sh2 = styled.h2`
  width: 60%;
`;

const Sbutton = styled.button`
  color: white;
  background-color: orange;
  border-radius: 0.3rem;
  margin: 5px;
  
  height: 30px;
  
  border: 1px solid orange;
`;

const Sdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 20vh;
  background-color: rgb(247, 241, 235);
  
`;

export default Footer;