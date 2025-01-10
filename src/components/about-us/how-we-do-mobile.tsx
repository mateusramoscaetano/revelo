"use client";
import { useEffect, useState } from "react";
import { HowWeDoCard } from "./how-we-do-card";
import { VideoPlayerMobile } from "./video-player-mobile";

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
      <div className="flex 1400:hidden min-h-[1800px]  flex-col gap-12 items-center justify-center">
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

        <VideoPlayerMobile className="-mt-24" />

        <HowWeDoCard
          left={true}
          asset="/icons/live.png"
          description={
            <div>
              Suas fotos mais importantes com <br />
              tratamento e entrega em tempo real
            </div>
          }
          title="Entrega de Fotos Ao Vivo"
          width={47}
          height={47}
          className="-mt-28"
        />
        <div className="w-[70px] text-white bg-white h-0.5  rotate-90 mx-auto "></div>
        <HowWeDoCard
          left={true}
          asset="/icons/graph.png"
          description={
            <div>
              Criamos situações de fotos perfeitas <br />
              sem depender do acaso,
            </div>
          }
          title="Não é sorte, é processo"
          width={47}
          height={24}
        />
        <div className="w-[70px] text-white bg-white h-0.5  rotate-90 mx-auto "></div>
        <HowWeDoCard
          left={true}
          asset="/icons/sec.png"
          description={
            <div>
              Nossas fotografias são armazenadas <br />
              com o que há de mais moderno em <br />
              tecnologia de backup e segurança
            </div>
          }
          title="Segurança"
          width={36}
          height={46}
        />
      </div>
    </>
  );
}
