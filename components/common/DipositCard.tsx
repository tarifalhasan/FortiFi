import { bitcoin } from "@/assets/icons";
import Image from "next/image";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";

const DipositCard = () => {
  return (
    <div className=" bg-[#E0DCB3] overflow-hidden !rounded-[15px]">
      <div className="card rounded-b-none !rounded-[15px]">
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
            <h3 className=" text-t-18 font-extrabold text-white">
              0.0001 BTC.b
            </h3>
          </div>
          <div className="rounded-md space-y-2 p-4 bg-primary grid place-items-center">
            <h4 className=" text-t-16 text-secondary font-bold text-center ">
              Asset Price
            </h4>
            <div className=" w-6 h-[2px] bg-white" />
            <h3 className=" text-t-18 font-extrabold text-white">$31,069.01</h3>
          </div>
        </div>
        <div className=" relative z-10 px-5 pt-9 grid grid-cols-2 gap-2">
          <Button className="h-[55px] !rounded-b-none rounded-[15px]">
            Deposit
          </Button>
          <Button
            className="h-[55px] !rounded-b-none rounded-[15px]"
            variant={"secondary"}
          >
            Withdraw
          </Button>
        </div>
      </div>
      <div
        className={`  relative z-40 overflow-hidden -mt-[20px]  bg-[#E0DCB3] border border-db  rounded-[15px] card space-y-5`}
      >
        <p className="text-t-18 font-semibold">Amount</p>
        <div
          style={{ padding: "10px 15px" }}
          className="bg-transparent rounded-[10px] border border-primary flex items-center justify-between"
        >
          <h3 className="text-t-18 font-semibold">6.09</h3>
          <button
            style={{ padding: "10px 15px" }}
            className=" text-t-18 bg-secondary rounded-lg font-extrabold  text-dark"
          >
            + MAX
          </button>
        </div>
        <Slider defaultValue={[33]} max={100} step={1} />
        <div className=" grid grid-cols-4 gap-1">
          <button className=" h-[46px] text-t-16  text-white sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
            25%
          </button>
          <button className="h-[46px] text-t-16  text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
            50%
          </button>
          <button className=" h-[46px] text-t-16 text-white   sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
            75%
          </button>
          <button className=" h-[46px] text-t-16 text-white  sm:text-t-18 font-extrabold bg-[#101E33] border-2 border-secondary rounded-[5px] inline-flex items-center justify-center">
            100%
          </button>
        </div>
        <ul className=" space-y-4">
          <li className=" flex  items-center justify-between text-t-16 font-semibold font-comforta">
            <span className=" block">Deposit Fee</span>
            <span className=" block">0%</span>
          </li>
          <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
            <span className=" block">Withdraw Fee</span>
            <span className=" block">0%</span>
          </li>
          <li className=" flex items-center justify-between text-t-16 font-semibold font-comforta">
            <span className=" block">Performance Fee</span>
            <span className=" block">0%</span>
          </li>
        </ul>
        <button
          style={{ padding: "15px 24px" }}
          className="border-2 border-secondary rounded-lg text-t-18 font-bold text-white  w-full inline-flex  items-center justify-center  bg-primary"
        >
          Deposit
        </button>
      </div>
    </div>
  );
};

export default DipositCard;
