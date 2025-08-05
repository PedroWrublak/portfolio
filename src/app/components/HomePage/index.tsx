import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";


const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});


function HomePage()  {
    return  (
        <section className="bg-blue-200 h-[100dvh] flex justify-center border-x-20 border-b-20 select-none">
            <div className="flex flex-col justify-center text-blue-950">
                <h1 className={`${luckiestGuy.className} text-7xl`} >Hey, My <br/> name is Pedro</h1>
                <p className={`${luckiestGuy.className} text-3xl`}>I'm a software developer.</p>
            </div>
            <div className="flex flex-col justify-center ml-30">
                <Image
                    src={"/assets/profile-picture.JPEG"}
                    alt="Profile picture"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-60 rounded-xl border-4 border-white"
                />
            </div>
        </section>
    )
}

export default HomePage;