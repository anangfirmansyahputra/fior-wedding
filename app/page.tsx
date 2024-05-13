import Hero from "@/components/hero";
import SectionWelcome from "@/components/section-welcome";
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
