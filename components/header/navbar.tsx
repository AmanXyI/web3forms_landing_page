import { FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import Image from "next/image";
const links = ["Features", "Form Templates", "Pricing", "Blog", "Docs"];
const Navbar = () => {
  return (
    <nav className="flex justify-around h-[8rem] items-center z-30 ">
      {/* <div className=" w-10 h-10 bg-white"></div> */}
      <Image src="/logo.png" alt="1" width={250} height={250} />
      <div className="hidden lg:block">
        {links.map((link, index) => {
          return (
            <span
              className="cursor-pointer mr-[2.5rem] text-gray-300 transition-all hover:text-[#6366f1]"
              key={index}
            >
              {link}
            </span>
          );
        })}
        <Button variant={"primary"}>Help & Support</Button>
      </div>
      <FaBars className="lg:hidden" />
    </nav>
  );
};

export default Navbar;
