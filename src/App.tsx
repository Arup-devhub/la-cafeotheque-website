import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { VibeBanner } from './components/VibeBanner';
import { Location } from './components/Location';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';

export function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F0E8] text-[#242321] selection:bg-[#30231F] selection:text-[#FAF7F2]">
      {/* Premium Sticky Navigation */}
      <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Main Website Sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Menu />
        <Gallery />
        <VibeBanner />
        <Location />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Reservation & Booking Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}

export default App;
