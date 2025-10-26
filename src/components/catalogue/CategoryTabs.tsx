'use client';

import { motion } from 'motion/react';
import { Search } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  active: boolean;
}

interface CategoryTabsProps {
  categories: Category[];
  onCategoryChange?: (categoryId: string) => void;
}

export function CategoryTabs({ categories, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="bg-[#030c08] rounded-[13px] h-[91px] flex items-center px-6 mb-8">
      {/* Search Bar */}
      <div className="relative mr-6">
        <div className="bg-[rgba(28,65,39,0.29)] h-[50px] w-[533px] rounded-[13px] flex items-center px-4">
          <Search className="w-5 h-5 text-[rgba(170,171,173,0.52)] mr-3" />
          <input
            type="text"
            placeholder="Search something here...."
            className="flex-1 bg-transparent border-none outline-none text-[rgba(170,171,173,0.52)] text-[13px] font-['Poppins'] placeholder:text-[rgba(170,171,173,0.52)]"
          />
        </div>
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-[41px] h-[37px] bg-[#153022] rounded-[8px] flex items-center justify-center">
          <div className="w-[22px] h-[22px] bg-white rounded-[6px] mask-alpha" />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-3 flex-1">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange?.(category.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative h-[43px] px-6 rounded-[14px] transition-all ${
              category.active
                ? category.id === 'hot'
                  ? 'bg-[rgba(255,66,50,0.05)] border-2 border-[#fc8483]'
                  : category.id === 'best'
                  ? 'bg-[#0a1b11] border-2 border-[#8bd673]'
                  : 'bg-[#0a1b11] border-2 border-[#04381e]'
                : 'bg-[#0a1b11] border-2 border-[#04381e]'
            }`}
          >
            <div className="flex items-center gap-2">
              {/* Icon Badge */}
              {category.active && (category.id === 'hot' || category.id === 'best') && (
                <div className={`w-[21px] h-[21px] rounded-[6px] ${
                  category.id === 'hot' 
                    ? 'bg-[#f7a0a1]' 
                    : 'bg-[#a4f7a0]'
                }`} />
              )}
              
              <span className={`text-[13px] font-['Poppins'] ${
                category.active && category.id === 'hot'
                  ? 'text-[#fc8483]'
                  : category.active && category.id === 'best'
                  ? 'text-[#8bd673]'
                  : 'text-[#c5c5c5]'
              }`}>
                {category.name}
              </span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}


