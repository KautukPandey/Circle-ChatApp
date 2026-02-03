const ChatDetails = () => {
  return (
    <div className="h-full p-6 space-y-8">
      
      <div>
        <div className="text-sm font-medium mb-3">
          Shared media
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-20 rounded-lg bg-white/10" />
          <div className="h-20 rounded-lg bg-white/10" />
        </div>
      </div>

      <div>
        <div className="text-sm font-medium mb-3">
          Shared files
        </div>
        <div className="text-xs text-slate-400 space-y-1">
          <div>project-brief.pdf</div>
          <div>assets.zip</div>
        </div>
      </div>

    </div>
  );
};

export default ChatDetails;
