import Card3D from "./Card3D";

export default function Hero() {
  return (
    <div className="flex w-full justify-center items-end ">
      <Card3D
        content={"EC"}
        description={"1000"}
        className={"w-60"}
        badgeText={"2nd"}
        badgeColor="bg-gray-300"
      />
      <Card3D
        content={"CS/IT"}
        description={"1200"}
        className={"w-60"}
        badgeText={"Leader"}
        badgeColor="bg-amber-300"
        crown
        glow
      />
      <Card3D
        content={"ME"}
        description={"800"}
        className={"w-60"}
        badgeText={"3rd"}
        badgeColor="bg-amber-800 text-white"
      />
    </div>
  );
}
