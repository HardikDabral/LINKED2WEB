import Herosection from "./components/Herosection";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import Faq from "./components/Faq";
import CoolSection from "./components/CoolSection";
import Cool2 from "./components/cool2";
import Pricing from "./components/Pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <Herosection />
      <About />
      <CoolSection />
      <WhyUs />
      <Cool2 />
      {/* <Pricing /> */}
      <Faq />
    </main>
  );
}
