"use client";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { HowWeDoCard } from "./how-we-do-card";
import { VideoPlayer } from "./video-player";
import { VideoPlayer2 } from "./video-player-mobile";

export function HowWeDoMobile() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <>
      <div className="flex 1400:hidden flex-col gap-12 items-center justify-center">
        <HowWeDoCard
          left={true}
          asset="/icons/person.png"
          description={
            <div>
              Nossa equipe é altamente qualificada <br /> e com um olhar único
              para a fotografia
            </div>
          }
          title="Fotógrafos Referência"
          width={39.62}
          height={45}
        />
        <div className="w-[70px] text-white bg-white h-0.5  rotate-90 mx-auto "></div>
        <HowWeDoCard
          left={true}
          asset="/icons/archive.png"
          description={
            <div>
              Tecnologia de ponta para entregar <br />
              suas memórias da maneira mais eficaz
            </div>
          }
          title="Plataforma de Imagens"
          width={37}
          height={34}
        />
        <div className="w-[70px] text-white bg-white h-0.5  rotate-90 mx-auto "></div>
        <HowWeDoCard
          left={true}
          asset="/icons/pencil.png"
          description={
            <div>
              Fotos tratadas manualmente por <br />
              profissionais com olho clínico, sem <br />
              automatizações de IA em massa
            </div>
          }
          title="Tratamento Personalizado"
          width={46}
          height={38}
        />
        <div className="w-[70px] text-white bg-white h-0.5  rotate-90 mx-auto "></div>

        <VideoPlayer2 className="-mt-24" />
      </div>
    </>
  );
}
