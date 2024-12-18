import { TeamMemberCard } from "./team-member-card";

export function MeetOurTeam() {
  return (
    <>
      <div className="flex items-center  flex-col lg:grid  lg:grid-rows-3 lg:grid-cols-3 w-full  max-w-[1116px] relative gap-[32px] mt-[60px] mb-[73px] lg:mt-[121px] lg:mb-[146px]">
        <div className="pb-2 flex flex-col w-full max-w-[357px] mt-[81px]">
          <div className="text-xl font-semibold w-full flex items-center mb-[32px]">
            Conheça nosso time
            <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
          </div>
        </div>

        <TeamMemberCard
          img="/amanda.png"
          name="Amanda Ferreira"
          position="Head operacional/ Fotógrafa"
        />
        <TeamMemberCard
          img="/vaz.png"
          name="Lucas Vaz"
          position="Head comercial/Fotógrafo"
        />
        <TeamMemberCard
          img="/alan.png"
          name="Allan Silveira"
          position="Comercial"
        />
        <TeamMemberCard img="/gab.png" name="Gab" position="Atendimento" />
        <TeamMemberCard
          img="/jordana.png"
          name="Jordana Sene "
          position="Comercial"
        />
        <TeamMemberCard
          img="/layla.png"
          name="Layla Bianqui "
          position="Comercial"
        />
        <TeamMemberCard
          img="/martim.png"
          name="Martim Ferreira"
          position="Operacional/ Fotógrafo"
        />
        <TeamMemberCard
          img="/nay.png"
          name="Nayara Hegele "
          position="Head operacional/ Fotógrafa"
        />
      </div>
    </>
  );
}
