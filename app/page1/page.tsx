import { barSmallCrat, platform, satistics } from "@/assets/images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { PiCurrencyCircleDollar } from "react-icons/pi";
const Page1 = () => {
  const fortStar = [
    {
      name: "FORT Price",
      price: "$100.14 USD",
    },
    {
      name: "Fully Diluted VAlue ( FDV )",
      price: "$1,902,407.00 USD",
    },
    {
      name: "Maximum Supply",
      price: "$19,000.00 FORT",
    },
    {
      name: "Circulating Supply",
      price: "$500.00 FORT",
    },
  ];

  const myPosition = [
    {
      valutName: "sAVAX Vault",
      apr: "xx%",
      amount: "$231100.14",
    },
    {
      valutName: "BTC.b Vault",
      apr: "xx%",
      amount: "$545100.14",
    },
    {
      valutName: "USDC Vault",
      apr: "xx%",
      amount: "$821400.14",
    },
    {
      valutName: "L1 BAL Vault",
      apr: "xx%",
      amount: "$558100.14",
    },
    {
      valutName: "L1 BAL Vault",
      apr: "xx%",
      amount: "$558100.14",
    },
    {
      valutName: "L1 BAL Vault",
      apr: "xx%",
      amount: "$558100.14",
    },
    {
      valutName: "L1 BAL Vault",
      apr: "xx%",
      amount: "$558100.14",
    },
  ];
  return (
    <div className=" space-y-6">
      {/* Profile */}
      <div className=" flex items-center justify-between card">
        <div className="flex items-center gap-4">
          <Avatar className=" w-[75px] h-[75px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className=" space-y-2">
            <h4 className=" text-t-18 font-bold text-white">Daisy Phelps</h4>
            <p className="text-t-25 text-secondary font-extrabold">
              0x3e5678....b567th56777
            </p>
          </div>
        </div>
        <div className="">
          <div className=" inline-flex items-center space-x-2">
            <PiCurrencyCircleDollar className="text-white text-3xl" />
            <h6 className=" text-t-18 font-bold text-white">My TVL</h6>
          </div>
          <p className="text-t-25 text-secondary font-extrabold">$2521.55</p>
        </div>
      </div>
      {/* details */}
      <div className=" grid   gap-6 grid-cols-11">
        <div className="col-span-11 lg:col-span-5 grid gap-6">
          {/* Sales */}
          <div>
            <div className="card">
              <div className=" flex items-center gap-3">
                <Image src={barSmallCrat} alt="bar" />
                <h2 className=" text-t-25 font-extrabold text-white">
                  Fort Stats
                </h2>
              </div>
              <ul className=" py-5 space-y-4">
                {fortStar.map((data, index) => (
                  <li
                    key={index}
                    className={` ${
                      index % 2 === 0 && "bg-dark"
                    } flex items-center justify-between py-3 px-2 rounded-md`}
                  >
                    <span className="block text-t-16 font-semibold">
                      {data.name}
                    </span>
                    <span className="block text-t-16  font-extrabold">
                      {data.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Platform Info */}
          <div>
            <div className="card">
              <div className=" flex items-center gap-3">
                <Image src={platform} alt="bar" />
                <h2 className=" text-t-25 font-extrabold text-white">
                  Platform Info
                </h2>
              </div>
              <ul className=" py-5 space-y-4">
                {fortStar.map((data, index) => (
                  <li
                    key={index}
                    className={` ${
                      index % 2 === 0 && "bg-dark"
                    } flex items-center justify-between py-3 px-2 rounded-md`}
                  >
                    <span className="block text-t-16 font-semibold">
                      {data.name}
                    </span>
                    <span className="block text-t-16  font-extrabold">
                      {data.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-11 overflow-hidden card max-h-[739px] h-full overflow-y-scroll scrollbar scrollbar-thumb-secondary scrollbar-track-gray-100 lg:col-span-6">
          {/* my position */}
          <div className=" relative ">
            <div className=" h-11  bg-primary pb-3 sticky left-0 top-0 right-0  flex items-center gap-3">
              <Image src={satistics} alt="bar" />
              <h2 className=" text-t-25 font-extrabold text-white">
                My Positions
              </h2>
            </div>
            <ul className=" space-y-4 py-5">
              {myPosition.map((data, index) => (
                <li
                  key={index}
                  className=" flex justify-between items-center rounded-md py-3 px-3 bg-dark"
                >
                  <span className="text-t-18 font-semibold block flex-1">
                    {data.valutName}
                  </span>
                  <span className="flex items-center space-x-14">
                    <span className="flex flex-col space-y-1">
                      <span className="text-t-18 font-semibold">
                        Add Vault APR
                      </span>
                      <span className="text-t-18 font-extrabold">
                        {data.apr}
                      </span>
                    </span>
                    <span className="flex flex-col space-y-1">
                      <span className="text-t-18 font-semibold">Amount </span>
                      <span className="text-t-18 font-extrabold">
                        {data.amount}
                      </span>
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
