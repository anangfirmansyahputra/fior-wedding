import About from "@/components/about";
import Hero from "@/components/hero";
import HireUs from "@/components/hire-us";
import Package from "@/components/package";
import SectionWelcome from "@/components/section-welcome";
import Services from "@/components/services";
import Template from "@/components/template";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <Template>
      <Hero />
      <SectionWelcome />
      {/* <About /> */}
      {/* <Services /> */}
      {/* <Package /> */}
      {/* <HireUs /> */}
      <Testimonial />
    </Template>
  );
}
