import { SectionTitle } from "../ui/section-title";

export function HowWeDoTopSection() {
  return (
    <>
      <div className="mb-24 lg:w-full px-5 sm:px-0 max-w-[1116px] ">
        <div className="pb-2  flex flex-col items-start  justify-start">
          <SectionTitle title="Como fazemos" />
        </div>
        <div className="text-lg lg:text-2xl max-w-[357px] ">
          Nosso método foi desenvolvido minuciosamente para entregar o que há de
          melhor em fotografia, tratamento e atendimento.
        </div>
      </div>
    </>
  );
}
