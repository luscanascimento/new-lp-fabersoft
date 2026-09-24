import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Trust } from './components/sections/Trust';
import { Solutions } from './components/sections/Solutions';
import { LeanTrack } from './components/sections/LeanTrack';
import { AI } from './components/sections/AI';
import { Mensura } from './components/sections/Mensura';
import { Process } from './components/sections/Process';
import { Engineering } from './components/sections/Engineering';
import { SoftwareProduction } from './components/sections/SoftwareProduction';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';
import { CodeStreamsBackground } from './components/ui/CodeStreamsBackground';
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis();

  return (
    <div className="min-h-screen flex flex-col bg-faber-bg-base font-poppins selection:bg-faber-blue selection:text-white text-[#FAFAFA] overflow-x-hidden relative">
      <CodeStreamsBackground />
      <Header />
      <main className="flex-1 w-full overflow-hidden relative z-10">
        <Hero />
        <Trust />
        <Solutions />
        <LeanTrack />
        <AI />
        <Mensura />
        <Process />
        <Engineering />
        <SoftwareProduction />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
