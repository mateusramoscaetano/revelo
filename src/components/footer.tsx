import { Instagram } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <>
      <footer className="flex-col lg:flex-row w-full px-[31px] sm:px-20 py-[70px] gap-x-[60px] justify-center min-h-[400px] bg-[#101010]">
        <div className="flex flex-col lg:flex-row gap-x-[60px] justify-center">
          <div className="flex justify-center w-full lg:max-w-[180px] items-center lg:items-start ">
            <LogoFooterSec />
          </div>

          <div className="w-full max-w-[779px]  flex gap-[60px] flex-col lg:flex-row">
            <OurPlaces />

            <div className="flex flex-col xl:flex-row w-full gap-[60px]">
              <TalkToUs />
              <Visit />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden w-full  items-center justify-center">
          <div className="text-xs w-full flex items-center justify-center tracking-widest mt-[58px]">
            {" "}
            Desenvolvido por
            <Image
              src={"/nestlab-logo.png"}
              width={58}
              height={14.16}
              className="w-auto h-auto ml-4 scale-150"
              alt="logo"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

function Visit() {
  return (
    <div className="space-y-4 w-full leading-[22px]">
      <div className="font-semibold text-base w-full whitespace-nowrap">
        Visite Nossos Outros Canais
      </div>

      <a
        href="https://www.instagram.com/rvloprod?igsh=OGp3Z3RuZTFqc2h5"
        target="_blank"
        rel="noreferrer"
        className="text-sm flex font-medium whitespace-nowrap"
      >
        <Instagram className="mr-2 size-5" /> Instagram
      </a>

      <div className="text-sm flex font-medium whitespace-nowrap">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 size-4"
        >
          <path
            d="M1.88371 0C-0.629172 0.0112954 -0.626637 3.82385 1.88371 3.83583C4.39038 3.82385 4.39314 0.0122175 1.88371 0Z"
            fill="white"
          />
          <path
            d="M3.53984 5.28809H0.227051V15.9298H3.53984V5.28809Z"
            fill="white"
          />
          <path
            d="M15.9951 10.1714C15.9916 10.0151 15.9863 9.85999 15.9785 9.70624C15.8489 7.11959 15.0714 4.92689 11.964 5.02463C10.3529 5.02463 9.27404 5.90637 8.83168 6.74384H8.78834V5.28811H5.61548V15.9298H8.92135V10.6659C8.92135 9.27816 9.18391 7.93401 10.9059 7.93401C12.6279 7.93401 12.6251 9.5209 12.6251 10.756V15.9298H16.0001V10.3883C16.0001 10.3883 15.9967 10.2436 15.9951 10.1714Z"
            fill="white"
          />
        </svg>
        Linkedin
      </div>
    </div>
  );
}

function TalkToUs() {
  return (
    <div className="space-y-4 w-full leading-[22px]">
      <span className="font-semibold text-base whitespace-nowrap">
        Quer Falar Com a Gente?
      </span>
      <div className="text-sm flex flex-col">
        <span className="font-semibold">Telefone</span>
        <span>41 9 8735-2716</span>
      </div>
      <div className="text-sm flex flex-col">
        <span className="font-semibold">E-mail</span>
        <span>fotografico@tagsa.com.br</span>
      </div>
    </div>
  );
}

function OurPlaces() {
  return (
    <div className="space-y-4 w-full leading-[22px] max-w-[250px]">
      <span className="font-semibold text-base">Nossas Sedes</span>
      <div className="text-sm flex flex-col">
        <span className="font-semibold">Hauze</span>
        <span>Rua Idelfonso Borba Cordeiro, 74</span>
        <span>Batel | Curitiba | Paraná</span>
        <span>CEP 80420-140</span>
      </div>
    </div>
  );
}

function LogoFooterSec() {
  return (
    <div className="flex flex-col w-full  items-center justify-center lg:max-w-[180px]">
      <Image
        src={"/logo.svg"}
        width={142}
        height={44.16}
        alt="logo"
        className="mb-[86px] w-auto"
      />
      <div className="text-xs w-full  lg:flex items-center justify-center tracking-widest hidden">
        {" "}
        Desenvolvido por
        <Image
          src={"/nestlab-logo.png"}
          width={58}
          height={14.16}
          className="w-auto h-auto ml-4 scale-150"
          alt="logo"
        />
      </div>
    </div>
  );
}
