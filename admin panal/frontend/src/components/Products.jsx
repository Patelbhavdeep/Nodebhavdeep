import Sidebar from "./Sidebar";
import api from "../api/axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <h2>Products</h2>
        {products.map((p) => (
          <p key={p._id}>
            {p.name} - ₹{p.price}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Products;
