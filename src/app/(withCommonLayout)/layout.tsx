/* eslint-disable prettier/prettier */
import { Navbar } from "@/src/components/navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex flex-col h-screen">
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;