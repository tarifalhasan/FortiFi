"use client";
import { logo } from "@/assets/images";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const hangleChange = (value: any) => {
    router.push(value);
    router.refresh();
  };

  return (
    <header className=" py-6 container  flex items-center justify-between">
      <Link href={"/"}>
        <Image className=" w-[55%] md:w-full" alt="logo" src={logo} />
      </Link>
      <button className=" md:hidden">
        <HiOutlineMenuAlt1 className="text-4xl text-white" />
      </button>
      <div className=" hidden md:grid grid-cols-2 gap-3 w-[calc(181px*2)]">
        <Select>
          <SelectTrigger className="">
            <SelectValue placeholder="Chain" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={(v) => hangleChange(v)}>
          <SelectTrigger className="">
            <SelectValue placeholder="Address" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="/page2">Profile</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  );
};

export default Header;
