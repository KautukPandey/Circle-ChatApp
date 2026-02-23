import Particles from "../Particles";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={300}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={70}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation
          pixelRatio={1}
        />
      </div>

      {/* Neutral Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-950" />

      {/* Foreground */}
      <div className="relative z-10 h-full flex flex-col">
        
        {/* Navbar – 10vh */}
        <div className="h-[10vh] flex items-center">
          <Navbar />
        </div>

        {/* Hero Content – centered */}
        <div className="h-[90vh] flex items-center justify-center px-6">
          <div className="max-w-3xl w-full text-center">
            
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              Simple, secure conversations —
              <span className="block mt-2 text-slate-300">
                built for real people.
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-400">
              CircleChat is a modern messaging app focused on clarity, privacy,
              and speed. No noise. No gimmicks. Just conversation.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <button className="
                px-6 py-3 rounded-full
                bg-white/90 text-slate-900
                font-medium
                hover:bg-white
                transition
              ">
                Get started
              </button>

              <button className="
                px-6 py-3 rounded-full
                border border-white/20
                text-white/80
                hover:text-white
                hover:border-white/40
                transition
              ">
                Learn more
              </button>
            </div>

            {/* Subtext */}
            <p className="mt-6 text-sm text-slate-500">
              Free to use • No credit card required
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
