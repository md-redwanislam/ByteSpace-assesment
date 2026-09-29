import test_1 from "@/public/test-1.png";
import test_2 from "@/public/test-2.png";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    image: test_1,
    text: `"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."`,
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    image: test_2,
    text: `"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."`,
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    image: test_2,
    text: `"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."`,
  },
];

export default function Testimonial() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA]">
      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[280px] -top-[241px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(circle, rgba(203,252,1,0.4) 0%, rgba(203,252,1,0.092) 53%, rgba(203,252,1,0.024) 75%, rgba(203,252,1,0) 100%)",
        }}
      />

      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[395px] -top-[138px] h-[672px] w-[672px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(circle, rgba(203,252,1,0.6) 0%, rgba(203,252,1,0.138) 53%, rgba(203,252,1,0.036) 75%, rgba(203,252,1,0) 100%)",
        }}
      />

      {/* Decorative gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[442px] top-[149px] h-[1137px] w-[1137px] rounded-full blur-[20px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,59,226,0.24) 0%, rgba(0,59,226,0.0552) 53%, rgba(0,59,226,0.0144) 75%, rgba(0,59,226,0) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative mx-auto flex w-full max-w-[1204px] flex-col gap-[72px] px-6 py-[74px]">
        {/* Heading + description */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-[43px]">
          <h2 className="max-w-[577px] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-black lg:text-[44px]">
            Discover What Our Community Is Saying
          </h2>

          <p className="max-w-[580px] text-[16px] font-normal leading-[160%] text-[#4F4F4F] lg:text-[18px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-[41px]">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[407px] flex-col rounded-[24px] bg-white p-6"
            >
              {/* Avatar */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover"
              />

              {/* Name + role */}
              <div className="mt-6 flex flex-col">
                <h3 className="font-[Poppins] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-black">
                  {testimonial.name}
                </h3>

                <p className="font-[Satoshi] text-[18px] font-normal leading-[160%] text-[#003BE2]">
                  {testimonial.role}
                </p>
              </div>

              {/* Testimonial */}
              <p className="mt-6 font-[Satoshi] text-[18px] font-normal leading-[160%] text-[#4F4F4F]">
                {testimonial.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
