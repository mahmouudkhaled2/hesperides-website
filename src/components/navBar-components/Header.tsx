import React, { useEffect, useState } from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import LanguageDropdown from '../LanguageDropdown';
import { useTranslations } from 'next-intl';
import { useLocalizedConstants } from '@/app/[locale]/_constants';
import { Link } from '@/i18n/routing';

const Header = () => {
  const t = useTranslations();
  const { headerLinks1 } = useLocalizedConstants();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <nav className="flex items-center justify-center h-12 bg-[#151515] px-6 relative">
      <div className="px-6 flex items-center justify-between text-white w-full">
        <div className="flex gap-8 w-full whitespace-nowrap">
          <Link href="/login" className="flex justify-center items-center gap-2">
            <FaCircleUser />
            {t('signIn')}
          </Link>
          <button>{t('campusVisit')}</button>
          <LanguageDropdown />
        </div>

        <div className="flex gap-8">
          {headerLinks1.map((link) => (
            <button key={link.id} className="cursor-pointer transition-colors whitespace-nowrap">
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
