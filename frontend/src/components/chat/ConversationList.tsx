const conversations = [
  { id: 1, name: "Product Team", last: "Assets uploaded", active: true },
  { id: 2, name: "Fiona Marshall", last: "Can you review this?" },
  { id: 3, name: "Will Roberts", last: "Thanks!" },
  { id: 4, name: "Design Sync", last: "Meeting at 5?" },
];

const ConversationList = () => {
  return (
    <div className="h-full flex flex-col">
      
      <div className="px-6 py-5 text-base font-medium border-b border-white/10">
        Messages
      </div>

      <div className="flex-1 overflow-y-auto">
        {conversations.map(c => (
          <div
            key={c.id}
            className={`
              px-6 py-4 cursor-pointer transition
              ${c.active
                ? "bg-white/10"
                : "hover:bg-white/5"}
            `}
          >
            <div className="text-sm font-medium">
              {c.name}
            </div>
            <div className="text-xs text-slate-400 truncate mt-1">
              {c.last}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default ConversationList;
