import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { StorePage } from './pages/StorePage';
import { ItemDetailPage } from './pages/ItemDetailPage';
import { BagPage } from './pages/BagPage';
import { NotificationsPage } from './pages/NotificationsPage';
import { AccountPage } from './pages/AccountPage';
export function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="store/:id" element={<StorePage />} />
            <Route path="item/:id" element={<ItemDetailPage />} />
            <Route path="bag" element={<BagPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="account" element={<AccountPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>);

}