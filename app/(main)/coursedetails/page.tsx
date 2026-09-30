import CourseDetailsHeader from "@/components/course/CourseDetailsHeader";
import CourseInfos from "@/components/course/CourseInfos";
import Description from "@/components/course/Description";
import DetailsButton from "@/components/course/DetailsButton";
import Lessons from "@/components/course/Lessons";
import Reviews from "@/components/course/Reviews";
import VideoThumbnail from "@/components/course/VideoThumbnail";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details | ByteSpace",
  description:
    "Explore detailed course information, curriculum, learning outcomes, and everything you need to know before enrolling.",
};

const CourseDetails = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero / Video Area */}
      <section className="relative h-[865px] w-full overflow-visible bg-[#003BE2]">
        {/* Grid Background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)
            `,
            backgroundSize: "70px 70px",
          }}
        />
        <CourseDetailsHeader />

        <div className="relative mx-auto w-[1200px]">
          {/* Video */}
          <div className="absolute left-0 top-10">
            <VideoThumbnail />
          </div>

          {/* Course Info Card */}
          <div className="absolute right-0 top-10 z-20">
            <CourseInfos />
          </div>
        </div>
      </section>

      {/* Bottom content */}
      <section className="mx-auto w-[1200px]">
        <div className="w-[725px] pt-6">
          <DetailsButton
            about={<Description />}
            lessons={<Lessons />}
            reviews={<Reviews />}
          />
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
