// pages/index.js atau app/page.js
import Navbar from "@/components/layouts/Navbar";
import Hero from "@/components/sections/home/Hero";
import TechStack from "@/components/sections/home/TechStack";
import PortfolioPreview from "@/components/sections/home/PortfolioPreview";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TechStack />
      <PortfolioPreview />
    </div>
  );
}