const ProductList = ({ products, query }) => {
    const filtered = products.filter(p => p.name.toLowerCase().includes(query.toLowerCase()));
  
    if (filtered.length === 0) return <p>No Product Found</p>;
  
    return (
      <ul>
        {filtered.map((p, idx) => (
          <li key={idx}>{p.name} - ₹{p.price}</li>
        ))}
      </ul>
    );
  };
  
  export default ProductList;
  