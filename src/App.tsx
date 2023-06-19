import axios from "axios";
import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
    <Container maxWidth="lg">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pagination
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <Pagination products={products} />
    </Container>
  );
};

export default App;
