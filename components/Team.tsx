import Image from "next/image";
import { Inter } from "next/font/google";
import TeamMember from "./TeamMember";
const inter = Inter({ subsets: ["latin"] });

export default function Team() {
  return (
    <div className="flex justify-center flex-wrep">
    
      <TeamMember />
      <TeamMember />
      <TeamMember />
      <TeamMember />
      
      </div>
  );
}
