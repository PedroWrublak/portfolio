import { X } from "lucide-react";
import { motion } from "motion/react";
import { Luckiest_Guy } from "next/font/google";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    trasition: {
      staggerChildren: 3,
    },
  },
};

const menuItemsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

type SideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

function SideBar({ isOpen, onClose }: SideBarProps) {
  return (
    <div
      className={`fixed  z-40  bg-white  shadow-lg transition-transform duration-300  ${
        luckiestGuy.className
      } 
        
        md:top-0 md:left-0 md:h-full md:w-[30%] translate-x-0
        ${isOpen ? "translate-x-0" : "md:-translate-x-full"}
        
        top-0 left-0 w-full h-[50%]
        ${isOpen ? "translate-y-0" : "-translate-y-full"}

        md:translate-y-0
        
        `}
    >
      <motion.ul
        variants={menuVariants}
        initial="hidden"
        animate="show"
        className={`mt-70 px-30 space-y-10 flex flex-col justify-cente text-3xl md:text-5xl text-blue-950 select-none`}
      >
        <motion.li
          variants={menuItemsVariants}
          onClick={onClose}
          className="hover:text-blue-400 cursor-pointer"
        >
          <a href="#home">Home</a>
        </motion.li>
        <motion.li
          variants={menuItemsVariants}
          onClick={onClose}
          className="hover:text-blue-400 cursor-pointer"
        >
          <a href="#projects">Projects</a>
        </motion.li>
        <motion.li
          variants={menuItemsVariants}
          onClick={onClose}
          className="hover:text-blue-400 cursor-pointer"
        >
          <a href="#projects">Contact</a>
        </motion.li>
      </motion.ul>
    </div>
  );
}

export default SideBar;
