import TopBar from "@/components/layout/topbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
}
