import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";

const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});


function Projects () {
    return (
        <section id="projects" className="bg-blue-200 h-[100dvh] flex justify-center border-x-20 select-none">
            <div className="flex flex-col mt-30 text-blue-950">
                <h1 className={`${luckiestGuy.className} text-7xl`} >My Projects</h1>
            </div>
        </section>
    )
}

export default Projects;