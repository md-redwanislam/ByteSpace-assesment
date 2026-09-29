import Image from "next/image";

import card_1 from "@/public/card-1.jpg";
import card_2 from "@/public/card-2.jpg";
import card_3 from "@/public/card-3.jpg";
import card_4 from "@/public/card-4.jpg";
import card_5 from "@/public/card-5.jpg";
import card_6 from "@/public/card-6.jpg";

import CourseMetadata from "./CourseMetadata";

const courseInfos = [
  {
    image: card_1,
    title: "Learn Figma from Basic",
  },
  {
    image: card_2,
    title: "Build Digital Asset",
  },
  {
    image: card_3,
    title: "the Power of Big Data",
  },
  {
    image: card_4,
    title: "Balancing Productivity and Self-Care",
  },
  {
    image: card_5,
    title: "Mastering Money Management",
  },
  {
    image: card_6,
    title: "From Idea to Startup Success",
  },
];

const CourseCard = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1202px] px-6 py-20 lg:px-0">
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courseInfos.map((course) => (
            <article
              key={course.title}
              className="relative h-[384px] w-full max-w-[373px] rounded-[24px] border border-[#CED0D3] bg-white p-4"
            >
              {/* Thumbnail */}
              <div className="relative h-[195px] w-full overflow-hidden rounded-[12px]">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  sizes="373px"
                  className="object-cover"
                />
                <CourseMetadata positionClass="left-3 top-[155px]" />
              </div>

              {/* Title + author + rating */}
              <div className="absolute left-4 right-4 top-[232px] flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <h3 className="truncate font-[var(--font-poppins)] text-[20px] font-semibold leading-[24px] tracking-[-0.01em] text-black">
                    {course.title}
                  </h3>

                  <p className="font-sans text-[12px] font-normal leading-[19px] text-[#4F4F4F]">
                    by purepearl studio
                  </p>
                </div>

                <div className="flex shrink-0 items-center">
                  <span className="font-sans text-[18px] font-normal leading-[27px] text-[#4F4F4F]">
                    4.5
                  </span>

                  <span className="ml-1 text-[20px] leading-6 text-[#CED0D3]">
                    ☆
                  </span>
                </div>
              </div>

              {/* Level + avatars */}
              <div className="absolute left-4 top-[296px] flex items-center gap-3">
                {/* Level */}
                <div className="flex h-8 items-center gap-1 rounded-full bg-[#F5F5F6] px-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 20V16H7V20H4ZM9 20V12H12V20H9ZM14 20V8H17V20H14ZM19 20V4H22V20H19Z"
                      fill="#4B4C53"
                    />
                  </svg>

                  <span className="font-sans text-[12px] font-medium leading-[14px] text-[#4B4C53]">
                    Beginner
                  </span>
                </div>

                {/* Avatars */}
                <div className="flex items-center">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Image
                      key={index}
                      src={course.image}
                      alt=""
                      width={32}
                      height={32}
                      className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover first:ml-0"
                    />
                  ))}

                  <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#D4FB20]">
                    <span className="font-sans text-[10px] font-medium text-[#242528]">
                      26+
                    </span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="absolute bottom-4 left-4 flex items-end">
                <span className="font-[var(--font-poppins)] text-[20px] font-semibold leading-6 text-[#003BE2]">
                  $25
                </span>

                <span className="ml-1 font-sans text-[12px] leading-[19px] text-[#4F4F4F]">
                  /lifetime
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCard;
