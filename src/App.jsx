import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Delivery from './components/Delivery';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import SeoHead from './components/SeoHead';

// Replace these placeholders with real links/phone numbers.
const LINKS = {
  menu: '#',
  poke: '#',
  gluten: '#',
  delivery: '#delivery',
  reviews: '#reviews',
  location: '#location',
  contacts: '#contacts',
  call: 'tel:+390456115166',
  whatsapp: 'https://wa.me/390456115166?text=Ciao%20Terra%20Sushi%2C%20vorrei%20ordinare.',
  order: '#delivery',
  maps: 'https://www.google.com/maps?cid=9602177942733427985'
};

const NAV_ITEMS = [
  { label: 'Consegna', href: LINKS.delivery },
  { label: 'Dove siamo', href: LINKS.location },
  { label: 'Recensioni', href: LINKS.reviews },
  { label: 'Contatti', href: LINKS.contacts }
];

export default function App() {
  return (
    <>
      <SeoHead mapsLink={LINKS.maps} />
      <Navbar items={NAV_ITEMS} />
      <Hero links={LINKS} />

      <main>
        <Delivery orderLink={LINKS.order} />
        <Location mapsLink={LINKS.maps} />
        <Reviews />
      </main>

      <Footer links={LINKS} />
      <MobileBottomBar links={LINKS} />
    </>
  );
}
