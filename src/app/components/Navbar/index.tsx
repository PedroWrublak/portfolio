import { Menu } from "lucide-react";

import { Luckiest_Guy } from 'next/font/google';

const luckiestGuy = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400',
  });


type NavBarProps = {
    onMenuClick: () => void;
    isSidebarOpen: boolean;
}

function Navbar({ onMenuClick, isSidebarOpen }: NavBarProps) {
  return (
    <header className="bg-amber-50 h-50">
      {/* Menu */}
      <nav>
        <div className="fixed top-20 right-30 flex items-center gap-2 z-50 hover:opacity-40 text-black"
        onClick={onMenuClick}>
           
                <Menu className="w-6 h-6" />
                <span className={`font-medium text-2xl select-none uppercase cursor-pointer ${luckiestGuy.className}`}>Menu</span>
           
          
          
          
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
