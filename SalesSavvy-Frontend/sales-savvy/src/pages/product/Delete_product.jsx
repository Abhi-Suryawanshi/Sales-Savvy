import React, { useState } from 'react';

export default function Delete_Product() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:8080/deleteProduct?id=${id}`);
      const msg = await res.text();
      setMessage(msg);
    } catch (error) {
      console.error("Fetch error:", error);
      setMessage("Error deleting product");
    }
  };

  return (
    <div>
      <h2>Delete Product</h2>
      <input type="number" placeholder="Enter Product ID" onChange={(e) => setId(e.target.value)} />
      <button onClick={handleDelete}>Delete</button>
      {message && <p>{message}</p>}
    </div>
  );
}
