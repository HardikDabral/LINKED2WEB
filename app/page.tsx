import Herosection from "./components/Herosection";
import About from "./components/About";
import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <main className="relative">
      <Herosection />
      <About />
      <WhyUs />
    </main>
  );
}
