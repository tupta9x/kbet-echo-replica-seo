
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '@/data/mockData';
import { cn } from '@/lib/utils';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  // Display featured categories first, and limit to 5 if not showing all
  const displayCategories = showAllCategories 
    ? categories 
    : categories.filter(cat => cat.featured);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center mb-2">
        <button
          onClick={() => onCategoryChange('all')}
          className={cn(
            "px-4 py-2 rounded-full transition-all duration-200",
            activeCategory === 'all' 
              ? "bg-kbet-gold text-kbet-dark font-semibold" 
              : "bg-kbet-darker text-white hover:bg-kbet-secondary/30"
          )}
        >
          All Games
        </button>
        
        {displayCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={cn(
              "px-4 py-2 rounded-full transition-all duration-200",
              activeCategory === category.id 
                ? "bg-kbet-gold text-kbet-dark font-semibold" 
                : "bg-kbet-darker text-white hover:bg-kbet-secondary/30"
            )}
          >
            {category.name}
          </button>
        ))}
        
        {categories.length > displayCategories.length && (
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="px-4 py-2 rounded-full bg-kbet-darker text-white hover:bg-kbet-secondary/30 transition-all duration-200"
          >
            {showAllCategories ? 'Show Less' : 'More Categories'}
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryTabs;
