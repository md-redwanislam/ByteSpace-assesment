import boy from "@/public/boy.png";
import card_1 from "@/public/card-1.jpg";
import girl from "@/public/girl.png";
import spring_1 from "@/public/spring-1.png";
import spring_2 from "@/public/spring-2.png";
import Image from "next/image";
import CourseAvatar from "./CourseAvatar";
import HappCardAvatar from "./HappCardAvatar";

function CheckIcon() {
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#003BE2] text-[11px] font-bold text-white">
      ✓
    </span>
  );
}

function LimeShape({ className = "" }: { src: string; className?: string }) {
  return (
    <Image
      src={spring_2}
      alt=""
      width={180}
      height={180}
      className={`pointer-events-none absolute object-contain ${className}`}
    />
  );
}
function RShape({ className = "" }: { src: string; className?: string }) {
  return (
    <Image
      src={spring_1}
      alt=""
      width={180}
      height={180}
      className={`pointer-events-none absolute object-contain ${className}`}
    />
  );
}

export default function PublicitySection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* =========================================================
          BACKGROUND BLOBS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Lime - top left */}
        <div
          className="absolute -left-[180px] -top-[420px] h-[850px] w-[850px] rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, rgba(203,252,1,0.34) 0%, rgba(203,252,1,0.09) 52%, rgba(203,252,1,0) 75%)",
          }}
        />

        {/* Blue - top right */}
        <div
          className="absolute -right-[280px] -top-[300px] h-[900px] w-[900px] rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,59,226,0.10) 0%, rgba(0,59,226,0.025) 55%, rgba(0,59,226,0) 75%)",
          }}
        />

        {/* Blue - middle right */}
        <div
          className="absolute -right-[220px] top-[450px] h-[900px] w-[900px] rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,59,226,0.20) 0%, rgba(0,59,226,0.05) 55%, rgba(0,59,226,0) 75%)",
          }}
        />

        {/* Blue - bottom left */}
        <div
          className="absolute -left-[500px] top-[600px] h-[900px] w-[900px] rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, rgba(0,59,226,0.12) 0%, rgba(0,59,226,0.025) 55%, rgba(0,59,226,0) 75%)",
          }}
        />

        {/* Lime - bottom left */}
        <div
          className="absolute -bottom-[350px] -left-[260px] h-[650px] w-[650px] rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, rgba(203,252,1,0.40) 0%, rgba(203,252,1,0.08) 55%, rgba(203,252,1,0) 75%)",
          }}
        />
      </div>

      {/* =========================================================
          CONTENT
      ========================================================== */}

      <div className="relative mx-auto w-full max-w-[1258px] px-5 py-20 lg:px-0">
        {/* =======================================================
            FIRST ROW
        ======================================================== */}

        <div className="grid items-center gap-12 lg:grid-cols-[574px_1fr] lg:gap-[63px]">
          {/* LEFT TEXT */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <h2 className="max-w-[577px] text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[40px] lg:text-[44px]">
              Your Path to Professional Growth Starts Here!
            </h2>

            <p className="max-w-[477px] text-[16px] leading-[1.6] text-[#4B4C53] lg:text-[18px]">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Statistics */}
            <div className="flex items-end gap-10 sm:gap-14">
              <div>
                <div className="font-poppins text-[32px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2] lg:text-[36px]">
                  12K
                </div>

                <div className="text-[16px] leading-[1.6] text-[#4B4C53] lg:text-[18px]">
                  Students
                </div>
              </div>

              <div>
                <div className="font-poppins text-[32px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2] lg:text-[36px]">
                  70+
                </div>

                <div className="text-[16px] leading-[1.6] text-[#4B4C53] lg:text-[18px]">
                  Course
                </div>
              </div>

              <div>
                <div className="font-poppins text-[32px] font-medium leading-[44px] tracking-[-0.01em] text-[#003BE2] lg:text-[36px]">
                  16
                </div>

                <div className="text-[16px] leading-[1.6] text-[#4B4C53] lg:text-[18px]">
                  Creators
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto h-[520px] w-full max-w-[621px] lg:h-[552px]">
            {/* Course card - BEHIND PERSON */}
            <div className="absolute left-0 top-0 z-10 hidden w-[373px] rounded-[24px] border border-[#CED0D3] bg-white p-4 shadow-sm sm:block">
              {/* Course image */}
              <div className="relative h-[195px] overflow-hidden rounded-xl bg-[#443131]">
                <Image
                  src={card_1}
                  alt=""
                  width={577}
                  height={540}
                  priority
                  className="absolute inset-0"
                />

                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#4F4F4F] backdrop-blur">
                    17 Lessons
                  </span>

                  <span className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#4F4F4F] backdrop-blur">
                    2 hours 16 mins
                  </span>

                  <span className="rounded-full bg-white/70 px-3 py-1.5 text-[10px] font-medium text-[#4F4F4F] backdrop-blur">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Course content */}
              <div className="mt-4">
                <h3 className="font-poppins text-[20px] font-semibold leading-7 text-black">
                  Learn Figma from Basic
                </h3>

                <p className="text-xs leading-5 text-[#4F4F4F]">
                  by purepearl studio
                </p>

                <div className="absolute left-1 top-[270px] flex items-center gap-2">
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
                    <CourseAvatar />

                    <div className="-ml-3 flex h-[43px] w-[43px] items-center justify-center rounded-full border-2 border-[#D4FB20] bg-[#D4FB20]">
                      <span className="font-sans text-[12px] font-medium text-[#242528]">
                        26+
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 flex items-center justify-between">
                  <div className="flex items-baseline">
                    <span className="font-poppins text-[20px] font-medium text-[#003BE2]">
                      $25
                    </span>

                    <span className="ml-1 text-xs text-[#4F4F4F]">
                      /lifetime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Person - ABOVE COURSE CARD */}
            <Image
              src={boy}
              alt=""
              width={577}
              height={540}
              priority
              className="absolute left-0 top-3 z-20 h-full w-full object-contain drop-shadow-[30px_35px_40px_rgba(0,0,0,0.14)]"
            />

            {/* Learning progress - ABOVE PERSON */}
            <div className="absolute right-0 top-[160px] z-30 w-[210px] rounded-2xl bg-white p-4 shadow-sm backdrop-blur-md sm:w-[232px]">
              <p className="text-sm font-medium leading-6 text-[#242528]">
                Learning Progress
              </p>

              <p className="font-poppins mt-1 text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528]">
                55%
              </p>

              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F6F6F6]">
                <div className="h-full w-[56%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>
            <RShape
              src="/images/publicity/lime-shape-2.png"
              className="right-[2px] top-[75px] z-40 h-[150px] w-[150px]"
            />
          </div>
        </div>

        {/* =======================================================
            SECOND ROW
        ======================================================== */}

        <div className="mt-20 grid items-center gap-12 lg:mt-[72px] lg:grid-cols-[541px_1fr] lg:gap-[79px]">
          {/* LEFT VISUAL */}
          <div className="relative mx-auto h-[520px] w-full max-w-[541px] lg:h-[596px]">
            <div className="absolute left-15 top-[64px] z-10 w-[232px] rounded-2xl bg-[#003BE2] p-4 shadow-sm">
              <div className="text-sm font-medium leading-[19px] text-[#F5F5F6]">
                Total Revenue
              </div>

              <div className="text-[10px] leading-3 text-[#F5F5F6]">
                July 1-28
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-poppins text-[20px] font-semibold leading-8 text-[#F5F5F6]">
                  $120.29
                </span>

                <span className="rounded-full bg-[#CBFC01] px-2 py-0.5 text-[10px] font-medium text-[#242528]">
                  +12$
                </span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-white">
                <div className="h-full w-[56%] rounded-full bg-[#D4FB20]" />
              </div>
            </div>

            <div className="absolute left-18 top-[194px] z-10 w-[134px] rounded-2xl bg-[#003BE2] p-4 shadow-sm">
              <div className="text-sm font-medium leading-[19px] text-[#F5F5F6]">
                Year to Date
              </div>

              <div className="text-[10px] leading-3 text-[#F5F5F6]">2023</div>

              <div className="mt-2 font-poppins text-[20px] font-semibold leading-8 text-[#F5F5F6]">
                $1,200.38
              </div>

              <span className="mt-1 inline-flex rounded-full bg-[#CBFC01] px-2 py-0.5 text-[10px] font-medium text-[#242528]">
                +12$
              </span>
            </div>

            <Image
              src={girl}
              alt=""
              width={435}
              height={596}
              className="absolute left-1/2 top-0 z-20 h-full w-[435px] max-w-none -translate-x-1/2 object-contain drop-shadow-[30px_35px_40px_rgba(0,0,0,0.14)]"
            />

            <div className="absolute bottom-[60px] right-0 z-30 w-[258px] rounded-2xl bg-white p-4 shadow-sm backdrop-blur-md">
              <div className="text-sm font-medium leading-6 text-[#242528]">
                Happy Students
              </div>

              <div className="flex items-center gap-1">
                <span className="text-[10px] font-bold text-[#242528]">
                  4.5 (240)
                </span>

                <span className="text-sm text-[#D4FB20]">★</span>
              </div>

              <div className="mt-2 flex">
                <HappCardAvatar />

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4FB20] text-[11px] font-bold text-[#242528]">
                  2K+
                </div>
              </div>
            </div>

            {/* Lime object - ABOVE EVERYTHING */}
            <LimeShape
              src="/images/publicity/lime-shape-2.png"
              className="right-[90px] top-[160px] z-40 h-[150px] w-[150px]"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <h2 className="max-w-[391px] text-[36px] font-semibold leading-[1.2] tracking-[-0.01em] text-[#242528] sm:text-[40px] lg:text-[44px]">
              Create &amp; Manage Courses Easily.
            </h2>

            <p className="max-w-[574px] text-[16px] font-medium leading-7 text-[#242528] lg:text-[18px]">
              ByteSpace supports individuals or entities in the creation,
              publication, and administration of educational courses.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CheckIcon />

                <span className="text-[16px] font-medium leading-[22px] text-[#242528] lg:text-[18px]">
                  Share Your Expertise
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon />

                <span className="text-[16px] font-medium leading-[22px] text-[#242528] lg:text-[18px]">
                  Monetize Your Passion
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon />

                <span className="text-[16px] font-medium leading-[22px] text-[#242528] lg:text-[18px]">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CheckIcon />

                <span className="text-[16px] font-medium leading-[22px] text-[#242528] lg:text-[18px]">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
