import Image from "next/image";
import { Inter } from "next/font/google";
import TeamMember from "./TeamMember";
const inter = Inter({ subsets: ["latin"] });
import Review from "./Review";

export default function Reviews() {
  return (
    <div className="flex justify-center flex-wrep">
    
      <Review />
      <Review />
      <Review />
 
      
      </div>
  );
}
