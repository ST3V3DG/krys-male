import Footer from "@/components/footer";
import Header from "@/components/header";
import { HeroSection } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
