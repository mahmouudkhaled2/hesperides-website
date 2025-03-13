import Image from "next/image";
import { background1 } from "../../../../../public";
import NavBarAdmission from "@/components/admission/NavBarAdmission";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="relative w-full h-auto overflow-hidden">
        <div className="w-full lg:h-[700px] h-[600px] relative">
          <Image
            alt="background"
            fill
            className="object-cover"
            src={background1}
          />
          <div className="absolute bottom-14 start-10">
            <h1 className="text-white text-9xl font-semibold"></h1>
          </div>
          <NavBarAdmission/>

        </div>
        <div className="mt-36 w-full">
        {children}

        </div>
      </main>
    </>
  );
}
