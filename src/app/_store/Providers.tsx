import { NextIntlClientProvider, useMessages } from "next-intl";
import TanStackProvider from "./TanStackProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <TanStackProvider >{children}</TanStackProvider>
    </NextIntlClientProvider>
  );
};

export default Providers;
