import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Products from "@/components/Products";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      {/* <Logos /> */}
      <Container>
        <Products />

        <Benefits />

        <Section
          id="pricing"
          title="แพ็คเกจราคา"
          description="เลือกแพ็คเกจที่เหมาะสมกับความต้องการและงบประมาณของคุณ"
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="ลูกค้าพูดถึงเรา"
          description="ฟังเสียงจากลูกค้าที่เลือกใช้บริการของเรา"
        >
          <Testimonials />
        </Section>

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
