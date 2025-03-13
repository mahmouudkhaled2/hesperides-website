import Image from "next/image";
import { loader } from "../../../../public";

export default function Loading() {
  return (
    <section className="h-screen flex justify-center items-center">
      <Image alt="loader" width={100} height={200} src={loader}/>
    </section>
  );
}
