import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination";
export interface ProductType {
  node: {
    id: string;
    title: string;
    variants: {
      edges: {
        node: {
          price: {
            amount: string;
          };
        };
      }[];
    };
    images: {
      edges: {
        node: {
          url: string;
        };
      }[];
    };
  };
}

const App = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    axios("http://localhost:4000/edges").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  return (
    <>
      <h1>Pagination</h1>
      <Pagination products={products} />
    </>
  );
};

export default App;
