import React from "react";

const Settings = () => {
  return (
    <div className="
      h-screen w-screen
      bg-gradient-to-b from-slate-900 to-slate-950
      text-slate-100
      flex items-center justify-center
      px-6
    ">
      <div className="
        w-full max-w-xl
        bg-white/5 backdrop-blur-xl
        border border-white/10
        rounded-2xl
        p-8
      ">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-xl font-medium tracking-tight">
            Account settings
          </h1>
          <p className="mt-2 text-sm text-slate-400">
            Manage your account information and session.
          </p>
        </div>

        {/* Profile info */}
        <div className="space-y-4 mb-10">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-sm">
              AK
            </div>

            <div>
              <div className="text-sm font-medium">
                Amit Kumar
              </div>
              <div className="text-xs text-slate-400">
                amit@circlechat.app
              </div>
            </div>
          </div>
        </div>

        {/* Account section */}
        <div className="space-y-3 mb-10">
          <div className="text-sm font-medium">
            Account
          </div>

          <div className="
            flex items-center justify-between
            px-4 py-3
            rounded-xl
            bg-white/5
            border border-white/10
          ">
            <div>
              <div className="text-sm">
                Email address
              </div>
              <div className="text-xs text-slate-400">
                amit@circlechat.app
              </div>
            </div>

            <button
              disabled
              className="
                text-xs text-slate-500
                cursor-not-allowed
              "
            >
              Change
            </button>
          </div>
        </div>

        {/* Logout */}
        <div className="pt-6 border-t border-white/10">
          <button
            className="
              w-full
              px-4 py-3
              rounded-xl
              bg-white/10
              hover:bg-white/15
              text-sm
              transition
            "
            onClick={() => {
              // hook this to your auth logic later
              console.log("Logout clicked");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
