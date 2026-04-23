import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, ShoppingBag, Bell, User } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

export const BottomNav = () => {
  const { unreadNotificationsCount, reservedItems } = useAppContext();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/bag', icon: ShoppingBag, label: 'Bag', badge: reservedItems.length },
    { path: '/notifications', icon: Bell, label: 'Alerts', badge: unreadNotificationsCount },
    { path: '/account', icon: User, label: 'Account' }
  ];

  return (
    <nav className="absolute bottom-0 w-full bg-[#8C030B]/95 backdrop-blur-md border-t border-[#E7D7B8] px-6 py-3 pb-safe z-50">
  <div className="flex justify-between items-center">
    {navItems.map((item) => {
      const Icon = item.icon;

      return (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center gap-1.5 relative transition-colors duration-300 ${
              isActive ? 'text-[#f8e7b0]' : 'text-[#fef8f8] hover:text-[rgb(252,246,162)]'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <div className="relative">
                <Icon
                  size={22}
                  strokeWidth={isActive ? 2 : 1.5}
                />

                {item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#8B1E1E] text-[#FFF8E7] text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-[#FFF8E7]">
                    {item.badge}
                  </span>
                )}
              </div>

              <span
                className={`text-[10px] tracking-wide ${
                  isActive ? 'font-medium' : 'font-normal'
                }`}
              >
                {item.label}
              </span>
            </>
          )}
        </NavLink>
      );
    })}
  </div>
</nav>
  );
};