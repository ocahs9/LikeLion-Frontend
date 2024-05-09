import styled from "styled-components";
import Card from "./Card";
import CARDLIST from "../constant/CARDLIST.js";
import Footer from "./Footer.js";



function Body()
{
  const cardList = JSON.parse(JSON.stringify(CARDLIST));

  return(

    <BodySection>
      <FullDiv>인기 당근알바</FullDiv>
      <CardSection>
        {cardList.map((obj)=>{
          return(
            <Card
              key = {obj.id}
              imgSrc={obj.imgSrc}
              title = {obj.title}
              subTitle={obj.subTitle}
              price={obj.price}
            />
          );
        })}
      </CardSection>
      <Footer/>
    </BodySection>

      

    
  );
}

const CardSection = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  justify-content: center;
`;

const FullDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
`;

const BodySection = styled.section`
  padding-top: 3rem;
  width: 80vw;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  
`;
export default Body;