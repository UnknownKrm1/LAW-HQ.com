import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import LeadershipTeam from './components/LeadershipTeam';
import MissionAndOffers from './components/MissionAndOffers';
import JoinClan from './components/JoinClan';
import Discord from './components/Discord';
import Footer from './components/Footer';
import SectionDivider from './components/SectionDivider';

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ background: 'oklch(0.08 0 0)', color: 'oklch(0.95 0 0)' }}
    >
      <Navigation />

      <main>
        <Hero />

        {/* Divider between Hero and About */}
        <div
          className="relative h-0"
          style={{
            background: 'oklch(0.08 0 0)',
          }}
        />

        <AboutUs />

        {/* Divider */}
        <div
          className="h-px mx-auto max-w-6xl"
          style={{
            background: 'linear-gradient(to right, transparent, oklch(0.55 0.22 25 / 0.2), transparent)',
          }}
        />

        <LeadershipTeam />

        {/* Diagonal divider */}
        <SectionDivider variant="diagonal" />

        <MissionAndOffers />

        {/* Diagonal divider reverse */}
        <SectionDivider variant="slash" flip />

        <JoinClan />

        {/* Divider */}
        <div
          className="h-px mx-auto max-w-6xl"
          style={{
            background: 'linear-gradient(to right, transparent, oklch(0.55 0.22 25 / 0.2), transparent)',
          }}
        />

        <Discord />
      </main>

      <Footer />
    </div>
  );
}
