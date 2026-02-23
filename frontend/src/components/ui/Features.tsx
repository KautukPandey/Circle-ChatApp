import { GlowCard } from "@/components/spotlight-card";
import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

const Features = () => {
  return (
    <section className="px-6 py-28 bg-slate-950">
      
      {/* Section Header */}
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h2 className="text-3xl font-semibold text-white">
          Built for modern conversations
        </h2>
        <p className="mt-4 text-slate-400">
          CircleChat focuses on speed, privacy, and clarity — without unnecessary complexity.
        </p>
      </div>

      {/* Glow Cards (same structure as your Default demo) */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        
        <GlowCard>
          <div className="flex flex-col gap-4">
            <MessageCircle className="w-6 h-6 text-white/80" />
            <h3 className="text-lg font-medium text-white">
              Real-time messaging
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Messages are delivered instantly, making conversations feel natural and responsive.
            </p>
          </div>
        </GlowCard>

        <GlowCard glowColor="purple">
          <div className="flex flex-col gap-4">
            <ShieldCheck className="w-6 h-6 text-white/80" />
            <h3 className="text-lg font-medium text-white">
              Privacy-first design
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your conversations are protected with modern security practices and zero tracking.
            </p>
          </div>
        </GlowCard>

        <GlowCard glowColor="green">
          <div className="flex flex-col gap-4">
            <Sparkles className="w-6 h-6 text-white/80" />
            <h3 className="text-lg font-medium text-white">
              Minimal by intention
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              A clean interface that keeps the focus on people, not features.
            </p>
          </div>
        </GlowCard>

      </div>
    </section>
  );
};

export default Features;
