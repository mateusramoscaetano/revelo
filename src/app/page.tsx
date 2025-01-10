import { Home } from "@/components/home/home";
import { Location } from "@/components/location/map";
import { GroupContainer } from "@/components/group/group-container";
import { ContactContainer } from "@/components/contact/contact-container";
import { AboutUSContainer } from "@/components/about-us/about-us-container";
import { CarouselContainer } from "@/components/carousel/carousel-container";

export default function App() {
  return (
    <>
      <Home />
      <AboutUSContainer />
      <CarouselContainer />
      <GroupContainer />
      <Location />
      <ContactContainer />
    </>
  );
}
