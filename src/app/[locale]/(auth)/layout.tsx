
const AuthLayout = ({children}: Readonly<{children: React.ReactNode}>) => {
  return (
    <div className="relative h-full">
      <main className="relative z-10">{children}</main>
    </div>
  );
};

export default AuthLayout;
