import TopNavbar from "@/components/layout/TopNavbar";
import Footer from "@components/layout/Footer";
import ScrollToTopButton from "@components/layout/ScrollToTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
