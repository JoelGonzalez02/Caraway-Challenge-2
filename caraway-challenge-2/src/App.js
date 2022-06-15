import "./App.css";
import Card from "./components/Card";
import styled from "@emotion/styled";
import ShowerBG from "./assets/shower-bg.jpg";
import Shower from "./assets/shower-product.png";
import FoamBG from "./assets/foam-bg.jpg";
import Foam from "./assets/foam-product.png";
import FluffyBG from "./assets/fluffy-bg.jpg";
import Fluffy from "./assets/fluffy-product.png";

const Container = styled.div(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#f1f0ef",
}));

const products = [
  {
    id: "1",
    title: "Shower Foam",
    subTitle: "Motivation and focus*",
    info: "Warm Sugar, Vanilla, Fresh Pancakes",
    backgroundImage: ShowerBG,
    productImage: Shower,
    regPrice: "$50.00",
    subPrice: "42.50",
    bgColor: "#eeea8f",
  },
  {
    id: "2",
    title: "Sea Foam",
    subTitle: "Connection and joy*",
    info: "Sea Salt, Beach Water, Fresh Coconut, Sprinkles",
    backgroundImage: FoamBG,
    productImage: Foam,
    regPrice: "$50.00",
    subPrice: "42.50",
    bgColor: "#b0eaeb",
  },
  {
    id: "3",
    title: "Fluffy Foam",
    subTitle: "Deep, restorative sleep*",
    info: "Fresh Berries, Rainbow Sprinkles, Fairy Floss",
    backgroundImage: FluffyBG,
    productImage: Fluffy,
    regPrice: "$50.00",
    subPrice: "42.50",
    bgColor: "#ffc0b2",
  },
];

function App() {
  return (
    <Container>
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.title}
          subTitle={product.subTitle}
          info={product.info}
          backgroundImage={product.backgroundImage}
          productImage={product.productImage}
          buttonColor={product.bgColor}
          regPrice={product.regPrice}
          subPrice={product.subPrice}
        />
      ))}
    </Container>
  );
}

export default App;
