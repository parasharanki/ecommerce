
import { useEffect, useState } from "react";
import instance from "../api/axios";

function Homepage() {

  const [product, setProduct] = useState([]);

  async function getProducts() {
    try {

      const response = await instance.get("/product/all");

      console.log("Complete response:", response);
console.log("Response data:", response.data);
console.log("Products:", response.data.products);

      setProduct(response.data.product

      );

    } catch (error) {
      console.log(error);    console.log("API Error:", error.response?.data || error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <h2>All Products</h2>

{/* 
   {product.map((item) => (

        <div key={item._id}>

          <h3>{item.name}</h3>

          <p>{item.category}</p>

          <p>Actual Price: {item.actualPrice}</p>

          <p>Discounted Price: {item.discountedPrice}</p>

          <p>{item.description}</p>

        </div>
      ))} */}

     

    </>
  );
}

export default Homepage;
