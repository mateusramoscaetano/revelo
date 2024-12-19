// crossfade-image.d.ts
declare module "react-crossfade-image" {
  import * as React from "react";

  interface CrossfadeImageProps {
    src: string; // Caminho da imagem
    alt?: string; // Texto alternativo opcional
    duration?: number; // Duração da transição em milissegundos
    timingFunction?: string; // Função de temporização para transição (ex.: "ease", "ease-in-out")
    delay?: number; // Atraso antes de iniciar a transição, em milissegundos
    style?: React.CSSProperties; // Estilos adicionais para as imagens
    containerClass?: string; // Classe CSS para o contêiner
    className?: string; // Classe CSS para a imagem
  }

  const CrossfadeImage: React.FC<CrossfadeImageProps>;

  export default CrossfadeImage;
}
