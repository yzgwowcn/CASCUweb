/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Culture from './components/Culture';
import Activities from './components/Activities';
import Recruitment from './components/Recruitment';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans text-editorial-text selection:bg-editorial-red selection:text-white bg-editorial-bg sm:scroll-smooth min-h-screen flex flex-col">
      <div className="max-w-[1440px] mx-auto w-full bg-editorial-bg flex flex-col min-h-screen border-x border-[#1A1A1A]/10 shadow-2xl shadow-black/5 overflow-hidden">
        <Navbar />
        <Hero />
        <Culture />
        <Activities />
        <Recruitment />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  );
}
