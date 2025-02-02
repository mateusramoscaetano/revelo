import Image from "next/image";
import { SectionTitle } from "../ui/section-title";

export function ContactIntro() {
  return (
    <>
      <div className="w-full mb-[60px]">
        <div className="pb-2  flex flex-col items-start  justify-start">
          <SectionTitle title="Fale com a gente" />
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
            <p className="truncate max-w-[200px] 370:overflow-visible 370:max-w-full">
              contato@grupoatmosfera.com.br
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
