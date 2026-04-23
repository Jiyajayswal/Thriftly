import React from 'react';
import { Category } from '../types';
interface Props {
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
}
const CATEGORIES: Category[] = [
'Vintage',
'Streetwear',
'Budget Finds',
'Accessories'];

export const CategoryFilters = ({
  selectedCategory,
  onSelectCategory
}: Props) => {
  return (
    <div className="w-full overflow-x-auto hide-scrollbar px-4 py-3">
      <div className="flex gap-3 min-w-max">
        <button
          onClick={() => onSelectCategory(null)}
          className={`px-5 py-2 rounded-none text-xs tracking-wider transition-all border ${selectedCategory === null ? 'bg-[#1a1a1a] text-[#faf8f5] border-[#1a1a1a]' : 'bg-transparent text-[#1a1a1a] border-[#e8e4dc] hover:border-[#1a1a1a]'}`}>
          
          ALL
        </button>
        {CATEGORIES.map((cat) =>
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`px-5 py-2 rounded-none text-xs tracking-wider transition-all border uppercase ${selectedCategory === cat ? 'bg-[#1a1a1a] text-[#faf8f5] border-[#1a1a1a]' : 'bg-transparent text-[#1a1a1a] border-[#e8e4dc] hover:border-[#1a1a1a]'}`}>
          
            {cat}
          </button>
        )}
      </div>
    </div>);

};