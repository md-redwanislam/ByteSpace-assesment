import backCard from "@/public/card-2.jpg";
import frontCard from "@/public/card-3.jpg";
import cone from "@/public/cone.png";
import spring from "@/public/spring-1.png";
import triangle from "@/public/triangle.png";
import Image from "next/image";
import CourseAvatar from "../CourseAvatar";
import CourseMetadata from "../CourseMetadata";
import HappCardAvatar from "../HappCardAvatar";
export default function AuthArtwork() {
  return (
    <div className="pointer-events-none absolute left-[6.74%] top-[29.78%] h-[585px] w-[548px]">
      {/* Back course card */}
      <div className="absolute left-0 top-[89px] h-[384px] w-[373px] rotate-0 rounded-[24px] border border-[#CED0D3] bg-white">
        <Image
          src={backCard}
          alt="Tumbnail"
          className="absolute left-4 top-4 h-[195px] w-[341px] rounded-[12px] object-cover"
        />
        {/* Course metadata */}
        <CourseMetadata positionClass="left-8 top-[175px]" />
        <div className="absolute left-4 top-[232px]">
          <h3 className="font-[var(--font-poppins)] text-[20px] font-semibold leading-7 tracking-[-0.01em] text-black">
            the Power of Big Data
          </h3>

          <p className="font-sans text-[12px] leading-5 text-[#4F4F4F]">
            by purepearl studio
          </p>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-[232px] flex items-center">
          <span className="font-sans text-[18px] font-medium leading-7 text-[#4F4F4F]">
            4.5
          </span>

          <span className="ml-1 text-[#D4FB20]">★</span>
        </div>

        {/* Beginner badge */}
        <div className="absolute left-4 top-[296px] flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-[#F5F5F6] px-3 py-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 20V16H7V20H4ZM9 20V12H12V20H9ZM14 20V8H17V20H14ZM19 20V4H22V20H19Z"
                fill="#4B4C53"
              />
            </svg>

            <span className="font-sans text-[12px] font-medium leading-5 text-[#4B4C53]">
              Beginner
            </span>
          </div>

          <div className="flex items-center">
            <CourseAvatar />
            <div className="-ml-3 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">
              26+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <span className="font-[var(--font-poppins)] text-[20px] font-medium text-[#003BE2]">
            $25
          </span>

          <span className="ml-1 font-sans text-[12px] text-[#4F4F4F]">
            /lifetime
          </span>
        </div>
      </div>

      {/* Main course card */}
      <div className="absolute left-[111px] top-0 h-[384px] w-[373px] rounded-[24px] border border-[#CED0D3] bg-white">
        <Image
          src={frontCard}
          alt="Thumbnail"
          loading="eager"
          className="absolute left-4 top-4 h-[195px] w-[341px] rounded-[12px] object-cover"
        />
        <CourseMetadata positionClass="left-8 top-[175px]" />

        {/* Course information */}
        <div className="absolute left-4 top-[232px]">
          <h3 className="font-[var(--font-poppins)] text-[20px] font-semibold leading-7 tracking-[-0.01em] text-black">
            the Power of Big Data
          </h3>

          <p className="font-sans text-[12px] leading-5 text-[#4F4F4F]">
            by purepearl studio
          </p>
        </div>

        {/* Rating */}
        <div className="absolute right-4 top-[232px] flex items-center">
          <span className="font-sans text-[18px] font-medium leading-7 text-[#4F4F4F]">
            4.5
          </span>

          <span className="ml-1 text-[#D4FB20]">★</span>
        </div>

        {/* Beginner badge */}
        <div className="absolute left-4 top-[296px] flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full bg-[#F5F5F6] px-3 py-1.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 20V16H7V20H4ZM9 20V12H12V20H9ZM14 20V8H17V20H14ZM19 20V4H22V20H19Z"
                fill="#4B4C53"
              />
            </svg>

            <span className="font-sans text-[12px] font-medium leading-5 text-[#4B4C53]">
              Beginner
            </span>
          </div>

          <div className="flex items-center">
            <CourseAvatar />
            <div className="-ml-3 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">
              26+
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 left-4">
          <span className="font-[var(--font-poppins)] text-[20px] font-medium text-[#003BE2]">
            $25
          </span>

          <span className="ml-1 font-sans text-[12px] text-[#4F4F4F]">
            /lifetime
          </span>
        </div>
      </div>

      {/* Happy students */}
      <div className="absolute left-[251px] top-[435px] h-[123px] w-[258px] rounded-[16px] bg-[#D4FB20] p-4">
        <div>
          <p className="font-sans text-[16px] font-medium leading-6 text-[#242528]">
            Happy Students
          </p>

          <div className="flex items-center">
            <span className="font-sans text-[10px] font-bold text-[#242528]">
              4.5 (240)
            </span>

            <span className="ml-1 text-sm text-[#003BE2]">★</span>
          </div>
        </div>

        <div className="mt-2 flex">
          <HappCardAvatar />
          <div className="-ml-3 flex h-[43px] w-[43px] items-center justify-center rounded-full bg-[#242528] text-[12px] font-bold text-white">
            2K+
          </div>
        </div>
      </div>

      {/* Decorative cone */}
      <Image
        src={cone}
        alt="Cone"
        className="absolute -left-[0.1px] top-[10px] w-[146px] "
      />

      <Image
        src={triangle}
        alt="Triangle"
        className="absolute -left-[20px] top-[390px] w-[188px]"
      />

      <Image
        src={spring}
        alt="Decoration"
        className="absolute left-[350px] top-[300px] w-[188px]"
      />
    </div>
  );
}
