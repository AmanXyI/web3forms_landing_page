import Image from "next/image";
import Marquee from "react-fast-marquee";

interface CarouselContainerProps {
  length: number;
  set: number;
  direction: string;
}

const CarouselContainer = ({
  length,
  direction,
  set,
}: CarouselContainerProps) => {
  return (
    <div className="flex w-[80rem] relative mt-14 ">
      <div className="bg-[#0f172a] h-[10rem] w-[10rem] absolute z-20 blur-lg translate-x-[-5rem] translate-y-[-2rem]"></div>
      <div className="bg-[#0f172a] h-[10rem] w-[10rem] absolute z-20 right-0 translate-x-[3rem] translate-y-[-2rem] blur-lg"></div>
      <Marquee speed={120} autoFill direction={direction}>
        {Array.from({ length }, (x, i) => {
          return (
            <Image
              className="mr-10"
              src={`/logos/set${set}/${i + 1}.svg`}
              width={60}
              height={10}
              alt="1"
              key={i}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

export default CarouselContainer;
