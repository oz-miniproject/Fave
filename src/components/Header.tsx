// src/components/Header.tsx
import React from "react";
import CategoryList from "./CategoryList";

interface HeaderProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  activeCategory: string | null;
}

const Header: React.FC<HeaderProps> = ({ categories, onSelectCategory, activeCategory }) => {
  return (
    <header>
      <div className="header-content">
        <h1 className="header-title">Shop</h1>
        <CategoryList
          categories={categories}
          onSelectCategory={onSelectCategory}
          activeCategory={activeCategory}
        />
      </div>
    </header>
  );
};

export default Header;
