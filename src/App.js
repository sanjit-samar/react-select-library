import "./styles.css";
import { useEffect, useState, useMemo } from "react";
import Select from "react-select";

export default function App() {
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    const data = await fetch("https://dummyjson.com/products?limit=5");
    const json = await data.json();
    setProduct(json.products);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const filterOption = useMemo(() => {
    return product.map((item) => ({
      label: item.title,
      value: item.id,
    }));
  }, [product]);

  return (
    <div className="App">
      <h1>Hello </h1>
      <Select name="color" options={filterOption} isMulti />
    </div>
  );
}
