import React, { useState } from "react";

const conversations = [
  {
    id: 1,
    name: "Product Team",
    last: "Assets uploaded",
    time: "2m",
    active: true,
    unread: 2,
  },
  {
    id: 2,
    name: "Fiona Marshall",
    last: "Can you review this?",
    time: "1h",
    active: false,
    unread: 0,
  },
  {
    id: 3,
    name: "Design Sync",
    last: "Meeting at 5?",
    time: "Yesterday",
    active: false,
    unread: 0,
  },
];

const messages = [
  { id: 1, text: "Hey everyone, assets are ready", me: false },
  { id: 2, text: "I’ve uploaded them to the shared folder", me: false },
  { id: 3, text: "Perfect, checking now", me: true },
  { id: 4, text: "Let me know if anything needs changes", me: false },
];

const Chat = () => {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">

      {/* LEFT SIDEBAR */}
      <aside className="w-[22%] min-w-[260px] bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col">

        {/* Profile header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
          <button
            onClick={() => setProfileOpen(true)}
            className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs hover:bg-white/20 transition"
          >
            AK
          </button>

          <div>
            <div className="text-sm font-medium">Amit Kumar</div>
            <div className="text-xs text-slate-400">Online</div>
          </div>
        </div>

        {/* Conversation list */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map(c => (
            <div
              key={c.id}
              className={`
                px-6 py-4 cursor-pointer transition
                ${c.active ? "bg-white/10" : "hover:bg-white/5"}
              `}
            >
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
                  {c.name
                    .split(" ")
                    .map(w => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium truncate">
                      {c.name}
                    </span>
                    <span className="text-xs text-slate-500">
                      {c.time}
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-slate-400 truncate">
                      {c.last}
                    </p>

                    {c.unread > 0 && (
                      <span className="ml-2 h-5 min-w-[20px] px-2 rounded-full bg-white/15 text-xs flex items-center justify-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* CENTER PANEL */}
      <main className="flex-1 flex flex-col bg-white/7 backdrop-blur-2xl">

        {/* Chat header */}
        <div className="px-8 py-6 border-b border-white/10 flex items-center gap-4">
          <div className="relative">
            <div className="h-10 w-10 rounded-full bg-white/10" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>

          <div>
            <div className="text-sm font-medium">Product Team</div>
            <div className="text-xs text-slate-400 mt-0.5">
              4 members • Active now
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          <div className="text-center text-xs text-slate-500 mb-6">
            Today
          </div>

          <div className="space-y-5">
            {messages.map((m, i) => {
              const prev = messages[i - 1];
              const grouped = prev && prev.me === m.me;

              return (
                <div
                  key={m.id}
                  className={`flex ${m.me ? "justify-end" : "justify-start"} ${
                    grouped ? "mt-1" : "mt-4"
                  }`}
                >
                  <div
                    className={`
                      max-w-[55%]
                      px-4 py-2
                      text-sm leading-relaxed
                      ${
                        m.me
                          ? "bg-indigo-400/20 text-slate-100 rounded-2xl rounded-tr-md"
                          : "bg-white/8 text-slate-200 rounded-2xl rounded-tl-md"
                      }
                    `}
                  >
                    {m.text}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Input */}
        <div className="px-8 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
            <button className="text-slate-400 text-sm">＋</button>

            <input
              placeholder="Type a message"
              className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-400"
            />

            <button className="text-slate-400 text-sm">🙂</button>

            <button className="px-4 py-1 rounded-full bg-white/15 text-slate-100 text-xs hover:bg-white/20 transition">
              Send
            </button>
          </div>
        </div>
      </main>

      {/* PROFILE SIDEBAR OVERLAY */}
      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* PROFILE SIDEBAR (LEFT) */}
      <div
        className={`
          fixed top-0 left-0 h-full w-[320px]
          bg-white/5 backdrop-blur-xl
          border-r border-white/10
          transform transition-transform duration-300
          ${profileOpen ? "translate-x-0" : "-translate-x-full"}
          z-50
        `}
      >
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="text-sm font-medium">Your Profile</div>
          <button
            onClick={() => setProfileOpen(false)}
            className="text-slate-400 hover:text-slate-200 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-sm">
              AK
            </div>
            <div>
              <div className="text-sm font-medium">Amit Kumar</div>
              <div className="text-xs text-slate-400">
                amit@circlechat.app
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-sm transition">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-sm transition">
              Help
            </button>
          </div>

          <div className="pt-4 border-t border-white/10">
            <button className="w-full px-4 py-2 rounded-lg bg-white/15 text-sm hover:bg-white/20 transition">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
