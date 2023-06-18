import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
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
  const [products, setProducts] = useState<Product[]>([]);
  const totalpages = products.length / 5;

  const [pageNumber, setPageNumber] = useState(1);

  const handleNextClick = () => {
    setPageNumber((prevPage) => {
      return prevPage < totalpages ? prevPage + 1 : prevPage;
    });
  };

  const handlePreviousClick = () => {
    setPageNumber((prevPage) => {
      return prevPage > 1 ? prevPage - 1 : prevPage;
    });
  };

  useEffect(() => {
    axios("http://localhost:4000/edges").then(({ data }) => {
      setProducts(data);
    });
  }, []);

  const currentProducts = products.slice((pageNumber - 1) * 5, pageNumber * 5);

  return (
    <>
      <h1>Pagination</h1>
      <div>
        <ul>
          {currentProducts.map((product) => (
            <li>{product.node.title}</li>
          ))}
        </ul>
        <div>
          {pageNumber > 1 && (
            <button onClick={handlePreviousClick}>Previous</button>
          )}
          <p>{pageNumber}</p>
          {pageNumber !== totalpages && (
            <button onClick={handleNextClick}>Next</button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
