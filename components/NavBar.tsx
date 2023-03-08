import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function NavBar() {
  return (
   <div className="flex justify-end bg-slate-300 text-2xl text-black-400">
    <div className="px-2 mx-4 my-6 hover:font-bold">Hello World from Flexbox</div>
    <div className="px-2 mx-4 my-6 hover:font-bold">PIAIC petriotic team</div>
    <div className="px-2 mx-4 my-6 hover:font-bold">Learning flexbox by Sir Adil/ Miss Hira</div>
    </div>
  );
}
