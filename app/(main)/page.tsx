import CategoryTabs from "@/components/CategoryTabs";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import PublicitySection from "@/components/PublicitySection";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="text-[#F5F5F6]">
      <section className="relative min-h-256 overflow-hidden">
        {/* Hero content */}
        <Hero
          title="Get Access to Hundreds Courses Available"
          description="Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses."
          searchPlaceholder="Course, topic, creator"
          actionLabel="Search"
        />
        <PartnerLogos />
        <CategoryTabs />
        <CourseCard />
        <CTA />
        <Service />
        <PublicitySection />
        <Testimonial />
      </section>
    </main>
  );
}
