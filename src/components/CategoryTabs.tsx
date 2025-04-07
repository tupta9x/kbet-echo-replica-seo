
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Category } from '@/types/types';

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories');
        
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.categories) {
          setCategories(data.categories);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Fallback to empty array or mock data if needed
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  
  // Display featured categories first, and limit to 5 if not showing all
  const displayCategories = showAllCategories 
    ? categories 
    : categories.filter(cat => cat.featured).slice(0, 5);

  if (loading) {
    return (
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="w-28 h-10 rounded-full bg-kbet-darker animate-pulse"
            ></div>
          ))}
        </div>
      </div>
    );
  }

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
        
        {categories.length > 5 && (
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
