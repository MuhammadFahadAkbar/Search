import { useState } from "react";
import { ProductType } from "../App";
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Pagination = ({ products }: { products: ProductType[] }) => {
  const productsPerPage = 8;

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
      <Grid container spacing={2}>
        {currentProducts.map((product) => (
          <Grid item xs={3}>
            <Card variant="outlined" sx={{ padding: "10px", height: "325px" }}>
              <Box
                sx={{
                  width: "100%",
                  height: "200px",
                  backgroundImage: `url(${product.node.images.edges[0].node.url})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></Box>
              <CardContent>
                <Typography
                  sx={{ fontSize: 13, color: "black", fontWeight: "500" }}
                >
                  {product.node.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="outlined" size="small" sx={{ width: "100%" }}>
                  ADD TO CART
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <br />
      <Grid container justifyContent="center" alignItems="center">
        {currentPage > 1 && (
          <Grid item>
            <NavigateBeforeIcon onClick={handlePreviousClick} />
          </Grid>
        )}
        <Grid item>
          <Typography sx={{ fontSize: 17, color: "black", fontWeight: "500" }}>
            {currentPage}
          </Typography>
        </Grid>
        {currentPage !== totalPages && (
          <Grid item>
            <NavigateNextIcon onClick={handleNextClick} />
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Pagination;
