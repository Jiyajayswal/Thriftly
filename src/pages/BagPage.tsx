import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Check } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import { STORES } from '../data/mockData';
export const BagPage = () => {
  const { reservedItems } = useAppContext();
  const groupedItems = useMemo(() => {
    const groups: Record<
      string,
      {
        storeName: string;
        items: typeof reservedItems;
      }> =
    {};
    reservedItems.forEach((item) => {
      if (!groups[item.storeId]) {
        const store = STORES.find((s) => s.id === item.storeId);
        groups[item.storeId] = {
          storeName: store?.name || 'Unknown Store',
          items: []
        };
      }
      groups[item.storeId].items.push(item);
    });
    return groups;
  }, [reservedItems]);
  if (reservedItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center py-32 bg-[#faf8f5]">
        <div className="w-24 h-24 border border-[#e8e4dc] rounded-full flex items-center justify-center mb-6 bg-white">
          <ShoppingBag size={32} className="text-[#8c8c8c]" strokeWidth={1} />
        </div>
        <h2 className="text-2xl font-serif text-[#1a1a1a] mb-3">
          Your Bag is Empty
        </h2>
        <p className="text-[#8c8c8c] font-light mb-10 max-w-[250px] leading-relaxed">
          Discover unique pieces and reserve them for pickup.
        </p>
        <Link
          to="/"
          className="bg-[#1a1a1a] text-white px-8 py-3.5 text-xs uppercase tracking-widest hover:bg-[#333] transition-colors">
          
          Explore Spaces
        </Link>
      </div>);

  }
  return (
    <div className="px-5 py-8 bg-[#faf8f5] min-h-full">
      <h1 className="text-3xl font-serif text-[#1a1a1a] mb-8 border-b border-[#1a1a1a] pb-4">
        Reserved Pieces
      </h1>

      <div className="space-y-10">
        {Object.entries(groupedItems).map(([storeId, group]) =>
        <div
          key={storeId}
          className="bg-white border border-[#e8e4dc] overflow-hidden">
          
            <div className="bg-[#faf8f5] px-5 py-4 border-b border-[#e8e4dc]">
              <h2 className="font-serif text-lg text-[#1a1a1a]">
                {group.storeName}
              </h2>
            </div>

            <div className="divide-y divide-[#e8e4dc]">
              {group.items.map((item) =>
            <Link
              key={item.id}
              to={`/item/${item.id}`}
              className="flex gap-5 p-5 hover:bg-[#faf8f5] transition-colors group">
              
                  <div className="w-24 h-32 bg-[#e8e4dc] shrink-0 overflow-hidden">
                    <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <h3 className="text-sm font-serif text-[#1a1a1a] line-clamp-2 leading-snug mb-2">
                        {item.name}
                      </h3>
                      <p className="text-[#8c8c8c] text-sm font-light">
                        ${item.price}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c2410c] mt-4">
                      <Check size={12} strokeWidth={2} />
                      Reserved
                    </div>
                  </div>
                </Link>
            )}
            </div>

            <div className="p-5 bg-white border-t border-[#e8e4dc] flex justify-between items-center">
              <span className="text-[10px] uppercase tracking-widest text-[#8c8c8c]">
                Total at pickup
              </span>
              <span className="font-serif text-lg text-[#1a1a1a]">
                ${group.items.reduce((sum, item) => sum + item.price, 0)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>);

};