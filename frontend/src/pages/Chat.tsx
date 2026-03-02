import React, { useRef, useState } from "react";
import useChat from "@/hooks/useChat";
import useUsers from "@/hooks/useUsers";
import useAutoScroll from "@/hooks/useAutoScroll";

const Chat = () => {
  // ⚠️ Replace this with Redux or auth context later
  const username = "Amit"; 

  const {
    messages,
    onlineUsers,
    usersTyping,
    joinRoom,
    leaveRoom,
    startPrivateChat,
    sendMessage,
    typing,
    joinedRoomId,
  } = useChat(username);

  const { users } = useUsers(username);

  const [text, setText] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const messageEndRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useAutoScroll({
    messages,
    typingUser: usersTyping,
    messageEndRef,
  });

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text);
    setText("");
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100">

      {/* LEFT SIDEBAR */}
      <aside className="w-[22%] min-w-[260px] bg-white/5 backdrop-blur-xl border-r border-white/10 flex flex-col">

        {/* Profile header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center gap-3">
          <button
            onClick={() => setProfileOpen(true)}
            className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs"
          >
            {username.slice(0, 2).toUpperCase()}
          </button>

          <div>
            <div className="text-sm font-medium">{username}</div>
            <div className="text-xs text-slate-400">
              {onlineUsers.includes(username) ? "Online" : "Offline"}
            </div>
          </div>
        </div>

        {/* Users list */}
        <div className="flex-1 overflow-y-auto">
          {users.map((user) => (
            <div
              key={user}
              onClick={() => startPrivateChat(user)}
              className={`px-6 py-4 cursor-pointer transition ${
                joinedRoomId.includes(user)
                  ? "bg-white/10"
                  : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center text-xs">
                  {user.slice(0, 2).toUpperCase()}
                </div>

                <div className="flex-1">
                  <div className="text-sm font-medium">{user}</div>
                  <div className="text-xs text-slate-400">
                    {onlineUsers.includes(user) ? "Online" : "Offline"}
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
        <div className="px-8 py-6 border-b border-white/10">
          <div className="text-sm font-medium">
            {joinedRoomId ? joinedRoomId : "Select a chat"}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-8 py-6 overflow-y-auto">
          {messages.length === 0 && joinedRoomId && (
            <div className="text-center text-slate-500 text-sm">
              No messages yet
            </div>
          )}

          <div className="space-y-4">
            {messages.map((m, i) => {
              const prev = messages[i - 1];
              const grouped = prev && prev.sender === m.sender;
              const isMe = m.sender === username;

              return (
                <div
                  key={m.id}
                  className={`flex ${isMe ? "justify-end" : "justify-start"} ${
                    grouped ? "mt-1" : "mt-4"
                  }`}
                >
                  <div
                    className={`max-w-[55%] px-4 py-2 text-sm ${
                      isMe
                        ? "bg-indigo-400/20 rounded-2xl rounded-tr-md"
                        : "bg-white/8 rounded-2xl rounded-tl-md"
                    }`}
                  >
                    <div>{m.text}</div>

                    <div className="text-[10px] text-slate-400 mt-1 flex justify-end">
                      {m.status}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Typing Indicator */}
          {usersTyping.length > 0 && (
            <div className="text-xs text-slate-400 mt-4">
              {usersTyping.join(", ")} typing...
            </div>
          )}

          <div ref={messageEndRef} />
        </div>

        {/* Input */}
        {joinedRoomId && (
          <div className="px-8 py-4 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
              <input
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  typing();
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSend();
                }}
                placeholder="Type a message"
                className="flex-1 bg-transparent outline-none text-sm text-slate-100 placeholder:text-slate-400"
              />

              <button
                onClick={handleSend}
                className="px-4 py-1 rounded-full bg-white/15 text-xs hover:bg-white/20 transition"
              >
                Send
              </button>
            </div>
          </div>
        )}
      </main>

      {/* PROFILE OVERLAY */}
      {profileOpen && (
        <div
          onClick={() => setProfileOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}
    </div>
  );
};

export default Chat;