// components/Staff.tsx
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

export type StaffMember = {
  name: string;
  description: string;
  image: string;
};

type StaffProps = {
  staff: StaffMember[];
};

const Staff = ({ staff }: StaffProps) => {
    const t= useTranslations();
  return (
    <div className="bg-[#F3F1F1] w-full h-auto p-0 ml-0">
      <div className="w-full h-auto p-6">
        <h2 className="lg:text-5xl text-3xl font-bold mr-6 mb-4 ml-2">{t("OurStaff")}</h2>
        <div className="border-b-4 border-yellow-600 my-1 w-[25%] mr-[2%] ml-[1%]"></div>
        <div className="border-b-4 border-s-gray-600 w-[96%] mr-[2%] ml-[2%] mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {staff.map((member, index) => (
            <div
              key={index}
              className="p-4 bg-white text-center rounded-[16px] transition-colors duration-1000 hover:bg-yellow-600 hover:text-white"
            >
              <Image
                alt={member.name}
                src={member.image}
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-[16px]"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="text-lg mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Staff;