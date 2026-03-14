import Card3D from "./Card3D";

export default function Hero() {
  return (
    <div className="flex w-full justify-center gap-4">
      <Card3D
        content={"EC"}
        description={"1200 Points"}
        className={"w-60"}
        badgeText={"2nd"}
      />
      <Card3D
        content={"CS/IT"}
        description={"1200 Points"}
        className={"w-60"}
        badgeText={"Leader"}
      />
      <Card3D
        content={"ME"}
        description={"1200 Points"}
        className={"w-60"}
        badgeText={"3rd"}
      />
    </div>
  );
}
