const EmptyState = () => {
  return (
    <div className="flex-1 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        
        {/* Soft visual anchor */}
        <div className="mx-auto mb-6 h-14 w-14 rounded-full bg-white/10 flex items-center justify-center">
          <span className="text-xl text-slate-300">💬</span>
        </div>

        <h2 className="text-lg font-medium text-slate-100">
          No conversation selected
        </h2>

        <p className="mt-3 text-sm text-slate-400 leading-relaxed">
          Choose a conversation from the list on the left,
          or start a new chat to begin messaging.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <button
            className="
              px-6 py-2 rounded-full
              bg-white/15 text-slate-100 text-sm
              hover:bg-white/20
              transition
            "
          >
            Start a new chat
          </button>

          <button
            className="
              px-6 py-2 rounded-full
              border border-white/15
              text-slate-300 text-sm
              hover:border-white/30
              hover:text-slate-100
              transition
            "
          >
            Browse conversations
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmptyState;
