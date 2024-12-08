import Image from "next/image";

export function X() {
  return (
    <>
      <div className="w-12 h-12">
        <Image src={"/icons/x.svg"} width={31} height={31} alt="fechar" />
      </div>
    </>
  );
}
