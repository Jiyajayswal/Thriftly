import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { STORES } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';

export const StorePage = () => {
  const { id } = useParams<{ id: string }>();
  const store = STORES.find((s) => s.id === id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!store) {
    return (
      <div className="p-8 text-center font-['Outfit'] italic text-[#BCB4AC]">
        Store not found
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#f7ebd2] min-h-full pb-6">

      {/* Gallery Carousel */}
      <div className="relative h-[45vh] w-full bg-[#fe7c8087]">
        <div
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar h-full w-full"
          onScroll={(e) => {
            const scrollLeft = e.currentTarget.scrollLeft;
            const width = e.currentTarget.clientWidth;
            setActiveImageIndex(Math.round(scrollLeft / width));
          }}>
          {store.galleryUrls.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`${store.name} interior ${idx + 1}`}
              className="w-full h-full object-cover flex-shrink-0 snap-center"
            />
          ))}
        </div>

        {/* Gallery Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {store.galleryUrls.map((_, idx) => (
            <div
              key={idx}
              className={`h-0.5 transition-all duration-300 ${
                idx === activeImageIndex ? 'w-6 bg-[#ECE6E2]' : 'w-2 bg-[#ECE6E2]/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Store Info — red gradient deepening to near-black */}
      <div
        className="px-5 pt-8 pb-8 border-b border-[#BCB4AC]"
        style={{ background: 'linear-gradient(180deg, #8C030B 40%, #b52f33 60%, #c94f47 90%)' }}>

        <div className="flex items-center gap-2 mb-3">
          {store.categories.map((cat) => (
            <span
              key={cat}
              className="text-[9px] uppercase tracking-widest text-[#BCB4AC] font-['Outfit']">
              {cat}
            </span>
          ))}
        </div>

        <h1 className="text-3xl font-['Outfit'] font-bold text-[#ECE6E2] mb-2 leading-tight">
          {store.name}
        </h1>
        <p className="text-[#BCB4AC] font-['Outfit'] italic mb-6 text-lg">
          {store.vibe}
        </p>

        <p className="text-sm leading-relaxed text-[#ECE6E2] mb-6 font-light font-['Outfit']">
          {store.description}
        </p>

        <div className="flex items-start gap-3 text-xs text-[#ECE6E2] uppercase tracking-wider border-t border-[#BCB4AC]/40 pt-4 font-['Outfit']">
          <MapPin
            size={14}
            className="text-[#ECE6E2] shrink-0 mt-0.5"
            strokeWidth={1.5}
          />
          <span className="leading-relaxed">{store.address}</span>
        </div>
      </div>

      {/* Featured Items */}
      <div className="px-5 pt-10">
        <div className="flex items-baseline justify-between mb-8 border-b border-[#232323] pb-2">
          <h2 className="text-2xl font-['Outfit'] font-bold text-[#232323]">
            The Collection
          </h2>
          <span className="text-[10px] uppercase tracking-widest text-[#BCB4AC] font-['Outfit']">
            {store.items.length} Pieces
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8">
          {store.items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};