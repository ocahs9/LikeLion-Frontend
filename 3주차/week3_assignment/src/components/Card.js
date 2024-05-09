import styled from "styled-components";

function Card({imgSrc, title, subTitle, price})
{
  return(
    <SCard>
      <Simg src={imgSrc}/>
      <div>
        <h3>{title}</h3>
        <p style={{color : 'gray'}}>{subTitle}</p>
        <p>{`${price}원`}</p>
      </div>
    </SCard>
  );
}

const SCard = styled.div`
  width:40%;
  display: flex;
  flex-direction: row;

  margin: 10px;
`;

const Simg = styled.img`
  width:100px;
  height: 100px;
  border-radius: 0.6rem;
`;

export default Card;