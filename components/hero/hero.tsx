import Marquee from "react-fast-marquee";
import { Button } from "../ui/button";
import CarouselContainer from "./carousel-container";

const Hero = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center  my-10 overflow-hidden">
      <div className="h-[15rem] w-[10rem] blur-3xl bg-[#2f2b81] absolute right-[22rem] z-0 top-[10rem] rotate-45"></div>
      <article className="flex justify-center items-center flex-col gap-8 text-[#e0e7ff] ">
        <h1 className="font-extrabold text-6xl ">
          Contact Forms for Modern Websites
        </h1>
        <p className="text-[1.5rem] w-[38rem] text-center text-[#acb3c0]  ">
          Receive your html contact form submissions directly in your email
          inbox using our contact form api service without any server or backend
          code. Its free!
        </p>
        <Button variant={"gradient"} size={"lg"}>
          Create your Access Key
        </Button>
        <p className="text-sm text-[#acb3c0] translate-y-[-1.2rem]">
          No Signup required
        </p>
      </article>
      <p className="text-gray-300 mt-10">Works with any Technologies</p>
      <CarouselContainer length={14} set={2} direction="left" />
      <CarouselContainer length={11} set={1} direction="right" />
    </section>
  );
};

export default Hero;
