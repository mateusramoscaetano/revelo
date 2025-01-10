import { AboutUsHome } from "./about-us-home";
import { Grid2Xl, GridMd, GridSm, GridXl } from "./grid";

export function Home() {
  return (
    <>
      <div
        id="home"
        className="flex flex-col justify-start items-center mt-[93px] relative"
      >
        <Grid2Xl />
        <GridXl />
        <GridMd />
        <GridSm />
      </div>
      <div className="flex items-center justify-center">
        <AboutUsHome />
      </div>
    </>
  );
}
