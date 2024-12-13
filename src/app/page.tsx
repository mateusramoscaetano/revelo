import { AboutUSContainer } from "@/components/about-us/about-us-container";
import { Home } from "@/components/home/home";
import { CarouselContainer } from "@/components/carousel/carousel-container";
import { ContactContainer } from "@/components/contact/contact-container";

export default function App() {
  return (
    <>
      <Home />
      <AboutUSContainer />
      <CarouselContainer />
      <ContactContainer />
    </>
  );
}
