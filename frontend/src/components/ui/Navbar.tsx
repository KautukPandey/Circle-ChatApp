import { useState } from "react";

const navItems = ["Home", "Docs"];

const Navbar = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full flex justify-center mt-8">
      <div
        className="
          flex items-center
          rounded-full
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          px-8 py-3
          shadow-md
        "
      >
        {/* Brand */}
        <span className="text-white font-semibold tracking-wide mr-8">
          CircleChat
        </span>

        {/* Nav Items */}
        <div className="flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
                relative px-6 py-2 text-sm font-medium
                rounded-full
                transition-all duration-300
                ${
                  active === item
                    ? "bg-white/65 text-black"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }
              `}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
