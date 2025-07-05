import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";

import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  return (
    <div
      className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 ${
        highlight
          ? "border-[#A6171C] bg-gradient-to-br from-white via-white to-[#A6171C]/5"
          : "border-[#A6171C]/20 hover:border-[#A6171C]/40"
      }`}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-bold text-[#2d1a18] mb-4">{name}</h3>
        <p className="text-3xl md:text-5xl font-bold mb-6">
          <span
            className={clsx({
              "text-sunny": highlight,
              "text-ruby": !highlight,
            })}
          >
            {typeof price === "number" ? `$${price}` : price}
          </span>
          {typeof price === "number" && (
            <span className="text-lg font-normal text-gray-600">/mo</span>
          )}
        </p>
        <button
          className={`w-full py-4 px-8 rounded-xl font-semibold transition-colors duration-200 ${
            highlight
              ? "bg-[#A6171C] hover:bg-[#8a1419] text-white shadow-lg hover:shadow-xl"
              : "bg-[#F1C045] hover:bg-[#e5b63e] text-[#A6171C] shadow-md hover:shadow-lg"
          }`}
        >
          Get Started
        </button>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-0 text-gray-800">FEATURES</p>
        <p className="text-gray-600 mb-5">Everything in basic, plus...</p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <div className="w-5 h-5 rounded-full bg-[#A6171C] flex items-center justify-center flex-shrink-0">
                <BsFillCheckCircleFill className="h-3 w-3 text-white" />
              </div>
              <span className="text-[#2d1a18]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default PricingColumn;
