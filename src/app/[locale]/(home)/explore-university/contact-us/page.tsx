import Image from 'next/image';
import library from './../../../../../../public/WhoWeAre.jpg';
import { FaPhone } from "react-icons/fa6";
import { IoLocation } from 'react-icons/io5';
import ContactUsForm from './_components/contact-us-form';
import { getLocale, getTranslations } from 'next-intl/server';
import { contactWithUniversity } from '@/lib/apis/explore-university.api';

export default async function ContactUs () {

    // Translation
    const t = await getTranslations();
    const locale = await getLocale();
    // const { data: contactWithUni } = useQuery({
    //     queryKey: ['contactWithUniData'],
    //     queryFn : () => {},
    // })

    // Variables 
    const contactWithUniversityData = await contactWithUniversity(locale);

    console.log("contactWithUniversityData", contactWithUniversityData);
    

    return (
        <div className='bg-[#F3F1F1]'>
            {/* Hero */}
            <div className="w-full bg-black relative">
                <Image alt="Hesperides Explore" src={library} className="w-full lg:h-3/4 h-1/2 object-cover" />
                <h1 className="text-white text-3xl lg:text-7xl font-bold absolute lg:top-[80%] bottom-[10%] right-6 flex items-center justify-center">
                    {t("contact-us")}
                </h1>
            </div>

            {/* تواصل مع الجامعة */}
            <div className='my-16'>
                {/* Heading */}
                <div className='mt-12 mb-10'>
                    <h1 className='lg:text-5xl text-3xl font-bold mr-6 mb-10'>{t("contact-with-uni")}</h1>
                    <div className="border-b-4 border-yellow-600 my-1  w-[40%] mr-[2%] "></div>
                    <div className="border-b-4 border-s-gray-600   w-[96%] mr-[2%] "></div>
                </div>

                <div className='p-6 flex items-center gap-8'>
                    <div className='w-1/3 min-h-[300px] relative rounded-xl overflow-hidden'>
                        <Image src={library} alt={""} fill sizes='100%' className='object-cover'/>
                    </div>

                    <div>
                        <h2 className={'text-2xl mb-3'}>{t("contact-with-uni")}</h2>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <FaPhone className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> 01254588796 </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <FaPhone className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> ص.ب 227227 الشارقة , الامارات العربية المتحدة </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <FaPhone className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> Company@gmail.com </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <FaPhone className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> 3 شارع البطراوي من عباس العقاد بمدينة نصر, القاهرة </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Contact form */}
            <ContactUsForm/>

            {/*دليل الجامعة  */}
            <div className="my-16">
                {/* Heading */}
                <div className='mt-12 mb-10'>
                    <h1 className='lg:text-5xl text-3xl font-bold mr-6 mb-10'>{t("university-guide")}</h1>
                    <div className="border-b-4 border-yellow-600 my-1  w-[40%] mr-[2%] "></div>
                    <div className="border-b-4 border-s-gray-600   w-[96%] mr-[2%] "></div>
                </div>

                <div className="p-6">
                    <div className="bg-white flex justify-between items-center gap-6 p-8">
                        <h2 className="w-1/3 text-3xl">مكتب رئيس الجامعة</h2>
                        <div className="w-1/3 border-x px-5">
                            <p className="text-xl font-semibold"> رقم الهاتف </p>
                            <p className="text-3xl"> +9716521545554 </p>
                        </div>
                        <div className="w-1/3">
                            <p className="text-xl font-semibold"> البريد الالكتروني </p>
                            <p className="text-3xl"> Comoany@gmail.com </p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="bg-white flex justify-between items-center gap-6 p-8">
                        <h2 className="w-1/3 text-3xl">مكتب مدير الجامعة</h2>
                        <div className="w-1/3 border-x px-5">
                            <p className="text-xl font-semibold"> رقم الهاتف </p>
                            <p className="text-3xl"> +9716521545554 </p>
                        </div>
                        <div className="w-1/3">
                            <p className="text-xl font-semibold"> البريد الالكتروني </p>
                            <p className="text-3xl"> Comoany@gmail.com </p>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <div className="bg-white flex justify-between items-center gap-6 p-8">
                        <h2 className="w-1/3 text-3xl">مكتب مدير الجامعة</h2>
                        <div className="w-1/3 border-x px-5">
                            <p className="text-xl font-semibold"> رقم الهاتف </p>
                            <p className="text-3xl"> +9716521545554 </p>
                        </div>
                        <div className="w-1/3">
                            <p className="text-xl font-semibold"> البريد الالكتروني </p>
                            <p className="text-3xl"> Comoany@gmail.com </p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/*الموقع والاتجاهات  */}
            <div className='my-16'>
                {/* Heading */}
                <div className='mt-12 mb-10'>
                    <h1 className='lg:text-5xl text-3xl font-bold mr-6 mb-10'>{t("location-directions")}</h1>
                    <div className="border-b-4 border-yellow-600 my-1  w-[40%] mr-[2%] "></div>
                    <div className="border-b-4 border-s-gray-600   w-[96%] mr-[2%] "></div>
                </div>

                <div className='p-6 flex items-center gap-8'>
                    <div className='w-1/3 min-h-[300px] relative rounded-xl overflow-hidden'>
                        <Image src={library} alt={""} fill sizes='100%' className='object-cover'/>
                    </div>

                    <div>
                        <h2 className={'text-2xl mb-3'}>{t("contact-with-uni")}</h2>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <IoLocation className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> المبنى الرئيسي </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <IoLocation className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> المبنى الاداري </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <IoLocation className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> مبنى القبول </p>
                            </li>

                            <li className='flex items-center gap-5'>
                                <span className='size-14 rounded-lg bg-blue-900 flex justify-center items-center'>
                                    <IoLocation className='text-white' />
                                </span>

                                <p className="text-2xl text-zinc-800"> المبنى الرئيسي  </p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    );
}