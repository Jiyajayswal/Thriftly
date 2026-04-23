import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from '../types';
interface Props {
  item: Item;
}
export const ItemCard = ({ item }: Props) => {
  return (
    <Link to={`/item/${item.id}`} className="block w-full group">
      <div className="flex flex-col h-full">
        <div className="relative aspect-[3/4] w-full bg-[#e8e4dc] mb-3 overflow-hidden">
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
          {item.badge &&
          <div className="absolute bottom-2 left-2 bg-[#1a1a1a] text-[#faf8f5] px-2 py-1 text-[9px] uppercase tracking-widest">
              {item.badge}
            </div>
          }
        </div>

        <div className="flex flex-col flex-1 px-1">
          <h4 className="text-sm font-serif text-[#1a1a1a] line-clamp-2 leading-snug mb-1 group-hover:text-[#c2410c] transition-colors">
            {item.name}
          </h4>
          <div className="mt-auto text-sm tracking-wide text-[#8c8c8c]">
            ${item.price}
          </div>
        </div>
      </div>
    </Link>);

};