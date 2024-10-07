// src/components/CategoryList.tsx
import React from "react";
import { FaSpa } from "react-icons/fa"; // 스킨케어 아이콘만 임포트

interface CategoryListProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  activeCategory: string | null;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  onSelectCategory,
  activeCategory,
}) => {
  return (
    <div className="category-list">
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onSelectCategory(category)}
            className={activeCategory === category ? "active" : ""}
          >
            <FaSpa className="category-icon" /> {/* 스킨케어 아이콘만 사용 */}
            <span className="category-name">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
