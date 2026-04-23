import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { LocationFilter } from '../components/LocationFilter';
import { PromoCarousel } from '../components/PromoCarousel';
import { CategoryFilters } from '../components/CategoryFilters';
import { StoreCard } from '../components/StoreCard';
import { STORES } from '../data/mockData';
import { Category } from '../types';
import { useAppContext } from '../context/AppContext';

export const HomePage = () => {
  const { currentLocation } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      if (store.location !== currentLocation.name) return false;

      const q = searchQuery.toLowerCase();
      if (q && !(
        store.name.toLowerCase().includes(q) ||
        store.vibe.toLowerCase().includes(q)
      )) return false;

      if (selectedCategory && !store.categories.includes(selectedCategory)) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, currentLocation]);

  return (
    <div className="flex flex-col pb-6 min-h-full bg-[#f7ebd2] text-[#232323]">

      <LocationFilter />

      {/* SEARCH */}
      <div className="px-4 py-2 mb-3">
        <div className="relative">

          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search
              size={16}
              className="text-[#BCB4AC] group-focus-within:text-[#961F22] transition-colors"
              strokeWidth={1.5}
            />
          </div>

          <input
            type="text"
            placeholder="Search stores, styles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-[#ECE6E2] border border-[#BCB4AC] text-sm text-[#232323] placeholder-[#BCB4AC] focus:outline-none focus:border-[#961F22] transition-colors font-['Outfit'] italic"
          />
        </div>
      </div>

      <PromoCarousel />

      {/* CATEGORY FILTERS */}
      <div className="mt-4 mb-2">
        <CategoryFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* HEADER */}
      <div className="px-4 mt-6">
        <div className="flex items-baseline justify-between mb-5 border-b border-[#BCB4AC] pb-2">

          <h2 className="text-2xl font-['Outfit'] font-bold text-[#232323]">
            Curated Spaces
          </h2>

          <span className="text-[10px] uppercase tracking-widest text-[#BCB4AC]">
            {filteredStores.length} finds
          </span>

        </div>

        {/* RESULTS */}
        {filteredStores.length > 0 ? (
          <div className="flex flex-col gap-2">
            {filteredStores.map((store) => (
              <StoreCard key={store.id} store={store} />
            ))}
          </div>
        ) : (
          <div className="text-center py-14 px-4 bg-[#ECE6E2] border border-[#BCB4AC]">

            <p className="text-[#BCB4AC] font-['Outfit'] italic mb-4">
              No finds in {currentLocation.name}.
            </p>

            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="text-xs uppercase tracking-widest text-[#961F22] border-b border-[#961F22] pb-1 hover:bg-[#BCB4AC] transition-colors"
            >
              Clear filters
            </button>

          </div>
        )}
      </div>
    </div>
  );
};