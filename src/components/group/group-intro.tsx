import Link from "next/link";
import { MainButton } from "../ui/main-button";
import { SectionTitle } from "../ui/section-title";

export function GroupIntro() {
  return (
    <>
      <div className="w-full max-w-[357px] lg:max-w-[1116px] min-h-full flex flex-col items-start justify-center  px-5 lg:px-0  gap-[30px] mb-[157px]">
        <div className="pb-2  flex flex-col items-start  justify-start ">
          <SectionTitle title="O Grupo" className="mb-0" />
        </div>

        <div className="text-lg md:text-2xl max-w-[998px]">
          Reunimos em um só lugar: clube de benefícios, app de pagamentos <br />{" "}
          e arrecadação, ticketeira, produtora audiovisual, marketplace e festa.
          Muita festa.
        </div>

        <Link
          href={"https://grupoatmosfera.com.br"}
          target="_blank"
          rel="noreferrer"
        >
          <MainButton label="Conheça" />
        </Link>
      </div>
    </>
  );
}
