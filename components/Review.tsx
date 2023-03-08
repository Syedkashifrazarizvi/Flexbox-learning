import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TeamMember() {
  return (

    
    <div className="flex flex-col shadow-xl bg-gray-200 w-96 p-8 rounded-xl mt-20 mx-auto; ">
          <img src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg" alt="Quote icon" className="h-10 w-10 mb-12 "></img>
          <p className="mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque aliquid debitis quos dolorem possimus laboriosam voluptates illum optio rerum facere consequuntur laudantium ullam, consectetur, architecto doloremque. Delectus ullam dolor nulla.</p>
          <p className="font-bold">Sir Zia</p>
    </div>
    
  );
}
