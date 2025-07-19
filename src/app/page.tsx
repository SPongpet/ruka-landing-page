import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
// import Logos from "@/components/Logos";
import Products from "@/components/Products";
import Container from "@/components/Container";
import Section from "@/components/Section";
import CTA from "@/components/CTA";
import OneStopExperience from "@/components/OneStopExperience";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <div className="min-h-screen bg-gradient-to-br from-[#fdf8f6] via-[#f0e0d8] to-[#D6D0C5] pt-24 pb-16">
        {/* <Logos /> */}
        <Container>
          <OneStopExperience />

          <Products />

          {/* <Benefits /> */}

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

          {/* <Stats /> */}

          <CTA />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
