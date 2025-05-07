import { useState } from "react";

const AddProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return alert("Enter valid details");
    if (products.find(p => p.name.toLowerCase() === name.toLowerCase())) return alert("Duplicate product");

    setProducts([...products, { name, price }]);
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input placeholder="Product name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddProductForm;
