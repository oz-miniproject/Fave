import React, { useEffect, useState } from "react";
import { fetchProducts } from "../data/api"; // 경로를 맞게 조정하세요

interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  link: string;
}

interface ProductListProps {
  category: string; // 추가: 선택된 카테고리
}

const ProductList: React.FC<ProductListProps> = ({ category }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts(category); // 선택된 카테고리를 검색어로 사용
        console.log("Products data:", data); // 데이터 로그 추가

        // 데이터 매핑
        const productsData = data.items.map((item: any) => ({
          id: item.productId,
          title: item.title,
          image: item.image,
          price: item.lprice, // 가격을 lprice로 설정
          link: item.link,
        }));

        setProducts(productsData); // 매핑한 제품 데이터 설정
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [category]); // 카테고리가 변경될 때마다 호출

  if (loading) return <div>Loading...</div>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.title}</h3>
          <img src={product.image} alt={product.title} />
          <p>{product.price}원</p>
          <a href={product.link} target="_blank" rel="noopener noreferrer">자세히 보기</a>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
