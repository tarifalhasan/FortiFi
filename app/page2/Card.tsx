import { bitcoin } from "@/assets/icons";
import Image from "next/image";

const Card = () => {
  return (
    <div className="card rounded-lg">
      <div className=" flex items-center justify-between px-3">
        <Image src={bitcoin} alt="bitcoin" />
        <div className=" space-y-1">
          <h4 className=" text-t-22 font-extrabold">BTC.b Vault</h4>
          <p className="text-t-18 font-medium">Vault ID #3456</p>
        </div>
      </div>
      <div className=" pt-8 grid grid-cols-2 gap-5">
        <div className="rounded-md space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center  ">
            Vault TVL
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold  text-white "> $80K</h3>
        </div>
        <div className="rounded-md space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            APY
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">5.2%</h3>
        </div>
        <div className="rounded-md space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            My TVL
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">0.0001 BTC.b</h3>
        </div>
        <div className="rounded-md space-y-2 p-4 bg-primary grid place-items-center">
          <h4 className=" text-t-16 text-secondary font-bold text-center ">
            Asset Price
          </h4>
          <div className=" w-6 h-[2px] bg-white" />
          <h3 className=" text-t-18 font-extrabold text-white">$31,069.01</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
