import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type BaseLayoutProps = {
  children: ReactNode;
};

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 