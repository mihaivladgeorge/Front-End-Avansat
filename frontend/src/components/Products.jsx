import { useEffect, useState } from "react";
import styled from 'styled-components'
import Product from './Product';
import axios from "axios"

const Container = styled.div`
    padding: 25px;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const Products = ({ cat }) => {
  
  const [products,setProducts]=useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/cars?category=${cat}`
            : "http://localhost:5000/api/cars"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  return (
    <Container>
      {products
      .slice(0, 8)
      .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products