
"use client"
import { useTranslations } from "next-intl";

export const useLocalizedConstants = () => {
  const t = useTranslations();

  return {
    links: [
      { id: 1, url: "/colleges-programs", title: t("links.colleges-programs") },
      { id: 2, url: "/admission", title: t("links.admissions") },
      { id: 3, url: "/student-life", title: t("links.student-life") },
      { id: 4, url: "/services", title: t("links.discoverUniversity") },
      { id: 5, url: "/explore-university", title: t("links.explore-university") },

    ],
    headerLinks1: [
      { id: 1, url: "/contact-us", title: t("headerLinks1.contactUs") },
      { id: 2, url: "/alumni-association", title: t("headerLinks1.alumniAssociation") },
      { id: 3, url: "/media", title: t("headerLinks1.media") },
    ],
    aboutUs: [
      { id: 1, path: "/about-us", label: t("aboutUs.whoWeAre") },
      { id: 2, path: "/our-values", label: t("aboutUs.ourValues") },
      { id: 3, path: "/impact", label: t("aboutUs.impact") },
      { id: 4, path: "/news", label: t("aboutUs.news") },
      { id: 5, path: "/media-center", label: t("aboutUs.mediaCenter") },
    ],
    additionalInfo: [
      { id: 1, path: "/help-center", label: t("additionalInfo.helpCenter") },
      { id: 2, path: "/contact-us", label: t("additionalInfo.contactUs") },
      { id: 3, path: "/blogs", label: t("additionalInfo.blogs") },
      { id: 4, path: "/affiliate-Marketing", label: t("additionalInfo.affiliateMarketing") },
      { id: 5, path: "/privacy-tools", label: t("additionalInfo.privacyTools") },
      { id: 6, path: "/esim-activation", label: t("additionalInfo.esimActivation") },
    ],
  

  };
};
