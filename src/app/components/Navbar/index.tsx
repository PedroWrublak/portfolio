import { Menu, X } from "lucide-react";

import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

type NavBarProps = {

  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

function Navbar({ isSidebarOpen, toggleSidebar }: NavBarProps) {
  return (
    <header className="bg-amber-50 h-50">
      {/* Menu */}
      <nav>
        <div
          className="fixed top-20 left-30 flex items-center gap-2 z-50 hover:opacity-40 text-black"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <>
              <X className={`${luckiestGuy.className} w-6 h-6 text-2xl hover:opacity-40 text-gray-400 select-none cursor-pointer`} />
              <span
                className={`${luckiestGuy.className} text-2xl hover:opacity-40 text-gray-400 select-none cursor-pointer`}
              >Close</span>
            </>
          ) : (
            <>
              <Menu className="w-6 h-6" />
              <span
                className={`font-medium text-2xl select-none uppercase cursor-pointer ${luckiestGuy.className}`}
              >
                Menu
              </span>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
