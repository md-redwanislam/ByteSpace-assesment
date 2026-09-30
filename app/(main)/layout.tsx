import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/navbar";

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
