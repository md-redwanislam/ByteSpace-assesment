import desc_1 from "@/public/desc-1.jpg";
import desc_2 from "@/public/desc-2.jpg";
import desc_3 from "@/public/desc-3.jpg";
import desc_4 from "@/public/desc-4.jpg";
import Image from "next/image";

const descImage = [desc_1, desc_2, desc_3, desc_4];
export default function Description() {
  return (
    <div className="flex w-full flex-col items-start gap-6">
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Description
      </h2>

      <p className="font-[family-name:var(--font-satoshi)] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
        Embark on an enlightening exploration into the world of digital creation
        with our comprehensive course, &quot;Build Digital Assets: A
        Comprehensive Guide.&quot; This transformative learning experience
        invites you to delve deep into the intricacies of crafting impactful
        digital content. From laying the groundwork with foundational concepts
        to mastering advanced techniques, this guide is meticulously curated to
        empower you with the skills essential for navigating the dynamic
        landscape of digital asset creation.
        <br />
        <br />
        In the initial modules, you&apos;ll establish a solid foundation by
        immersing yourself in the foundational concepts that form the backbone
        of digital asset creation. Understand the fundamental elements that
        constitute compelling digital content and gain proficiency in leveraging
        these elements to communicate effectively in the digital realm.
        <br />
        <br />
        As you progress through the course, you&apos;ll ascend to higher levels
        of expertise, delving into the nuances of design principles that drive
        impactful creations. Uncover the secrets behind effective visual
        communication, exploring color theory, typography, and layout strategies
        that elevate your digital assets to new heights. Engage in hands-on
        exercises that reinforce your understanding, allowing you to apply these
        principles in practical scenarios.
      </p>

      {/* Sneak Peak */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Sneak Peak
      </h2>

      <div className="flex w-full items-start justify-between gap-10">
        {descImage.map((desc, index) => (
          <Image
            key={index}
            className="h-[125px] w-[167px] rounded-[16px]"
            src={desc}
            alt="Description"
          />
        ))}
      </div>

      {/* Key Points */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Key Points
      </h2>

      <div className="flex flex-col items-start gap-3">
        <KeyPoint text="Foundational Concepts" />
        <KeyPoint text="Design Principles Mastery" />
        <KeyPoint text="Advanced Techniques in Digital Creation" />
        <KeyPoint text="Project Showcase and Critique" />
        <KeyPoint text="Optimizing for Various Platforms" />
        <KeyPoint text="Digital Asset Management Best Practices" />
        <KeyPoint text="Monetization Strategies" />
        <KeyPoint text="Capstone Project: Building Your Portfolio" />
      </div>
    </div>
  );
}

function KeyPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      {/* Check icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Z"
          fill="#003BE2"
        />
        <path
          d="m7.5 12 3 3 6-6"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="font-[family-name:var(--font-satoshi)] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
        {text}
      </span>
    </div>
  );
}
