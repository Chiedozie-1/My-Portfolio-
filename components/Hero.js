import Image from "next/image";
import dozie from "../public/dozie.png"

export default function Home() {
  return (
    <div className="  gap-8 py-48 grid items-center justify-center lg:flex lg:gap 4">        
            <p className="items-center justify-center">
            <Image  src={dozie} 
                    alt="Dozie" 
                    className="justify-center items-center rounded-3xl h-64 w-60 md:h-80 mx-20 lg:mx-48 " />
            </p>

            <div className="text-center">
                <h1 className="text-xl font-bold text-purple-700 mb-4 md:text-4xl lg:text-6xl ">
                     I am CHIEDOZIE NKULO!
                </h1>

                <p className="text-lg text-gray-500 md:text-3xl lg:text-5xl">
                    I am a Web Developer 
                </p>

                <p className="text-lg text-gray-900 md:text-3xl lg:text-5xl">
                    codenic
                </p>
            </div> 
    </div>
  );
}