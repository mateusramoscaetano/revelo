import Image from "next/image";

import { FollowRevelo } from "./follow-revelo";
import { GridSquare } from "./square";
import { Vetor } from "./vetor/vetor";
import { ImageSwitcher } from "../image-switcher";

export function Grid() {
  return (
    <div className="hidden 1730:grid  1730:grid-rows-3 1730:grid-cols-4 w-full relative">
      <FollowRevelo />
      <GridSquare
        name="1"
        img={
          <ImageSwitcher image1={"/image-1-1.png"} image2={"/img-1-2.png"} />
        }
      />
      <GridSquare
        name="2"
        img={
          <>
            <Image src="/revelamos_web.png" width={388} height={388} alt="" />
            <div className="absolute shadow-lg bottom-[40px]  right-0 h-0.5 w-[140px] bg-white"></div>
          </>
        }
        className="relative"
      />
      <GridSquare
        name="3"
        img={
          <ImageSwitcher
            image1={"/img-34.jpg"}
            image2={"/img-32.png"}
            className=""
            className2=""
            hasLineWeb
            horizontalLineClassName="w-40"
            verticalLineClassName="left-40"
            redLineClassName="left-40"
          />
        }
        className=""
      />
      <GridSquare
        name="4"
        img={<ImageSwitcher image1={"/img-4.png"} image2={"/img-4-2.png"} />}
      />
      <GridSquare
        name="5"
        img={<ImageSwitcher image1={"/img-5.png"} image2={"/img-5-2.png"} />}
      />
      <GridSquare
        name="6"
        img={
          <ImageSwitcher
            image1={"/img-6.png"}
            image2={"/img-3.png"}
            className2="scale-[108%] pl-[12px]"
          />
        }
        className="bg-revelo overflow-hidden"
      />
      <GridSquare
        name="7"
        img={<Vetor />}
        className="1730:col-span-2 w-full bg-white"
      />
      <GridSquare
        name="8"
        img={
          <ImageSwitcher
            image1={"/img-7.png"}
            image2={"/img-6-2.png"}
            className="scale-[140%] pb-[48px] pl-8"
          />
        }
        className="1730:row-start-3 bg-revelo overflow-hidden"
      />
      <GridSquare
        name="9"
        img={<ImageSwitcher image1={"/img-8.png"} image2={"/img-7-2.png"} />}
        className="1730:row-start-3"
      />
      <GridSquare
        name="10"
        img={
          <ImageSwitcher
            image1={"/img-9.png"}
            image2={"/img-7.png"}
            className2="scale-[140%] pb-[48px] pl-8"
          />
        }
        className="1730:row-start-3 bg-revelo overflow-hidden"
      />
      <GridSquare
        name="11"
        img={<ImageSwitcher image1={"/img-10.png"} image2={"/img-8-2.png"} />}
        className="1730:row-start-3"
      />
    </div>
  );
}
export function GridXl() {
  return (
    <div className="hidden xl:grid xl:grid-cols-3 1730:hidden  w-full relative">
      <FollowRevelo />
      <GridSquare
        name="1"
        img={
          <ImageSwitcher image1={"/image-1-1.png"} image2={"/img-1-2.png"} />
        }
      />
      <GridSquare
        name="2"
        img={
          <>
            <Image src="/revelamos_web.png" width={388} height={388} alt="" />
            <div className="absolute shadow-lg bottom-[40px]  right-0 h-0.5 w-[140px] bg-white"></div>
          </>
        }
        className="relative"
      />
      <GridSquare
        name="3"
        img={
          <ImageSwitcher
            image1={"/img-34.jpg"}
            image2={"/img-32.png"}
            className="w-[388px] h-[388px]"
            className2=""
            hasLineWeb
            horizontalLineClassName="w-40"
            verticalLineClassName="left-40"
            redLineClassName="left-40"
          />
        }
        className=" "
      />
      <GridSquare
        name="4"
        img={
          <ImageSwitcher
            image1={"/img-6.png"}
            image2={"/img-3.png"}
            className2="scale-[108%] pl-[12px]"
          />
        }
        className="bg-revelo overflow-hidden"
      />
      <GridSquare
        name="5"
        img={<Vetor />}
        className="col-span-2 w-full bg-white"
      />
      <GridSquare
        name="5"
        img={<ImageSwitcher image1={"/img-5.png"} image2={"/img-5-2.png"} />}
      />
      <GridSquare
        name="7"
        img={<ImageSwitcher image1={"/img-8.png"} image2={"/img-7-2.png"} />}
        className=""
      />
      <GridSquare
        name="8"
        img={<ImageSwitcher image1={"/img-10.png"} image2={"/img-8-2.png"} />}
        className=""
      />
    </div>
  );
}
export function GridMd() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 xl:hidden   w-full relative">
      <FollowRevelo />
      <GridSquare
        name="1"
        img={<ImageSwitcher image1={"/img-21.png"} image2={"/img-7-2.png"} />}
      />
      <GridSquare
        name="2"
        img={
          <ImageSwitcher
            image1={"/img-3.png"}
            image2={"/img-20.png"}
            className="scale-[108%] pl-[12px]"
          />
        }
        className="bg-revelo overflow-hidden"
      />
      <GridSquare
        name="3"
        img={
          <>
            <Image
              src="/revelamos_web.png"
              width={388}
              height={388}
              alt=""
              className="pt-[2px]"
            />
            <div className="absolute shadow-lg bottom-[28px] 370:bottom-10 right-0 h-0.5 w-[130px] bg-white"></div>
          </>
        }
        className=" relative overflow-hidden"
      />
      <GridSquare
        name="4"
        img={
          <ImageSwitcher
            image1={"/img-31.png"}
            image2={"/img-6-2.png"}
            className=""
            hasLineWeb
          />
        }
        className=""
      />
      <GridSquare name="3" img={<Vetor />} className="col-span-2 w-full" />
      <GridSquare
        name="4"
        img={
          <ImageSwitcher
            image1={"/img-7.png"}
            image2={"/img-9.png"}
            className="scale-[140%] pb-[48px] pl-8"
          />
        }
        className="1730:row-start-3 bg-revelo overflow-hidden"
      />
      <GridSquare
        name="5"
        img={<ImageSwitcher image1={"/img-8-2.png"} image2={"/img-4.png"} />}
      />
      <GridSquare
        name="6"
        img={<ImageSwitcher image1={"/image-1-1.png"} image2={"/img-10.png"} />}
      />
      <GridSquare
        name="7"
        img={<Image src={"/img-5.png"} width={388} height={388} alt="" />}
      />
    </div>
  );
}
export function GridSm() {
  return (
    <div className="grid lg:hidden lg:grid-cols-2   w-full relative">
      <GridSquare
        name="1"
        img={<ImageSwitcher image1={"/img-11.png"} image2={"/img-7-2.png"} />}
        className="w-full h-[200px] "
      />
      <GridSquare
        name="2"
        img={
          <ImageSwitcher
            image1={"/img-34.jpg"}
            image2={"/img-32.png"}
            className2=""
          />
        }
        className="bg-revelo overflow-hidden w-full h-[200px] "
      />
      <GridSquare
        name="3"
        img={
          <>
            <Image src="/revelamos.png" width={200} height={200} alt="" />
            <div className="absolute shadow-lg bottom-[28px] 370:bottom-5 left-12 h-0.5 w-[160px] bg-white"></div>
          </>
        }
        className="w-full  h-[200px] bg-[#121212] relative"
      />
      <GridSquare
        name="4"
        img={
          <ImageSwitcher
            image1={"/img-30.png"}
            image2={"/img-6-2.png"}
            hasLineMobile
          />
        }
        className="w-full h-[200px] "
      />
      <GridSquare
        name="5"
        img={<Vetor className="scale" />}
        className="col-span-2 w-full max-w-[400px] bg-white h-[200px] relative"
      />
      <GridSquare
        name="6"
        img={
          <ImageSwitcher
            image1={"/img-7.png"}
            image2={"/img-9.png"}
            className="scale-[140%] pb-6 pl-4 "
          />
        }
        className="1730:row-start-3 bg-revelo overflow-hidden w-full h-[200px]"
      />
      <GridSquare
        name="7"
        img={<ImageSwitcher image1={"/img-13.png"} image2={"/img-4.png"} />}
        className="w-full h-[200px] "
      />
      <GridSquare
        name="8"
        img={<ImageSwitcher image1={"/img-14.png"} image2={"/img-4.png"} />}
        className="w-full h-[200px] "
      />
      <GridSquare
        name="9"
        img={<Image src={"/img-17.png"} width={200} height={200} alt="" />}
        className="w-full h-[200px] bg-[#d9d9d9]"
      />
    </div>
  );
}
