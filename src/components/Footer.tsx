import Link from "next/link";
import React from "react";
// import { FaFingerprint } from "react-icons/fa";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-t from-[#D6D0C5] via-[#f0e0d8] to-transparent text-[#2d1a18] py-10 mt-20 border-t-2 border-[#A6171C]/30">
      <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link href="/" className="flex items-center gap-2">
            {/* <FaFingerprint className="min-w-fit w-5 h-5 md:w-7 md:h-7" /> */}
            <h3 className="manrope text-xl font-semibold cursor-pointer ">
              {siteDetails.siteName}
            </h3>
          </Link>
          <p className="mt-3.5 text-[#4a3631]">{footerDetails.subheading}</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-[#4a3631]">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-[#A6171C]">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

          {/* {footerDetails.email && (
            <a
              href={`mailto:${footerDetails.email}`}
              className="block text-[#4a3631] hover:text-[#A6171C]"
            >
              Email: {footerDetails.email}
            </a>
          )} */}

          {footerDetails.telephone && (
            <a
              href={`tel:${footerDetails.telephone}`}
              className="block text-[#4a3631] hover:text-[#A6171C]"
            >
              Phone: {footerDetails.telephone}
            </a>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 flex-wrap">
              {Object.keys(footerDetails.socials).map((platformName) => {
                if (platformName && footerDetails.socials[platformName]) {
                  return (
                    <Link
                      href={footerDetails.socials[platformName]}
                      key={platformName}
                      aria-label={platformName}
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  );
                }
              })}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 md:text-center text-[#4a3631] px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
        {/* <p className="text-sm mt-2 text-gray-500">
          Made with &hearts; by{" "}
          <a href="https://nexilaunch.com" target="_blank">
            Nexi Launch
          </a>
        </p>
        <p className="text-sm mt-2 text-gray-500">
          UI kit by{" "}
          <a
            href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit"
            target="_blank"
          >
            Youthmind
          </a>
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;
