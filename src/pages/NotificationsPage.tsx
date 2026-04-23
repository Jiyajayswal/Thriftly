import React from 'react';
import { Bell, Clock, Tag, Info } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
export const NotificationsPage = () => {
  const { notifications, markNotificationRead } = useAppContext();
  const getIcon = (type: string) => {
    switch (type) {
      case 'alert':
        return <Clock size={18} className="text-[#c2410c]" strokeWidth={1.5} />;
      case 'promo':
        return <Tag size={18} className="text-[#78866b]" strokeWidth={1.5} />;
      default:
        return <Info size={18} className="text-[#1a1a1a]" strokeWidth={1.5} />;
    }
  };
  if (notifications.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center py-32 bg-[#faf8f5]">
        <div className="w-24 h-24 border border-[#e8e4dc] rounded-full flex items-center justify-center mb-6 bg-white">
          <Bell size={32} className="text-[#8c8c8c]" strokeWidth={1} />
        </div>
        <h2 className="text-2xl font-serif text-[#1a1a1a] mb-2">No Updates</h2>
        <p className="text-[#8c8c8c] font-light">You're all caught up.</p>
      </div>);

  }
  return (
    <div className="px-5 py-8 bg-[#faf8f5] min-h-full">
      <h1 className="text-3xl font-serif text-[#1a1a1a] mb-8 border-b border-[#1a1a1a] pb-4">
        Updates
      </h1>

      <div className="space-y-4">
        {notifications.map((notification) =>
        <div
          key={notification.id}
          onClick={() => markNotificationRead(notification.id)}
          className={`p-5 border transition-colors cursor-pointer flex gap-4 ${notification.read ? 'bg-white border-[#e8e4dc]' : 'bg-white border-[#1a1a1a] shadow-sm'}`}>
          
            <div className="w-10 h-10 border border-[#e8e4dc] rounded-full flex items-center justify-center shrink-0 bg-[#faf8f5]">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <h3
                className={`text-sm font-serif ${notification.read ? 'text-[#1a1a1a]' : 'text-[#c2410c]'}`}>
                
                  {notification.title}
                </h3>
                {!notification.read &&
              <div className="w-1.5 h-1.5 rounded-full bg-[#c2410c] mt-1.5 shrink-0" />
              }
              </div>
              <p className="text-xs text-[#8c8c8c] leading-relaxed mb-3 font-light">
                {notification.message}
              </p>
              <span className="text-[9px] uppercase tracking-widest text-[#8c8c8c]">
                {notification.timestamp}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>);

};