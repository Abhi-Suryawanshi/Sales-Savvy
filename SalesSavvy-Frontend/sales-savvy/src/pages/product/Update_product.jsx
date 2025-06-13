import React, { useState } from 'react';
import '../../styles/update_product.css'; // Assuming you have a CSS file for styling

export default function Update_Product() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    photo: '',
    category: '',
    reviews: [],
    cart: null
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const res = await fetch('http://localhost:8080/updateProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      const msg = await res.text();
      alert(msg);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Error updating product");
    }
  };

  return (
    <div className="update-product-container">
      <h2>Update Product</h2>
      <label>Name: </label>
      <input type="text" name="name"  onChange={handleChange} />
      <label>Description: </label>
      <input type="text" name="description"  onChange={handleChange} />
      <label>Price: </label>
      <input type="number" name="price" onChange={handleChange} />
      <label>Photo URL: </label>
      <input type="text" name="photo"  onChange={handleChange} />
      <label>Category: </label>
      <input type="text" name="category"  onChange={handleChange} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
