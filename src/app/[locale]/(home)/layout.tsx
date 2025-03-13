import NavBar from "@/components/navBar-components/NavBar";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export default async function LocaleLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
