import Image from "next/image";
import { Inter } from "next/font/google";
import TeamMember from "./TeamMember";
const inter = Inter({ subsets: ["latin"] });

export default function Subscribe() {
  return (

    <div className="flex justify-center">
    <div className="flex justify-center w-9/12">
        <input type="Email" className="flex flex-grow border-black border-2" placeholder="Email" name="" id="" />
        <button className="bg-blue-500 px-6 py-4 text-gray-200 rounded-md">Subscribe</button>
    </div>
    </div>
  );
}
