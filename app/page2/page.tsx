import Card from "./Card";
const Page2 = () => {
  return (
    <div className=" h-full space-y-7 pt-5">
      <div className="flex w-full justify-end"></div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Page2;
