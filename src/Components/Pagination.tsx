import { useState } from "react";
import { ProductType } from "../App";

const Pagination = ({ products }: { products: ProductType[] }) => {
  const productsPerPage = 10;

  const totalPages = products.length / productsPerPage;

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextClick = () => {
    setCurrentPage((prevPage) => {
      return prevPage < totalPages ? prevPage + 1 : prevPage;
    });
  };

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => {
      return prevPage > 1 ? prevPage - 1 : prevPage;
    });
  };

  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  return (
    <div>
      <ol>
        {currentProducts.map((product) => (
          <li>{product.node.title}</li>
        ))}
      </ol>
      <div>
        {currentPage > 1 && (
          <button onClick={handlePreviousClick}>Previous</button>
        )}
        <p>{currentPage}</p>
        {currentPage !== totalPages && (
          <button onClick={handleNextClick}>Next</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
