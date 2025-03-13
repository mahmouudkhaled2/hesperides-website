import React from 'react'
import CustomSelect from './custom-select';
import PhoneNumberInput from './phone-number-input';
import { useTranslations } from 'next-intl';
import { IoMdSend } from 'react-icons/io';

export default function ContactUsForm() {
    // Translation
    const t = useTranslations();


  return (
    <>
        {/* Contact form */}
        <div className='bg-[#083767] py-10'>
        <h2 className="text-4xl text-white font-bold text-center mb-6">{t("contact-us-today")}</h2>
        <form action="" className="w-4/5 mx-auto flex flex-col items-center gap-10">
            <div className="w-full flex flex-col lg:flex-row gap-10">
                <div className='w-full lg:w-1/2 flex flex-col gap-3'>
                    {/* Name Input */}
                    <div>
                        <input type="text" className='w-full p-5 rounded-2xl border-none outline-none text-xl placeholder:text-zinc-500 placeholder:text-xl placeholder:font-semibold' placeholder={t("name")}/>
                    </div>

                    {/* Email Input */}
                    <div>
                        <input type="text" className='w-full p-5 rounded-2xl border-none outline-none text-xl placeholder:text-zinc-500 placeholder:text-xl placeholder:font-semibold' placeholder={t("email")}/>
                    </div>

                    {/* Phone Number */}
                    <PhoneNumberInput/>

                    {/* Interests Select menu */}   
                    <CustomSelect options={["الخيار الأول", "الخيار الثاني", "الخيار الثالث"]} />
                </div> 

                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    <textarea className="min-h-[290px] rounded-2xl p-5 border-none outline-none placeholder:text-xl text-xl resize-none" placeholder={t("message")}/>
                </div> 
            </div>

            <button type="submit" className="flex items-center justify-center gap-3 py-4 px-8 rounded-lg text-2xl font-semibold bg-white w-[250px] ">
                <IoMdSend  className="text-3xl"/>
                {t("send")}
            </button>
        </form>
    </div>
    </>
  )
}
