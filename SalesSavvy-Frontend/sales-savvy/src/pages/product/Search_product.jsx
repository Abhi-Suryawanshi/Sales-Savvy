import React, { useState } from 'react';

export default function SearchProduct() {
  const [id, setId] = useState('');
  const [product, setProduct] = useState(null);

  const handleSearch = async () => {
    try {
      const res = await fetch(`http://localhost:8080/searchProduct?id=${id}`);
      if (res.ok) {
        const data = await res.json();
        setProduct(data);
      } else {
        setProduct(null);
        alert("Product not found");
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  return (
    <div>
      <h2>Search Product</h2>
      <input type="number" placeholder="Enter Product ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {product && (
        <div>
          <p><b>Name:</b> {product.name}</p>
          <p><b>Description:</b> {product.description}</p>
          <p><b>Price:</b> ₹{product.price}</p>
        </div>
      )}
    </div>
  );
}
