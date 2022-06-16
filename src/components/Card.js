import React from "react";
import styled from "@emotion/styled";

const Container = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "repeat(minmax(12rem, 16rem))",
  gridGap: "10px",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
}));

const StyledCard = styled.div(() => ({
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: "transform 200ms ease-in",
  width: "290px",
  height: "646px",
  backgroundColor: "white",
  ":hover": {
    transform: "scale(1.05)",
  },
}));

const ImageContainer = styled.div(() => ({
  width: "100%",
}));

const BackgroundImage = styled.img(() => ({
  width: "100%",
  height: "222px",
}));

const ProductImage = styled.img(() => ({
  width: "100%",
  marginTop: "-200px",
}));

const CardBody = styled.div(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const Title = styled.h2(() => ({
  marginLeft: "20px",
}));

const SubTitle = styled.p(() => ({
  marginLeft: "20px",
  marginTop: "10px",
}));

const Info = styled.p(() => ({
  marginLeft: "20px",
}));

const ButtonsContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const CartButton = styled.button(() => ({
  width: "250px",
  height: "60px",
  borderRadius: "30px",
  backgroundColor: "white",
  marginBottom: "10px",
  transition: "0.2s ease-in",
  cursor: "pointer",
  ":hover": {
    backgroundColor: "black",
    color: "white",
    border: "none",
  },
}));

const SubButton = styled.button(({ bgColor }) => ({
  width: "250px",
  height: "60px",
  borderRadius: "30px",
  backgroundColor: bgColor,
  marginBottom: "20px",
  border: "none",
  fontWeight: 600,
  // cursor: "pointer",
}));

function Card({
  title,
  subTitle,
  info,
  backgroundImage,
  productImage,
  buttonColor,
  regPrice,
  subPrice,
}) {
  return (
    <Container>
      <StyledCard>
        <ImageContainer>
          <BackgroundImage src={backgroundImage}></BackgroundImage>
          <ProductImage src={productImage}></ProductImage>
        </ImageContainer>
        <CardBody>
          <Title>{title}</Title>
          <SubTitle>{subTitle}</SubTitle>
        </CardBody>
        <Info>
          {" "}
          <b>Key ingredients: </b>
          {info}
        </Info>
        <ButtonsContainer>
          <CartButton>Add to Cart ━━━━ {regPrice}</CartButton>
          <SubButton bgColor={buttonColor}>
            ⓘ Subscribe ━━━━ {subPrice}
          </SubButton>
        </ButtonsContainer>
      </StyledCard>
    </Container>
  );
}

export default Card;
