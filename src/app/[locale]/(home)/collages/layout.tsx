import Image from "next/image";
import NavBarExplore from "./NavBarExplore";
import { explore } from "../../../../../public";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="relative w-full h-auto overflow-hidden ">
        <div className="w-full lg:h-[700px] h-[600px] relative">
          <Image
            alt="background"
            fill
            className="object-cover"
            src={explore}
          />
          <div className="absolute bottom-14 start-10">
            <h1 className="text-white text-9xl font-semibold"></h1>
          </div>
          <NavBarExplore/>
        </div>
        <div className="mt-36 w-full">
          {children}
        </div>
      </main>
    </>
  );
}