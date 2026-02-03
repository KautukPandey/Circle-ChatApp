const messages = [
  { id: 1, text: "Hey everyone, assets are ready", me: false },
  { id: 2, text: "Perfect, sharing now", me: true },
  { id: 3, text: "Let me know if anything needs changes", me: false },
];

const MessagePanel = () => {
  return (
    <div className="flex flex-col h-full">

      {/* Header */}
      <div className="px-8 py-6 border-b border-white/10">
        <div className="text-base font-medium tracking-tight">
          Product Team
        </div>
        <div className="text-xs text-slate-400 mt-1">
          4 members • Active now
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-8 py-6 space-y-4 overflow-y-auto">
        {messages.map(m => (
          <div
            key={m.id}
            className={`flex ${m.me ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[55%]
                px-4 py-2 rounded-2xl
                text-sm leading-relaxed
                ${
                  m.me
                    ? "bg-white/15 text-slate-100"
                    : "bg-white/8 text-slate-200"
                }
              `}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-8 py-4 border-t border-white/10">
        <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
          <input
            placeholder="Type a message"
            className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-400"
          />
          <button className="px-4 py-1 rounded-full bg-white/15 text-slate-100 text-xs">
            Send
          </button>
        </div>
      </div>

    </div>
  );
};

export default MessagePanel;
