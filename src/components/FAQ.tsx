"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20]">
      <div className="flex flex-col lg:flex-row gap-10 container mx-auto px-4">
        <div className="">
          <p className="hidden lg:block text-gray-300">FAQ&apos;S</p>
          <SectionTitle>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2d1a18] text-center mb-4">
              Frequently Asked Questions
            </h2>
          </SectionTitle>
          <p className="text-[#4a3631] text-center max-w-2xl mx-auto mb-12">
            Ask us anything!
          </p>
          {/* <a
            href="mailto:help@rukaworld.com"
            className="mt-3 block text-xl lg:text-4xl text-sunny font-semibold hover:underline text-center lg:text-left"
          >
            help@rukaworld.com
          </a> */}
        </div>

        <div className="w-full lg:max-w-2xl mx-auto border-b border-gray-600">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t border-gray-600">
                      <span className="font-semibold text-[#A6171C]">
                        {faq.question}
                      </span>
                      <span
                        className={`ml-2 transform transition-transform duration-200 text-[#A6171C] ${
                          open ? "rotate-180" : ""
                        }`}
                      >
                        {open ? (
                          <BiMinus className="w-5 h-5 text-sunny" />
                        ) : (
                          <BiPlus className="w-5 h-5 text-sunny" />
                        )}
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-4 text-[#4a3631] leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
