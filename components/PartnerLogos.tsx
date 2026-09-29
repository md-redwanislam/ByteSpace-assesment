import Image from "next/image";

import logo_1 from "@/public/logo-1.png";
import logo_2 from "@/public/logo-2.png";
import logo_3 from "@/public/logo-3.png";
import logo_4 from "@/public/logo-4.png";

const partners = [
  { name: "Partner One", logo: logo_1 },
  { name: "Partner Two", logo: logo_2 },
  { name: "Partner Three", logo: logo_3 },
  { name: "Partner Four", logo: logo_4 },
];

export default function PartnerLogos() {
  return (
    <section className="bg-[#F5F5F6]">
      <div className="mx-auto flex min-h-[202px] max-w-[1132px] items-center justify-center">
        <div className="flex w-full items-center justify-between gap-8 px-6 md:gap-[72px] md:px-0">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-[42px] flex-1 items-center justify-center"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className="h-auto max-h-[42px] w-auto object-contain"
              />{" "}
              <span className="top-[11.79px] font-bold left-[103.3px] text-[17.16px] leading-[17.16px] text-[#82868E]">
                Logoipsum
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
