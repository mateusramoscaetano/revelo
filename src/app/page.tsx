import { AboutUSContainer } from "@/components/about-us/about-us-container";
import { Home } from "@/components/home/home";
import { CarouselContainer } from "@/components/carousel/carousel-container";
import { ContactContainer } from "@/components/contact/contact-container";
import { WhereWeAreMap } from "@/components/where-we-are/map";
import { GroupContainer } from "@/components/group/group-container";

export default function App() {
  return (
    <>
      <Home />
      <AboutUSContainer />
      <CarouselContainer />
      <GroupContainer />
      <WhereWeAreMap />
      <ContactContainer />
    </>
  );
}
