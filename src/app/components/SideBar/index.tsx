import { X } from "lucide-react";
import { Luckiest_Guy } from 'next/font/google';

const luckiestGuy = Luckiest_Guy({
    subsets: ['latin'],
    weight: '400',
  });


type SideBarProps = {
    isOpen: boolean;
    onClose: () => void;
}

function SideBar({ isOpen, onClose }: SideBarProps) {
    return (
        <div
        className={`fixed top-0 left-0 h-full w-[30%] bg-white  shadow-lg transform transition-transform duration-300 z-40 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <div className="p-7 flex justify-end items-center">
                <button onClick={onClose} className={`${luckiestGuy.className} text-2xl hover:opacity-40 text-gray-400 select-none cursor-pointer`}>Close</button>
            </div>
            <ul className={`mt-50 px-20 space-y-10 flex flex-col justify-center ${luckiestGuy.className} text-black select-none`}>
                <li className="text-5xl hover:text-blue-400 cursor-pointer">Home</li>
                <li className="text-5xl hover:text-blue-400 cursor-pointer">Projects</li>
                <li className="text-5xl hover:text-blue-400 cursor-pointer">Contact</li>
            </ul>
        </div>
    );
}

export default SideBar;