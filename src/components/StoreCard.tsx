import React from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../types';
interface Props {
  store: Store;
}
export const StoreCard = ({ store }: Props) => {
  return (
    <Link to={`/store/${store.id}`} className="block w-full mb-8 group">
      <div className="bg-transparent overflow-hidden">
        <div className="relative h-64 w-full mb-3 overflow-hidden bg-[#e8e4dc]">
          <img
            src={store.thumbnailUrl}
            alt={store.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          <div className="absolute top-0 left-0 w-full h-full bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />

          <div className="absolute top-3 right-3 bg-[#faf8f5] px-3 py-1 text-[10px] font-medium tracking-widest uppercase text-[#1a1a1a] border border-[#e8e4dc]">
            {store.distance} km
          </div>
        </div>

        <div className="px-1">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="text-xl font-serif font-medium text-[#1a1a1a]">
              {store.name}
            </h3>
          </div>
          <p className="text-sm text-[#8c8c8c] mb-3 italic font-serif">
            {store.vibe}
          </p>

          <div className="flex flex-wrap gap-2">
            {store.categories.map((cat) =>
            <span
              key={cat}
              className="text-[9px] uppercase tracking-widest text-[#1a1a1a] border-b border-[#1a1a1a]/20 pb-0.5">
              
                {cat}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>);

};