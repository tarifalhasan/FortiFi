import { f_logo_dark } from "@/assets/images";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <section className="  max-h-[80vh] h-full bg-primary px-5 grid place-items-center  rounded-3xl">
      <div className=" space-y-5 grid place-items-center">
        <Image
          className=" block mx-auto  max-w-[55%]"
          src={f_logo_dark}
          alt="sds"
        />
        <h2 className=" text-t-25 font-extrabold text-center">
          A next-gen vault protocol
        </h2>
        <Button variant={"secondary"} className=" rounded-full px-9">
          Enter
        </Button>
      </div>
    </section>
  );
}
