import { AboutUsCard } from "./cards/about-us-card";

export function AboutUsGrid() {
  return (
    <>
      <div className=" grid grid-rows-1 grid-cols-1 lg:grid-rows-3 lg:grid-cols-3 w-full relative gap-[32px]">
        <div className="pb-2 flex flex-col items-start  justify-start mt-[81px]">
          <div className="text-xl font-semibold flex items-center mb-[32px]">
            Conheça nosso time
            <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
          </div>
        </div>

        <AboutUsCard
          img="/amanda.png"
          name="Amanda Ferreira"
          position="Head operacional/ Fotógrafa"
        />
        <AboutUsCard
          img="/vaz.png"
          name="Lucas Vaz"
          position="Head comercial/Fotógrafo"
        />
        <AboutUsCard
          img="/alan.png"
          name="Allan Silveira"
          position="Comercial"
        />
        <AboutUsCard img="/gab.png" name="Gab" position="Atendimento" />
        <AboutUsCard
          img="/jordana.png"
          name="Jordana Sene "
          position="Comercial"
        />
        <AboutUsCard
          img="/layla.png"
          name="Layla Bianqui "
          position="Comercial"
        />
        <AboutUsCard
          img="/martim.png"
          name="Martim Ferreira"
          position="Operacional/ Fotógrafo"
        />
        <AboutUsCard
          img="/nay.png"
          name="Nayara Hegele "
          position="Head operacional/ Fotógrafa"
        />
      </div>
    </>
  );
}
