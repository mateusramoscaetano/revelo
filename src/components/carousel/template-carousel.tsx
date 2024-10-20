import { PercentSquareIcon, PersonStanding } from "lucide-react";
import { Carousel } from "./embla-carousel";

export function TemplateCarousel() {
  return (
    <>
      <Carousel>
        <div className="embla__slide flex items-center justify-center max-w-2xl">
          <PersonStanding />
        </div>
        <div className="embla__slide flex items-center justify-center max-w-2xl">
          <PercentSquareIcon />
        </div>
      </Carousel>
    </>
  );
}
