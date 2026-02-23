const CTA = () => {
  return (
    <section className="px-6 py-32 bg-slate-950">
      
      <div className="max-w-3xl mx-auto text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
          Start a better way to chat
        </h2>

        <p className="mt-6 text-lg text-slate-400">
          CircleChat is built for people who value clarity, privacy, and calm communication.
          Get started in seconds.
        </p>

        <div className="mt-12 flex items-center justify-center gap-4">
          <button
            className="
              px-8 py-3 rounded-full
              bg-white/90 text-slate-900
              font-medium
              hover:bg-white
              transition
            "
          >
            Get started
          </button>

          <button
            className="
              px-8 py-3 rounded-full
              border border-white/20
              text-white/80
              hover:text-white
              hover:border-white/40
              transition
            "
          >
            Learn more
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Free to use • No credit card required
        </p>
      </div>

    </section>
  );
};

export default CTA;
