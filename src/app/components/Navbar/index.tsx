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
    <header className="bg-blue-100 h-[10rem] py-[4rem] px-[7rem] border-x-20 border-t-20">
      {/* Menu */}
      <nav className="flex justify-between items-center">
        <div
          className="z-50 cursor-pointer select-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <div className="flex items-center gap-2 hover:scale-x-130 transition-transform ease-in-out text-blue-950 ">
              <X className={`${luckiestGuy.className} w-6 h-6 text-2xl `} />
              <span className={`${luckiestGuy.className} uppercase text-2xl`}>
                Close
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 hover:scale-x-130 transition-transform ease-in-out text-blue-950">
              <Menu className="w-6 h-6" />
              <span
                className={`font-medium text-2xl uppercase  ${luckiestGuy.className}`}
              >
                Menu
              </span>
            </div>
          )}
        </div>

        {/* Hire me button */}
        <div className="z-50 cursor-pointer select-none">
          <a
            href="#contact"
            className={`text-blue-950 inline-block hover:scale-x-130 transition-transform ease-in-out ${luckiestGuy.className} text-2xl font-bold uppercase`}
          >
            Contact me
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
