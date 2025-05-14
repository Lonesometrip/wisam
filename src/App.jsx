import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

// Add global style to ensure black background
const globalStyle = document.createElement('style');
globalStyle.innerHTML = `
  html, body, #root {
    background-color: #000000 !important;
    min-height: 100vh;
    overflow-x: hidden;
  }
`;
document.head.appendChild(globalStyle);

// Carpool pages
import MercedesSClass from './pages/carpool/MercedesSClass';
import BMW7 from './pages/carpool/BMW7';
import MercedesVClass from './pages/carpool/MercedesVClass';

// Services pages
import ChauffeurService from './pages/services/ChauffeurService';
import AirportTransfer from './pages/services/AirportTransfer';
import VipService from './pages/services/VipService';

// Tourism pages
import PopularDestinations from './pages/tourism/PopularDestinations';
import ShoppingTours from './pages/tourism/ShoppingTours';
import Freizeitparks from './pages/tourism/Freizeitparks';
import Bauernhofe from './pages/tourism/Bauernhofe';

// Main section components
import { CarpoolPage, ServicesPage, TourismPage } from './components';

// Contact page
import ContactPage from './pages/ContactPage';

// Legal pages
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* Carpool routes */}
          <Route path="carpool">
            <Route index element={<CarpoolPage />} />
            <Route path="mercedes-sclass" element={<MercedesSClass />} />
            <Route path="bmw-7" element={<BMW7 />} />
            <Route path="mercedes-vclass" element={<MercedesVClass />} />
          </Route>

          {/* Services routes */}
          <Route path="services">
            <Route index element={<ServicesPage />} />
            <Route path="chauffeurservice" element={<ChauffeurService />} />
            <Route path="airporttransfer" element={<AirportTransfer />} />
            <Route path="vip-service" element={<VipService />} />
          </Route>

          {/* Tourism routes */}
          <Route path="tourism">
            <Route index element={<TourismPage />} />
            <Route path="beliebte-zielorte" element={<PopularDestinations />} />
            <Route path="shoppingtours" element={<ShoppingTours />} />
            <Route path="freizeitparks" element={<Freizeitparks />} />
            <Route path="bauernhofe" element={<Bauernhofe />} />
          </Route>

          {/* Alternative Tourism route for compatibility */}
          <Route path="tourism-section" element={<Navigate to="/tourism" />} />

          {/* Contact route */}
          <Route path="contact" element={<ContactPage />} />

          {/* Legal routes */}
          <Route path="privacy-policy" element={<PrivacyPolicy />} />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
