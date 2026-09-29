import Footer from "@/components/Footer";
import Navigation from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />

      <main>{children}</main>

      <Footer />
    </>
  );
}
