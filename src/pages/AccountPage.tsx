import React from 'react';
import { Settings, Heart, HelpCircle, LogOut, ChevronRight } from 'lucide-react';
export const AccountPage = () => {
  const menuItems = [
  {
    icon: Settings,
    label: 'Edit Profile'
  },
  {
    icon: Heart,
    label: 'Saved Spaces'
  },
  {
    icon: HelpCircle,
    label: 'Help & Support'
  },
  {
    icon: LogOut,
    label: 'Log Out',
    textClass: 'text-[#c2410c]'
  }];

  return (
    <div className="px-5 py-8 bg-[#faf8f5] min-h-full">
      <h1 className="text-3xl font-serif text-[#1a1a1a] mb-8 border-b border-[#1a1a1a] pb-4">
        Account
      </h1>

      <div className="bg-white border border-[#e8e4dc] p-6 mb-8 flex items-center gap-5">
        <div className="w-16 h-16 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[#faf8f5] text-xl font-serif shrink-0">
          AJ
        </div>
        <div>
          <h2 className="text-xl font-serif text-[#1a1a1a] mb-1">
            Alex Johnson
          </h2>
          <p className="text-xs text-[#8c8c8c] font-light mb-3">
            alex.j@example.com
          </p>
          <div className="inline-block border border-[#e8e4dc] px-2 py-1 text-[9px] uppercase tracking-widest text-[#1a1a1a]">
            Member since 2023
          </div>
        </div>
      </div>

      <div className="bg-white border border-[#e8e4dc]">
        <div className="divide-y divide-[#e8e4dc]">
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                className="w-full flex items-center justify-between p-5 hover:bg-[#faf8f5] transition-colors group">
                
                <div className="flex items-center gap-4">
                  <Icon
                    size={18}
                    strokeWidth={1.5}
                    className={`${item.textClass || 'text-[#1a1a1a]'}`} />
                  
                  <span
                    className={`text-sm tracking-wide ${item.textClass || 'text-[#1a1a1a]'}`}>
                    
                    {item.label}
                  </span>
                </div>
                <ChevronRight
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#8c8c8c] group-hover:text-[#1a1a1a] transition-colors" />
                
              </button>);

          })}
        </div>
      </div>
    </div>);

};