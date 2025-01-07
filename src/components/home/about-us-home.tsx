"use client";

import { scrollToSection } from "@/utils/ScrollToSection";
import { motion } from "framer-motion";

export function AboutUsHome() {
  return (
    <div className="bg-[#181818] text-white max-w-[400px] border-none items-center justify-center lg:w-[1116px] lg:max-w-[1552px] py-16 ">
      <div className="pb-2 flex flex-col items-start  justify-start px-4 sm:px-0">
        <div className="text-xl font-semibold flex items-center mb-[32px]">
          Sobre Nós
          <span className="ml-2 h-0.5 w-[62px] bg-red-500"></span>
        </div>
      </div>

      <div className="space-y-4 flex-col w-full min-w-[357px] items-center justify-center px-4 sm:px-0">
        {/* Mobile */}
        <div className="space-y-2 md:mr-4 mb-[37px] xl:hidden flex flex-col">
          <p className="text-2xl font-medium tracking-widest max-w-[319px]">
            Revelamos aquilo que <br /> se é incapaz de enxergar.
          </p>
          <div className="flex  cursor-pointer group">
            <motion.div className="flex items-center justify-center px-3 py-2.5 bg-revelo tracking-wider rounded-lg relative w-[111px] h-7 group-hover:scale-x-[129%] group-hover:scale-y-125  duration-300">
              <span className="  group-hover:scale-x-[85%]  group-hover:scale-y-[85%]  duration-300 ">
                Saiba Mais
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-[22px]">
          {/* DESKTOP */}
          <div className="space-y-6 md:mr-4 mb-[37px] hidden xl:flex xl:flex-col">
            <p className="text-2xl font-medium tracking-widest max-w-[319px]">
              Revelamos aquilo que <br /> se é incapaz de enxergar.
            </p>
            <div className="flex  cursor-pointer group">
              <motion.button
                onClick={() => scrollToSection("us")}
                className="flex items-center justify-center px-3 py-2.5 bg-revelo tracking-wider rounded-lg relative w-[105px] h-7 group-hover:scale-x-[129%] group-hover:scale-y-125  duration-300"
              >
                <span className="  group-hover:scale-x-[85%]  group-hover:scale-y-[85%]  duration-300 group-hover:font-bold">
                  Saiba Mais
                </span>
              </motion.button>
            </div>
          </div>
          <p className="text-zinc-300 text-sm max-w-[340px] tracking-wider">
            Revelamos aquilo que se é incapaz de enxergar, mas de certo modo já
            se sabe. Pode ser uma visão de mundo singularmente diferente ou tão
            próxima que parece milagre quando se olhássemos pelos seus olhos e
            isso te fizesse lembrar quem é e o que pode ser.
          </p>
          <p className="text-zinc-300 text-sm max-w-[340px] tracking-wider">
            Nosso ponto de vista não precisa ser coerente. É raramente é
            simples. Podemos ter pontos de vista diferentes, às vezes
            contraditórios. Querer estreitar tudo numa única expressão elegante
            é irreal e limitador, o mundo totalmente cor-de-rosa é bonito demais
            para ser verdadeiro.
          </p>
        </div>
      </div>
    </div>
  );
}
