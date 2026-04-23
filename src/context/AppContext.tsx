import React, { useState, createContext, useContext, ReactNode } from 'react';
import { Item, Notification, Location } from '../types';
import { NOTIFICATIONS, LOCATIONS } from '../data/mockData';
interface AppContextType {
  reservedItems: Item[];
  reserveItem: (item: Item) => void;
  isItemReserved: (itemId: string) => boolean;
  notifications: Notification[];
  markNotificationRead: (id: string) => void;
  unreadNotificationsCount: number;
  currentLocation: Location;
  setCurrentLocation: (loc: Location) => void;
  locations: Location[];
}
const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider = ({ children }: {children: ReactNode;}) => {
  const [reservedItems, setReservedItems] = useState<Item[]>([]);
  const [notifications, setNotifications] =
  useState<Notification[]>(NOTIFICATIONS);
  const [currentLocation, setCurrentLocation] = useState<Location>(LOCATIONS[0]);
  const reserveItem = (item: Item) => {
    if (!reservedItems.find((i) => i.id === item.id)) {
      setReservedItems([...reservedItems, item]);
    }
  };
  const isItemReserved = (itemId: string) => {
    return reservedItems.some((i) => i.id === itemId);
  };
  const markNotificationRead = (id: string) => {
    setNotifications(
      notifications.map((n) =>
      n.id === id ?
      {
        ...n,
        read: true
      } :
      n
      )
    );
  };
  const unreadNotificationsCount = notifications.filter((n) => !n.read).length;
  return (
    <AppContext.Provider
      value={{
        reservedItems,
        reserveItem,
        isItemReserved,
        notifications,
        markNotificationRead,
        unreadNotificationsCount,
        currentLocation,
        setCurrentLocation,
        locations: LOCATIONS
      }}>
      
      {children}
    </AppContext.Provider>);

};
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};