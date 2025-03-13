"use client";

import { useParams } from "next/navigation";
import { Link, usePathname } from "@/i18n/routing";

const NavBarAdmission = () => {
  const params = useParams();
  const pathname = usePathname(); // الحصول على المسار الحالي
  const id = params.univadmID;

  const AdmissionData = [
    { id: 1, title: "متطلبات القبول", link: `/admission/${id}` },
    { id: 2, title: "المستندات المطلوبة", link: `/admission/${id}/2` },
    { id: 3, title: "لغة الدراسة", link: `/admission/${id}/3` },
    { id: 4, title: "اختبار القبول للطلاب الجدد", link: `/admission/${id}/4` },
    { id: 5, title: "التاريخ والمواعيد النهائية", link: `/admission/${id}/5` },
    { id: 6, title: "الخصومات والمنح الدراسية", link: `/admission/${id}/6` },
    { id: 7, title: "التقديم الإلكتروني", link: `/admission/${id}/7` },
  ];

  return (
    <div className="absolute -bottom-32 lg:w-full w-[90vwh]">
      <div className="flex gap-8 justify-between mx-8 overflow-x-scroll">
        {AdmissionData.map((link) => {
          const isActive = pathname === link.link;
          return (
            <Link
              href={link.link}
              className={`flex gap-4 bg-[#FFFFFF] shadow-md lg:p-4 p-3 lg:w-52 w-48 lg:h-40 h-36 border-slate-500 rounded-xl shrink-0 my-4  ${
                isActive ? "text-[#C49732]" : "text-black"
              }`}
              key={link.id}
            >
              <div className="flex flex-col  gap-2 lg:text-3xl text-2xl font-semibold">
                <span className="bg-[#C49732] size-12 flex justify-center items-center text-white rounded-full shrink-0">
                  {link.id}
                </span>
                <p>{link.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBarAdmission;
