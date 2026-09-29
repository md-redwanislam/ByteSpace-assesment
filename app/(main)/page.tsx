import CategoryTabs from "@/components/CategoryTabs";
import CourseCard from "@/components/CourseCard";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import PartnerLogos from "@/components/PartnerLogos";
import Service from "@/components/Service";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="text-[#F5F5F6] ">
      <section className="relative min-h-256 overflow-hidden">
        {/* Hero content */}
        <Hero />
        <PartnerLogos />
        <CategoryTabs />
        <CTA />
        <CourseCard />
        <Service />
        {/* <PublicitySection /> */}
        <Testimonial />
      </section>
    </main>
  );
}
