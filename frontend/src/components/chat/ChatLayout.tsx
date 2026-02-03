import ConversationList from "./ConversationList";
import MessagePanel from "./MessagePanel";
import ChatDetails from "./ChatDetails";

const ChatLayout = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 flex overflow-hidden">
      
      {/* Left */}
      <aside className="w-[22%] min-w-[260px] bg-white/5 backdrop-blur-xl border-r border-white/10">
        <ConversationList />
      </aside>

      {/* Center */}
      <main className="flex-1 flex flex-col bg-white/7 backdrop-blur-2xl">
        <MessagePanel />
      </main>

      {/* Right */}
      <aside className="w-[24%] min-w-[280px] bg-white/5 backdrop-blur-xl border-l border-white/10 hidden lg:block">
        <ChatDetails />
      </aside>

    </div>
  );
};

export default ChatLayout;
