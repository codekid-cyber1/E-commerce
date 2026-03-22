import Footer from "@/component/shop/Footer";
import Navbar from "@/component/shop/Navbar";

export default function shopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-4"> {/* pt-20 adds space for the fixed navbar */}
        {children}
      </main>
      <Footer />
    </div>
  );
}