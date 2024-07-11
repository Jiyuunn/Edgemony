//import styles from "./App.module.css";
import Button from "./components/button/Button";
import Counter from "./components/counter/Counter";
import IconCart from "./components/icons/IconCart";
import ProductLightBox from "./components/product-lightbox/ProductLightBox";

function App() {
  return (
    <>
      <h1>hello, world</h1>
      <Button>
        <IconCart fill="#000" />
      </Button>
      <Counter />

      <ProductLightBox />
    </>
  );
}

export default App;