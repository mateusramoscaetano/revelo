import { AboutUsHome } from "./about-us-home";
import { CasesHome } from "./cases-home";
import { Grid, GridMd, GridXl } from "./grid";

export function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-start items-center mt-[93px] relative"
      >
        <Grid />
        <GridMd />
        <GridXl />

        <CasesHome />
      </div>
      <div className="flex items-center justify-center">
        <AboutUsHome />
      </div>
    </>
  );
}
