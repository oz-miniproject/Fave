<<<<<<< HEAD
// src/App.tsx
import React, { useEffect, useState } from "react";
import { fetchProducts } from "./data/api";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductsData {
  [category: string]: Product[];
}

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [products, setProducts] = useState<ProductsData>({});
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setCategories(Object.keys(data));
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header
        categories={categories}
        onSelectCategory={handleSelectCategory}
        activeCategory={selectedCategory}
      />
      <div className="main-content">
        {selectedCategory ? (
          <ProductList products={products[selectedCategory]} />
        ) : (
          <div>
            <h2>Please select a category</h2>
          </div>
        )}
      </div>
    </div>
  );
};
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import List from "./pages/List";
import Layout from "./layouts/Layout";
import "../global.module.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />}></Route>
          <Route path="/list" element={<List />}></Route>
          {/* 초기 작업 확인용 */}
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
>>>>>>> 4b23ba82cd9729b08b4839911891f41efff753b7

export default App;
