import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function handleAddProduct() {
    if (productName === "" || productPrice === "") {
      alert("Please enter both product name and price");
      return;
    }

    const newProduct = {
      name: productName,
      price: productPrice,
    };

    const alreadyExists = products.some(
      (item) => item.name.toLowerCase() === newProduct.name.toLowerCase()
    );

    if (alreadyExists) {
      alert("Product already exists!");
      return;
    }

    setProducts([...products, newProduct]);
    setProductName("");
    setProductPrice("");
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white p-6 mt-10 rounded shadow">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-green-600">Product Manager</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="p-3 border rounded"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="p-3 border rounded"
          />
        </div>

        <button
          onClick={handleAddProduct}
          className="bg-green-600 text-white px-6 py-3 rounded w-full sm:w-auto"
        >
          Add Product
        </button>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="mt-6">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded shadow hover:shadow-lg"
                >
                  <h3 className="text-lg font-bold text-green-700">{product.name}</h3>
                  <p className="text-gray-700">${product.price}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
