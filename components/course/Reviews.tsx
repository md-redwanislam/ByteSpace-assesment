import { Star } from "lucide-react";

import revierwer_4 from "@/public/h_image-1.png";
import revierwer_1 from "@/public/reviewer-1.png";
import revierwer_2 from "@/public/reviewer-2.png";
import revierwer_3 from "@/public/test-2.png";
import Image from "next/image";

const ratingBreakdown = [
  { rating: 5, count: 720, percentage: 92.28 },
  { rating: 4, count: 120, percentage: 36.49 },
  { rating: 3, count: 21, percentage: 9.48 },
  { rating: 2, count: 12, percentage: 3.51 },
  { rating: 1, count: 16, percentage: 5.26 },
];

const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: revierwer_1,
    text: '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: revierwer_2,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: revierwer_3,
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    date: "a year ago",
    avatar: revierwer_4,
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

function Stars({ size = 24 }: { size?: number }) {
  return (
    <div className="flex items-start gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={size} strokeWidth={0} fill="#4B4C53" />
      ))}
    </div>
  );
}

function RatingBreakdown() {
  return (
    <div className="flex h-[226px] w-full items-center justify-center gap-6 rounded-2xl border border-[#CED0D3] bg-white p-10 backdrop-blur-[10px]">
      {/* Overall rating */}
      <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg bg-[#D4FB20] p-10">
        <span className="font-['Satoshi'] text-[14px] font-medium leading-[120%] text-[#242528]">
          Ratings
        </span>

        <span className="font-['Poppins'] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
          4.7
        </span>
      </div>

      {/* Rating bars */}
      <div className="flex h-[146px] min-w-0 flex-1 flex-col gap-1">
        {ratingBreakdown.map((item) => (
          <div
            key={item.rating}
            className="flex h-[26px] w-full items-center gap-4"
          >
            {/* Progress bar */}
            <div className="relative h-2 min-w-0 flex-1 overflow-hidden rounded-[24px] bg-[#E5E6E8]">
              <div
                className="absolute left-0 top-0 h-2 rounded-[24px] bg-[#D4FB20]"
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>

            {/* Stars */}
            <Stars />

            {/* Count */}
            <span className="w-10 shrink-0 text-right font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
              {item.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewFilters() {
  const filters = ["All rating", "5", "4", "3", "2", "1"];

  return (
    <div className="flex h-12 items-start gap-4">
      {filters.map((filter, index) => (
        <button
          key={filter}
          type="button"
          className={[
            "flex h-12 items-center justify-center gap-1 rounded-[24px] px-4 font-['Satoshi'] text-[16px] font-medium leading-[120%]",
            index === 0
              ? "h-[43px] bg-[#D4FB20] text-[#242528]"
              : "bg-[#F5F5F6] text-[#4B4C53]",
          ].join(" ")}
        >
          {index !== 0 && <Star size={24} strokeWidth={0} fill="#4B4C53" />}

          {filter}
        </button>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  role,
  date,
  avatar,
  text,
}: (typeof reviews)[number]) {
  return (
    <article className="box-border flex w-full flex-col items-start gap-6 rounded-[24px] border border-[#CED0D3] p-10">
      {/* Reviewer information */}
      <div className="flex w-full items-start justify-between gap-6">
        <div className="flex w-[257px] flex-col items-start gap-6">
          <div className="flex h-[52px] w-full items-start gap-3">
            <Image
              src={avatar}
              alt={name}
              className="h-[52px] w-[52px] shrink-0 rounded-full object-cover"
            />

            <div className="flex w-[193px] flex-col items-start">
              <span className="font-['Satoshi'] text-[18px] font-medium leading-[120%] text-[#242528]">
                {name}
              </span>

              <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
                {role}
              </span>
            </div>
          </div>

          <Stars />
        </div>

        <span className="font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
          {date}
        </span>
      </div>

      {/* Review */}
      <p className="w-full font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
        {text}
      </p>
    </article>
  );
}

export default function Reviews() {
  return (
    <section className="flex w-full max-w-[723px] flex-col items-start gap-6">
      {/* Heading */}
      <h2 className="font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        What Learners Are Saying
      </h2>

      {/* Description */}
      <p className="w-full font-['Satoshi'] text-[16px] font-normal leading-[160%] text-[#4B4C53]">
        Discover what our learners have to say about their experience with
        &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews
        and ratings from individuals who have embarked on the transformative
        journey of mastering digital asset creation.
      </p>

      {/* Rating summary */}
      <RatingBreakdown />

      {/* Individual reviews heading */}
      <h2 className="font-['Poppins'] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Individual Reviews:
      </h2>

      {/* Filters */}
      <ReviewFilters />

      {/* Reviews */}
      {reviews.map((review) => (
        <ReviewCard key={review.name} {...review} />
      ))}
    </section>
  );
}
