import { Luckiest_Guy } from "next/font/google";
import Image from "next/image";


const luckiestGuy = Luckiest_Guy({
  subsets: ["latin"],
  weight: "400",
});


function HomePage()  {
    return  (
        <section className="bg-blue-200 h-[100dvh] flex justify-center">
            <div className="flex flex-col justify-center">
                <h1 className={`${luckiestGuy.className} text-5xl`} >Hey, My name is Pedro</h1>
                <p className={`${luckiestGuy.className} text-2xl`}>I'm a software developer.</p>
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