"use client";
import Image from "next/image";
import { HowWeDoCard } from "./how-we-do-card";
import { VideoPlayer } from "./video-player";
import { useEffect, useState } from "react";

export function HowWeDo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Apenas renderiza no cliente
  }
  return (
    <>
      <div className="hidden 1400:flex">
        <div className="flex flex-col gap-[70px] items-center justify-center">
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
        </div>

        <div className=" h-full ">
          <VideoPlayer />
        </div>

        <div className="flex flex-col gap-[70px] items-center justify-center">
          <HowWeDoCard
            left={false}
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
          />
          <HowWeDoCard
            left={false}
            asset="/icons/graph.png"
            description={
              <div>
                Criamos situações de fotos perfeitas <br />
                sem depender do acaso, o planejamento <br />
                faz parte de 100% do processo
              </div>
            }
            title="Não é sorte, é processo"
            width={54}
            height={28}
          />
          <HowWeDoCard
            left={false}
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
      </div>
    </>
  );
}
