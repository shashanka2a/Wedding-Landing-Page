import { Hero } from "@/components/Hero";
import { EventDetails } from "@/components/EventDetails";
import { MapSection } from "@/components/MapSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <EventDetails />
      <MapSection />
      <Footer />
    </div>
  );
}
