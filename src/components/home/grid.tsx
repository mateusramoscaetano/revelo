import { FollowRevelo } from "./follow-revelo";
import { GridSquare } from "./square";

export function Grid() {
  return (
    <div className="hidden 1730:grid  1730:grid-rows-3 1730:grid-cols-4 w-full relative">
      <FollowRevelo />
      <GridSquare name="1" img="" />
      <GridSquare name="2" img="" />
      <GridSquare name="3" img="" />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" />
      <GridSquare name="6" img="" className="" />
      <GridSquare name="7" img="" className="1730:col-span-2 w-full" />
      <GridSquare name="8" img="" className="1730:row-start-3" />
      <GridSquare name="9" img="" className="1730:row-start-3" />
      <GridSquare name="10" img="" className="1730:row-start-3" />
      <GridSquare name="11" img="" className="1730:row-start-3" />
    </div>
  );
}
export function GridXl() {
  return (
    <div className="hidden xl:grid xl:grid-cols-3 1730:hidden  w-full relative">
      <FollowRevelo />
      <GridSquare name="1" img="" />
      <GridSquare name="2" img="" />
      <GridSquare name="3" img="" />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" className="col-span-2 w-full" />
      <GridSquare name="6" img="" className="" />
      <GridSquare name="7" img="" className="" />
      <GridSquare name="8" img="" className="" />
    </div>
  );
}
export function GridMd() {
  return (
    <div className="hidden lg:grid lg:grid-cols-2 xl:hidden   w-full relative">
      <FollowRevelo />
      <GridSquare name="1" img="" />
      <GridSquare name="2" img="" />
      <GridSquare name="3" img="" className="col-span-2 w-full" />
      <GridSquare name="4" img="" />
      <GridSquare name="5" img="" />
    </div>
  );
}
