import "./styles.css";
import { useEffect, useState, useMemo } from "react";
import Select from "react-select";

export default function App() {
  const [product, setProduct] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  async function fetchProduct() {
    const data = await fetch("https://dummyjson.com/products?limit=25");
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
      thumbnail: item.thumbnail
    }));
  }, [product]);


  return (
    <div className="App">
      <h1>Hello </h1>
      <Select
        value={selectedProducts}
        onChange={setSelectedProducts}
        name="color"
        options={filterOption}
        isMulti
      />
      <div className="Container">
      {selectedProducts.map((txt)=> (
        <div key={txt.id} className="Product"> 
            <img src={txt?.thumbnail} alt="No Images" />
            <p style={{textAlign: 'left'}}>{txt.label}</p>
           
        </div>
      ))}
      </div>
    </div>
  );
}
