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

export default App;
