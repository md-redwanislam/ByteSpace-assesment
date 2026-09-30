import CourseCard from "@/components/CourseCard";
import CreatorProfile from "@/components/CreatorProfile";
import Label from "@/components/Label";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Creator | ByteSpace",
  description:
    "Learn more about the instructor behind the course, including their expertise, experience, and teaching background.",
};
const CreatorPage = () => {
  return (
    <>
      <CreatorProfile />
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1202px] px-6 py-8 lg:px-0">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            {/* Left */}
            <div className="flex flex-wrap items-center gap-4">
              <Label variant="filter" />
              <Label variant="level" />
              <Label variant="category" />
            </div>

            {/* Right */}
            <Label variant="relevant" />
          </div>
        </div>
      </section>
      <CourseCard />
    </>
  );
};

export default CreatorPage;
