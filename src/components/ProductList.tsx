import React, { useEffect, useState } from "react";
import { fetchProducts } from "../data/api"; // 경로를 맞게 조정하세요

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts("스킨케어"); // 검색어를 "스킨케어"로 설정
        console.log("Products data:", data); // 데이터 로그 추가
        setProducts(data.items);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.link}>
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.price}원</p>
          <a href={product.link}>자세히 보기</a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
