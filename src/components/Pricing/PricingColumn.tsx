// removed unused imports

import { IPricing } from "@/types";

interface Props {
  tier: IPricing;
  highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
  const { name, price, features } = tier;

  return (
    <div
      className={`group relative bg-white rounded-[28px] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 ${
        highlight
          ? "border-[#A6171C]"
          : "border-gray-200 hover:border-[#A6171C]/30"
      }`}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        <h3 className="text-2xl font-extrabold text-[#2d1a18] mb-2 font-[Kanit]">
          {name}
        </h3>
        <p className="text-[32px] md:text-[40px] font-extrabold text-[#A6171C] mb-4">
          {price}
        </p>
        <button
          className={`w-full py-3 px-8 rounded-xl font-bold transition-all duration-200 shadow-md ${
            highlight
              ? "bg-[#A6171C] hover:bg-[#8a1419] text-white"
              : "bg-[#F1C045] hover:bg-[#e6b23a] text-[#A6171C]"
          }`}
        >
          get started
        </button>
      </div>
      <div className="p-6 mt-1">
        <p className="font-bold mb-0 text-gray-800 uppercase tracking-wide text-xs">
          FEATURES
        </p>
        <p className="text-gray-600 mb-5 text-xs">
          Everything in basic, plus..
        </p>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-[#2d1a18]"
            >
              <span className="text-[#A6171C] leading-6">•</span>
              <span className="whitespace-pre-line">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#A6171C]/5 to-[#F1C045]/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default PricingColumn;
