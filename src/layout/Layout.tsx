import TopNavbar from "@/components/layout/TopNavbar";
import ScrollToTopButton from "@components/layout/ScrollToTopButton";
// import Footer from "../components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopNavbar />
      <main>{children}</main>
      {/* // <Footer  /> */}
      <ScrollToTopButton />
    </>
  );
}
