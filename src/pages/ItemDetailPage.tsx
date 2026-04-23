import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { STORES } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import { AnimatePresence, motion } from 'framer-motion';
export const ItemDetailPage = () => {
  const { id } = useParams<{
    id: string;
  }>();
  const { reserveItem, isItemReserved } = useAppContext();
  const [showToast, setShowToast] = useState(false);
  let item = null;
  let store = null;
  for (const s of STORES) {
    const foundItem = s.items.find((i) => i.id === id);
    if (foundItem) {
      item = foundItem;
      store = s;
      break;
    }
  }
  if (!item || !store) {
    return (
      <div className="p-8 text-center font-serif italic text-[#8c8c8c]">
        Item not found
      </div>);

  }
  const reserved = isItemReserved(item.id);
  const handleReserve = () => {
    if (!reserved) {
      reserveItem(item);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };
  return (
    <div className="flex flex-col bg-[#faf8f5] min-h-screen pb-28">
      {/* Hero Image */}
      <div className="w-full aspect-[3/4] bg-[#e8e4dc] relative">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="w-full h-full object-cover" />
        
        {item.badge &&
        <div className="absolute top-4 right-4 bg-[#1a1a1a] text-[#faf8f5] px-3 py-1.5 text-[10px] uppercase tracking-widest">
            {item.badge}
          </div>
        }
      </div>

      {/* Item Details */}
      <div className="px-6 pt-8 flex-1 bg-[#f7ebd2]">
        <div className="mb-6">
          <Link
            to={`/store/${store.id}`}
            className="text-[10px] uppercase tracking-widest text-[#8c8c8c] hover:text-[#1a1a1a] transition-colors border-b border-transparent hover:border-[#1a1a1a] pb-0.5">
            
            {store.name}
          </Link>
        </div>

        <h1 className="text-3xl font-serif text-[#1a1a1a] leading-tight mb-3">
          {item.name}
        </h1>
        <div className="text-xl text-[#1a1a1a] mb-8 font-light tracking-wide">
          ${item.price}
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-[10px] uppercase tracking-widest text-[#8c8c8c] mb-3 border-b border-[#e8e4dc] pb-2">
              Details
            </h3>
            <p className="text-[#1a1a1a] text-sm leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          <div className="bg-[#faf8f5] p-5 border border-[#f7ebd2]">
            <h4 className="text-[10px] uppercase tracking-widest text-[#1a1a1a] mb-2">
              Pickup Information
            </h4>
            <p className="text-xs text-[#8c8c8c] leading-relaxed font-light">
              Reserve now and pick up within 24 hours at{' '}
              <span className="font-medium text-[#1a1a1a]">{store.name}</span>.
              No payment required until pickup.
            </p>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-[#f7ebd2] backdrop-blur-md border-t border-[#f7ebd2] p-5 pb-safe z-20">
        <button
          onClick={handleReserve}
          disabled={reserved}
          className={`w-full py-4 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2 transition-all ${reserved ? 'bg-[#e8e4dc] text-[#8c8c8c] cursor-not-allowed' : 'bg-[#8C030B] text-white hover:bg-[#9a3412] active:scale-[0.98]'}`}>
          
          {reserved ?
          <>
              <Check size={16} strokeWidth={2} />
              Reserved
            </> :

          'Reserve Piece'
          }
        </button>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast &&
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: 50
          }}
          className="fixed bottom-28 left-5 right-5 max-w-[390px] mx-auto bg-[#1a1a1a] text-[#faf8f5] px-5 py-4 shadow-2xl z-50 text-xs font-light tracking-wide text-center border border-[#1a1a1a]">
          
            Piece reserved for 24 hours. Please pick up before expiry.
          </motion.div>
        }
      </AnimatePresence>
    </div>);

};