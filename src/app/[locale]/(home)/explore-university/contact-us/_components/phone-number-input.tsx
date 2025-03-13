"use client";

import { useState } from "react";
import { useTranslations } from 'next-intl';

interface CountryOption {
  code: string;
  flag: string;
  name: string;
}


export default function PhoneNumberInput(): JSX.Element {
    // Translation
    const t = useTranslations();

    // Countries Keys
    const countriesKeys = [
      { code: "+93", flag: "🇦🇫", name: t("Afghanistan") },
      { code: "+355", flag: "🇦🇱", name: t("Albania") },
      { code: "+213", flag: "🇩🇿", name: t("Algeria") },
      { code: "+376", flag: "🇦🇩", name: t("Andorra") },
      { code: "+244", flag: "🇦🇴", name: t("Angola") },
      { code: "+1", flag: "🇦🇬", name: t("Antigua and Barbuda") },
      { code: "+54", flag: "🇦🇷", name: t("Argentina") },
      { code: "+374", flag: "🇦🇲", name: t("Armenia") },
      { code: "+61", flag: "🇦🇺", name: t("Australia") },
      { code: "+43", flag: "🇦🇹", name: t("Austria") },
      { code: "+994", flag: "🇦🇿", name: t("Azerbaijan") },
      { code: "+1", flag: "🇧🇸", name: t("Bahamas") },
      { code: "+973", flag: "🇧🇭", name: t("Bahrain") },
      { code: "+880", flag: "🇧🇩", name: t("Bangladesh") },
      { code: "+1", flag: "🇧🇧", name: t("Barbados") },
      { code: "+375", flag: "🇧🇾", name: t("Belarus") },
      { code: "+32", flag: "🇧🇪", name: t("Belgium") },
      { code: "+501", flag: "🇧🇿", name: t("Belize") },
      { code: "+229", flag: "🇧🇯", name: t("Benin") },
      { code: "+975", flag: "🇧🇹", name: t("Bhutan") },
      { code: "+591", flag: "🇧🇴", name: t("Bolivia") },
      { code: "+387", flag: "🇧🇦", name: t("Bosnia and Herzegovina") },
      { code: "+267", flag: "🇧🇼", name: t("Botswana") },
      { code: "+55", flag: "🇧🇷", name: t("Brazil") },
      { code: "+673", flag: "🇧🇳", name: t("Brunei") },
      { code: "+359", flag: "🇧🇬", name: t("Bulgaria") },
      { code: "+226", flag: "🇧🇫", name: t("Burkina Faso") },
      { code: "+257", flag: "🇧🇮", name: t("Burundi") },
      { code: "+855", flag: "🇰🇭", name: t("Cambodia") },
      { code: "+237", flag: "🇨🇲", name: t("Cameroon") },
      { code: "+1", flag: "🇨🇦", name: t("Canada") },
      { code: "+238", flag: "🇨🇻", name: t("Cape Verde") },
      { code: "+236", flag: "🇨🇫", name: t("Central African Republic") },
      { code: "+235", flag: "🇹🇩", name: t("Chad") },
      { code: "+56", flag: "🇨🇱", name: t("Chile") },
      { code: "+86", flag: "🇨🇳", name: t("China") },
      { code: "+57", flag: "🇨🇴", name: t("Colombia") },
      { code: "+269", flag: "🇰🇲", name: t("Comoros") },
      { code: "+506", flag: "🇨🇷", name: t("Costa Rica") },
      { code: "+385", flag: "🇭🇷", name: t("Croatia") },
      { code: "+53", flag: "🇨🇺", name: t("Cuba") },
      { code: "+357", flag: "🇨🇾", name: t("Cyprus") },
      { code: "+420", flag: "🇨🇿", name: t("Czech Republic") },
      { code: "+243", flag: "🇨🇩", name: t("Democratic Republic of the Congo") },
      { code: "+45", flag: "🇩🇰", name: t("Denmark") },
      { code: "+253", flag: "🇩🇯", name: t("Djibouti") },
      { code: "+1", flag: "🇩🇲", name: t("Dominica") },
      { code: "+1", flag: "🇩🇴", name: t("Dominican Republic") },
      { code: "+593", flag: "🇪🇨", name: t("Ecuador") },
      { code: "+20", flag: "🇪🇬", name: t("Egypt") },
      { code: "+503", flag: "🇸🇻", name: t("El Salvador") },
      { code: "+240", flag: "🇬🇶", name: t("Equatorial Guinea") },
      { code: "+291", flag: "🇪🇷", name: t("Eritrea") },
      { code: "+372", flag: "🇪🇪", name: t("Estonia") },
      { code: "+251", flag: "🇪🇹", name: t("Ethiopia") },
      { code: "+679", flag: "🇫🇯", name: t("Fiji") },
      { code: "+358", flag: "🇫🇮", name: t("Finland") },
      { code: "+33", flag: "🇫🇷", name: t("France") },
      { code: "+995", flag: "🇬🇪", name: t("Georgia") },
      { code: "+49", flag: "🇩🇪", name: t("Germany") },
      { code: "+233", flag: "🇬🇭", name: t("Ghana") },
      { code: "+30", flag: "🇬🇷", name: t("Greece") },
      { code: "+852", flag: "🇭🇰", name: t("Hong Kong") },
      { code: "+36", flag: "🇭🇺", name: t("Hungary") },
      { code: "+91", flag: "🇮🇳", name: t("India") },
      { code: "+62", flag: "🇮🇩", name: t("Indonesia") },
      { code: "+98", flag: "🇮🇷", name: t("Iran") },
      { code: "+964", flag: "🇮🇶", name: t("Iraq") },
      { code: "+353", flag: "🇮🇪", name: t("Ireland") },
      { code: "+39", flag: "🇮🇹", name: t("Italy") },
      { code: "+81", flag: "🇯🇵", name: t("Japan") },
      { code: "+962", flag: "🇯🇴", name: t("Jordan") },
      { code: "+254", flag: "🇰🇪", name: t("Kenya") },
      { code: "+965", flag: "🇰🇼", name: t("Kuwait") },
      { code: "+961", flag: "🇱🇧", name: t("Lebanon") },
      { code: "+218", flag: "🇱🇾", name: t("Libya") },
      { code: "+60", flag: "🇲🇾", name: t("Malaysia") },
      { code: "+212", flag: "🇲🇦", name: t("Morocco") },
      { code: "+31", flag: "🇳🇱", name: t("Netherlands") },
      { code: "+64", flag: "🇳🇿", name: t("New Zealand") },
      { code: "+92", flag: "🇵🇰", name: t("Pakistan") },
      { code: "+972", flag: "🇮🇱", name: t("Palestine") },
      { code: "+63", flag: "🇵🇭", name: t("Philippines") },
      { code: "+966", flag: "🇸🇦", name: t("Saudi Arabia") },
      { code: "+34", flag: "🇪🇸", name: t("Spain") },
      { code: "+44", flag: "🇬🇧", name: t("United Kingdom") },
      { code: "+1", flag: "🇺🇸", name: t("United States") }
    ];

    
  const [selectedCountry, setSelectedCountry] = useState<CountryOption>(countriesKeys[0]);
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = countriesKeys.find((c: { code: string, flag: string, name: string }) => c.code === e.target.value);
    if (country) setSelectedCountry(country);
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="bg-white flex items-center  rounded-2xl overflow-hidden">
        <input
          type="text"
          id="phone"
          className="flex-1 bg-white border-none outline-none p-5 h-full text-xl placeholder:text-zinc-500 placeholder:text-xl placeholder:font-semibold" 
          placeholder={t("phone")}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <select
          className="block bg-white h-[60px] border-s outline-none text-zinc-500 text-lg font-semibold appearance-none px-5 text-center"
          value={selectedCountry.code}
          onChange={handleCountryChange}
        >
          {countriesKeys.map((country) => (
            <option key={country.code} value={country.code} className="border-none outline-none">
              {country.flag} {country.code}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
