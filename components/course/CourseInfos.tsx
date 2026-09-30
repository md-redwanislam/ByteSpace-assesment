import instructor from "@/public/course_instrutor.jpg";
import Image from "next/image";
type Lesson = {
  number: string;
  title: string;
  duration: string;
};

const lessons: Lesson[] = [
  {
    number: "01",
    title: "Introduction to Digital Assets",
    duration: "12 mins",
  },
  {
    number: "02",
    title: "Design Principles for Impacts",
    duration: "21 mins",
  },
  {
    number: "03",
    title: "Advanced Techniques in Digital Creation",
    duration: "16 mins",
  },
];

const includes = [
  "Learning Resources",
  "Quality Lesson Videos",
  "Certificate of Completion",
  "Private Consultation",
];

export default function CourseInfos() {
  return (
    <aside className="box-border w-[412px] rounded-[24px] border border-[#CED0D3] bg-white p-6">
      <div className="flex flex-col gap-6">
        {/* Lessons */}
        <section className="flex flex-col gap-6">
          <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
            112 Lessons (24 hours)
          </h2>

          <div className="flex flex-col gap-3">
            {lessons.map((lesson) => (
              <div
                key={lesson.number}
                className="flex items-start justify-between gap-4"
              >
                <div className="flex min-w-0 items-start gap-2">
                  <span className="shrink-0 text-[16px] font-medium leading-[120%] text-[#242528]">
                    {lesson.number}
                  </span>

                  <span className="text-[16px] font-medium leading-[120%] text-[#242528]">
                    {lesson.title}
                  </span>
                </div>

                <span className="shrink-0 text-[16px] font-normal leading-[160%] text-[#003BE2]">
                  {lesson.duration}
                </span>
              </div>
            ))}

            <p className="text-[16px] font-normal leading-[160%] text-[#4B4C53]">
              99 more videos
            </p>
          </div>
        </section>

        {/* Enrollment */}
        <section className="flex flex-col gap-6">
          <p className="text-[16px] font-normal leading-[160%] text-[#4B4C53]">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <div className="flex items-end">
            <span className="font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#003BE2]">
              $25
            </span>

            <span className="mb-0.5 text-[16px] font-normal leading-[160%] text-[#4B4C53]">
              /lifetime
            </span>
          </div>

          <button
            type="button"
            className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#D4FB20] px-6 py-3 text-[18px] font-medium leading-[120%] text-[#242528]"
          >
            Enroll Now
          </button>
        </section>

        {/* Includes */}
        <section className="flex flex-col gap-6">
          <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
            This course include
          </h2>

          <div className="flex flex-col gap-3">
            {includes.map((item) => (
              <div key={item} className="flex h-[26px] items-start gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center text-[#003BE2]">
                  {/* Replace with your icon component */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 4.5H14L19 9.5V19.5H5V4.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 4.5V9.5H19"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 13H16M8 16H14"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <span className="text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="h-px w-full bg-[#D1D1D1]" />

        {/* Creator */}
        <section className="flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <div className="size-[52px] shrink-0 overflow-hidden rounded-full bg-[#D9D9D9]">
              {/* Creator image */}
              <Image
                src={instructor}
                alt="PurePearl Studio"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-[18px] font-medium leading-[120%] text-[#242528]">
                PurePearl Studio
              </span>

              <span className="text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                Professional Creator
              </span>
            </div>
          </div>

          <p className="text-[16px] font-normal leading-[160%] text-[#4B4C53]">
            Ready to Dive In? Enroll Now and Start Building Your Digital Future!
          </p>

          <button
            type="button"
            className="flex h-[35px] w-fit items-center justify-center rounded-full border border-[#CED0D3] px-4 text-[16px] font-medium leading-[120%] text-[#4B4C53]"
          >
            See Full Profile
          </button>
        </section>
      </div>
    </aside>
  );
}
