
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main >
       
        <div className=" w-full">{children}</div>
      </main>
    </>
  );
}
