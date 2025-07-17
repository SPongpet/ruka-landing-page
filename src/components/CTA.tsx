import { ctaDetails } from "@/data/cta";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section id="cta" className="mt-10 mb-5 lg:my-20">
      <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
        <div className="h-full w-full">
          <div className="rounded-3xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-ruby bg-[linear-gradient(to_right,#a6171c_1px,transparent_1px),linear-gradient(to_bottom,#951519_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div className="rounded-3xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#e31f26,transparent)]"></div>
          </div>

          <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
            <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-4xl">
              {ctaDetails.heading}
            </h2>

            <p className="mx-auto max-w-3xl md:px-5 text-lg mb-8">
              {ctaDetails.subheading}
            </p>

            <div className="mt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="bg-sunny hover:bg-sunny/90 text-ruby px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {ctaDetails.primaryCtaText}
              </Link>
              <Link
                href="/products"
                className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
              >
                {ctaDetails.secondaryCtaText}
              </Link>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-6 text-sm opacity-90"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
