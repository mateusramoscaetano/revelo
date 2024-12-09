import instaLeft from "../../../public/insta-left.png";
import Image from "next/image";

interface IFollowReveloProps {}

export function FollowRevelo({}: IFollowReveloProps) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 absolute  -left-10 top-[144px]">
        <span className="[writing-mode:vertical-rl] rotate-180 font-medium leading-5 text-base tracking-widest">
          Siga a Revelô no Instagram
        </span>
        <Image
          src={instaLeft}
          className="  w-[19px] h-[19px] "
          alt="insta-logo"
        />
      </div>
    </>
  );
}
