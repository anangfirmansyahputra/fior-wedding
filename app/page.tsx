import CreateWedding from "@/components/create-wedding";
import Hero from "@/components/hero";
import HowHelp from "@/components/how-help";
import SectionWelcome from "@/components/section-welcome";
import Template from "@/components/template";
import Testimonial from "@/components/testimonial";

export default function Home() {
  return (
    <Template>
      <Hero />
      <SectionWelcome />
      <HowHelp />
      <Testimonial />
      <CreateWedding />
    </Template>
  );
}
