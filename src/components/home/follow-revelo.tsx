import Link from "next/link";
import Image from "next/image";

export function FollowRevelo() {
  return (
    <>
      <Link
        href="https://www.instagram.com/rvloprod?igsh=OGp3Z3RuZTFqc2h5"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-center justify-center gap-2 absolute  -left-10 top-[144px]"
      >
        <span className="[writing-mode:vertical-rl] rotate-180 font-medium leading-5 text-base tracking-widest">
          Siga a Revelô no Instagram
        </span>
        <Image
          src={"/insta-left.png"}
          width={19}
          height={19}
          className="w-auto h-auto"
          alt="insta-logo"
        />
      </Link>
    </>
  );
}
