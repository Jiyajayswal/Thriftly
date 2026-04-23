import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Don't show bottom nav on item detail page
  const showBottomNav = !location.pathname.includes('/item/');
  // Determine if we're on a detail page that needs a back button
  const isDetailPage =
  location.pathname.includes('/store/') ||
  location.pathname.includes('/item/');
  return (
    <div className="flex justify-center min-h-screen bg-[#e5e5e5]">
      <div className="w-full max-w-[430px] bg-[#faf8f5] min-h-screen relative shadow-2xl overflow-hidden flex flex-col">
        {/* Top Header - Context Aware */}
        <header className="sticky top-0 z-40 bg-[#fbf7ee] backdrop-blur-md border-b border-[#e8e4dc] px-4 py-3 flex items-center justify-center">
          {isDetailPage &&
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 p-1.5 -ml-1.5 text-[#1a1a1a] hover:bg-[#e8e4dc]/50 rounded-full transition-colors"
            aria-label="Go back">
            
              <ChevronLeft size={24} strokeWidth={1.5} />
            </button>
          }
          <h1 className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a] italic">
            Thriftly
          </h1>
        </header>

        {/* Main Content Area */}
        <main
          className={`flex-1 overflow-y-auto hide-scrollbar ${showBottomNav ? 'pb-20' : 'pb-0'}`}>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                y: -10
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="h-full">
              
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        {showBottomNav && <BottomNav />}
      </div>
    </div>);

};