import { ctaDetails } from "@/data/cta";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#7b1a1b] to-[#de2a29] -mx-[calc((100vw-100%)/2)] px-[calc((100vw-100%)/2)]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            {ctaDetails.heading}
          </h2>

          <p className="text-lg md:text-xl text-white mb-12 max-w-3xl mx-auto">
            {ctaDetails.subheading}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#8B4513] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {ctaDetails.primaryCtaText}
            </Link>
            <Link
              href="/products"
              className="bg-[#F1C045] hover:bg-[#e5b63e] text-[#8B4513] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {ctaDetails.secondaryCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
