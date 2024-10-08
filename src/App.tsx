import React, { useEffect, useState } from "react";
import { fetchProducts } from "./data/api";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

interface Product {
  id: number;
  title: string; // name -> title로 변경
  image: string;
  price: number;
  link: string;
}

const App: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchProducts("스킨케어"); // 초기 카테고리 데이터 로드
        const items = data?.items || []; // items가 없으면 빈 배열로 처리
        const categoryList = [...new Set(items.map((item: any) => item.category))]; // 카테고리 리스트 생성
        setCategories(categoryList);
      } catch (error) {
        console.error("Failed to load categories", error);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
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
          <ProductList category={selectedCategory} /> 
        ) : (
          <div>
            <h2>카테고리를 선택해주세요</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
