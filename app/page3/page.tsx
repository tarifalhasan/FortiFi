import DipositCard from "@/components/common/DipositCard";
import { BiSearchAlt2 } from "react-icons/bi";
const Page2 = () => {
  return (
    <div className=" h-full space-y-7 pt-5">
      <div className="flex w-full justify-end">
        <div className=" px-4 w-full max-w-xl flex items-center justify-center   search rounded-full  h-[50px]">
          <input
            type="text"
            className="font-comforta text-white bg-transparent outline-none focus:outline-none text-t-18 font-bold flex-1"
            placeholder="Search"
          />
          <BiSearchAlt2 size={25} className="text-secondary" />
        </div>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        <div>
          <DipositCard />
        </div>
        <div>
          <DipositCard />
        </div>
        <div>
          <DipositCard />
        </div>
      </div>
    </div>
  );
};

export default Page2;
