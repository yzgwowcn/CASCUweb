/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cup from './pages/Cup';
import History from './pages/History';
import Calendar from './pages/Calendar';

export default function App() {
  return (
    <BrowserRouter>
      <div className="font-sans text-editorial-text selection:bg-editorial-red selection:text-white bg-editorial-bg sm:scroll-smooth min-h-screen flex flex-col">
        <div className="max-w-[1440px] mx-auto w-full bg-editorial-bg flex flex-col min-h-screen border-x border-[#1A1A1A]/10 shadow-2xl shadow-black/5 overflow-hidden relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cup" element={<Cup />} />
            <Route path="/history" element={<History />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
