import { motion } from "motion/react";
import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

const menuVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    trasition: {
      staggerChildren: 0.7,
    },
  },
};

const menuItemsVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

function HomePage() {
  return (
    <section className="bg-blue-200 h-[100dvh] flex justify-center border-x-20 border-b-20 select-none">
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate="show"
        id="home"
        className="flex flex-col justify-center text-blue-950"
      >
        <motion.h1
          variants={menuItemsVariants}
          className={`${luckiestGuy.className} text-7xl`}
        >
          Hey, My <br /> name is Pedro
        </motion.h1>
        <motion.p variants={menuItemsVariants} className={`text-3xl`}>
          I'm a software developer.
        </motion.p>
      </motion.div>
      <div className="flex flex-col justify-center ml-30">
        <Image
          src={"/assets/profile-picture.JPEG"}
          alt="Profile picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-65 rounded-xl border-4 border-white"
        />
      </div>
    </section>
  );
}

export default HomePage;
