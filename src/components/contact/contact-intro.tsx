import Image from "next/image";

interface IContactIntroProps {}

export function ContactIntro({}: IContactIntroProps) {
  return (
    <>
      <div className="w-full mb-[60px]">
        <div className="pb-2  flex flex-col items-start  justify-start mb-[30px]">
          <div className=" text-xl font-semibold flex items-center">
            Fale com a gente
            <div className="ml-2 h-[1px] w-[62px] bg-red-500"></div>
          </div>
        </div>

        <div className="text-2xl tracking-[2.4px] max-w-[452px]">
          Preencha o formulário ao lado ou entre em contato via WhatsApp
        </div>

        <div className="w-full flex gap-3 mt-[21px]">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/5541987352716"
            className="rounded-full flex items-center justify-center bg-revelo w-[53px] h-[53px]"
          >
            <Image
              src={"/icons/whats-logo.svg"}
              width={26.5}
              height={26.5}
              alt="whatsapp"
            />
          </a>
          <div className="flex items-center justify-center">
            <span>41 9 8735-2716</span>
          </div>
        </div>

        <div className="w-full flex gap-3 mt-[21px]">
          <a
            target="_blank"
            href="mailto:contato@grupoatmosfera.com.br"
            className="rounded-full flex items-center justify-center bg-revelo w-[53px] h-[53px]"
            rel="noreferrer"
          >
            <Image
              src={"/icons/mail-logo.png"}
              width={26.5}
              height={26.5}
              alt="mail"
            />
          </a>
          <div className="flex items-center justify-center">
            <span>contato@grupoatmosfera.com.br</span>
          </div>
        </div>
      </div>
    </>
  );
}
