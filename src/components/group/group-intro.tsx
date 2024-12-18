import { MainButton } from "../ui/main-button";

interface IGroupIntroProps {}

export function GroupIntro({}: IGroupIntroProps) {
  return (
    <>
      <div className="w-full max-w-[357px] lg:max-w-full min-h-full flex flex-col items-start justify-start px-5 lg:px-20 2xl:px-[310px] gap-[30px] mb-[157px]">
        <div className="pb-2  flex flex-col items-start  justify-start ">
          <div className=" text-xl font-semibold flex items-center">
            O grupo
            <div className="ml-2 h-0.5 w-[62px] bg-red-500"></div>
          </div>
        </div>

        <div className="text-lg md:text-2xl max-w-[998px]">
          Reunimos em um só lugar: clube de benefícios, app de pagamentos <br />{" "}
          e arrecadação, ticketeira, produtora audiovisual, marketplace e festa.
          Muita festa.
        </div>

        <MainButton label="Conheça" />
      </div>
    </>
  );
}
