import { Share2, SignalHigh, Star, Users } from "lucide-react";

type CourseDetailsHeaderProps = {
  title?: string;
  subtitle?: string;
  creator?: string;
  level?: string;
  rating?: string;
  students?: string;
};

export default function CourseDetailsHeader({
  title = "Build Digital Asset: A Comprehensive Guide",
  subtitle = "Unlock the Power of Digital Creation with Expert Guidance",
  creator = "purepearl studio",
  level = "Intermediate",
  rating = "4.8 (172 reviews)",
  students = "199 Students",
}: CourseDetailsHeaderProps) {
  return (
    <section className="w-full ">
      <div className="mx-auto w-full max-w-[1202px] px-6 py-10 lg:px-0 lg:py-[52px]">
        <div className="flex flex-col gap-6">
          {/* Title + Share */}
          <div className="flex w-full items-start justify-between gap-8">
            {/* Left Content */}
            <div className="flex max-w-[769px] flex-col items-start gap-6">
              {/* Title + Subtitle */}
              <div className="flex flex-col items-start gap-1.5">
                <h1 className="whitespace-nowrap font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
                  {title}
                </h1>

                <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
                  {subtitle}
                </h2>
              </div>

              {/* Creator */}
              <p className="text-lg font-medium leading-[120%] text-[#F5F5F6]">
                by <span className="text-[#D4FB20]">{creator}</span>
              </p>
            </div>

            {/* Share */}
            <button
              type="button"
              className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-[#D4FB20] px-6 backdrop-blur-[20px]"
            >
              <Share2 size={24} strokeWidth={1.8} className="text-[#242528]" />

              <span className="text-base font-medium leading-6 text-[#242528]">
                Share
              </span>
            </button>
          </div>

          {/* Course Information */}
          <div className="flex flex-wrap items-center gap-4">
            {/* Level */}
            <div className="flex h-10 items-center justify-center gap-2 rounded-full bg-white px-6 backdrop-blur-[20px]">
              <SignalHigh
                size={24}
                strokeWidth={1.8}
                className="text-[#003BE2]"
              />

              <span className="text-base font-medium leading-[120%] text-[#242528]">
                {level}
              </span>
            </div>

            {/* Rating */}
            <div className="flex h-10 items-center justify-center gap-2 rounded-full bg-white px-6 backdrop-blur-[20px]">
              <Star
                size={24}
                strokeWidth={1.8}
                className="text-[#003BE2] fill-[#003BE2] "
              />

              <span className="text-base font-medium leading-[120%] text-[#242528]">
                {rating}
              </span>
            </div>

            {/* Students */}
            <div className="flex h-10 items-center justify-center gap-2 rounded-full bg-white px-6 backdrop-blur-[20px]">
              <Users size={24} strokeWidth={1.8} className="text-[#003BE2]" />

              <span className="text-base font-medium leading-[120%] text-[#242528]">
                {students}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
