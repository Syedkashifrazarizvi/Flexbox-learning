import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function TeamMember() {
  return (
    <div className="flex m-12 items-end">
      <img
        src="https://via.placeholder.com/150"
        alt="user avatar"
        className="rounded-r-full "
      />
      <div className="ml-6">
      <p className="text-2xl font-bold">MAJ_PK</p>
      <p className="text-lg">Title</p>
      </div>
    </div>
  );
}
