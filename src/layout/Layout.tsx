import TopNavbar from "@/components/layout/TopNavbar";
import Footer from "@components/layout/Footer";
import ScrollToTopButton from "@components/layout/ScrollToTopButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <TopNavbar />
        <main>{children}</main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
