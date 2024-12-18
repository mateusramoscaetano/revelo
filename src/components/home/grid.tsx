import Image from "next/image";
import { ImageSwitcher } from "../image-switcher";
import { FollowRevelo } from "./follow-revelo";
import { GridSquare } from "./square";
import { Vetor } from "./vetor/vetor";

const images1 = ["/image-1-1.png", "/img-1-2.png"];

export function Grid() {
  return (
    <div className="hidden 1730:grid  1730:grid-rows-3 1730:grid-cols-4 w-full relative">
      <FollowRevelo />
      <GridSquare
        name="1"
        img={<ImageSwitcher image1={images1[0]} image2={images1[1]} />}
      />
      <GridSquare
        name="2"
        img={<Image src="/img-2.png" width={388} height={388} alt="" />}
      />
      <GridSquare
        name="3"
        img={
          <Image
            src="/img-3.png"
            width={388}
            height={388}
            alt=""
            className="scale-[140%] pl-4"
          />
        }
        className="bg-revelo overflow-hidden"
      />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" />
      <GridSquare name="6" img="" className="" />
      <GridSquare
        name="7"
        img={<Vetor />}
        className="1730:col-span-2 w-full bg-white"
      />
      <GridSquare name="8" img="" className="1730:row-start-3" />
      <GridSquare name="9" img="" className="1730:row-start-3" />
      <GridSquare name="10" img="" className="1730:row-start-3" />
      <GridSquare name="11" img="" className="1730:row-start-3" />
    </div>
  );
}
export function GridXl() {
  return (
    <div className="hidden xl:grid xl:grid-cols-3 1730:hidden  w-full relative">
      <FollowRevelo />
      <GridSquare name="1" img="" />
      <GridSquare name="2" img="" />
      <GridSquare name="3" img="" />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" className="col-span-2 w-full" />
      <GridSquare name="6" img="" className="" />
      <GridSquare name="7" img="" className="" />
      <GridSquare name="8" img="" className="" />
    </div>
  );
}
export function GridMd() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 xl:hidden   w-full relative">
      <FollowRevelo />
      <GridSquare name="1" img="" />
      <GridSquare name="2" img="" />
      <GridSquare name="3" img="" className="col-span-2 w-full" />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" />
    </div>
  );
}
