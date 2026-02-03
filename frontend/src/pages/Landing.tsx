import Hero from "../components/ui/Hero";
import Features from "../components/ui/Features";
import CTA from "../components/ui/CTA";

const Landing = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Hero />
      <Features />
      <CTA />
    </div>
  );
};

export default Landing;
