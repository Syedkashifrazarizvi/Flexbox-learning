import Image from "next/image";
import { Inter } from "next/font/google";
import NavBar from "@/components/NavBar";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Subscribe from "@/components/Subscribe";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <NavBar />
  <Team />
  <Reviews />
  <Subscribe />
 
  </>
  );
}
