import axios from "axios";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // fetch("http://localhost:4000/edges")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    axios("http://localhost:4000/edges").then(({ data }) => {
      console.log("Products:", data);
    });
  }, []);
  return <h1>Pagination</h1>;
};

export default App;
