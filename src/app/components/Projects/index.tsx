import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});

function Projects() {
  return (
    <section
      id="projects"
      className="bg-blue-400 h-[100dvh] flex flex-col items-center border-x-20 select-none"
    >
      <div className="flex flex-col w-[100%] items-center mt-30 text-amber-300">
        <h1 className={`${luckiestGuy.className} text-7xl`}>My Projects</h1>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="mt-50 flex items-center">
          <div>
            <h1 className={`${luckiestGuy.className} text-4xl`}>ON Móveis</h1>
            <p className="text-2xl">
              A landing page for a modern <br />
              fortinure company.
            </p>
          </div>
          <div>
            <Image
              src={"/assets/on-moveis.png"}
              alt="Profile picture"
              width={0}
              height={0}
              sizes="100vw"
              className="w-120 ml-70 rounded-xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
