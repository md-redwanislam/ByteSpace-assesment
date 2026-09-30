const lessons = [
  {
    title: "Module 1: Introduction to Digital Assets",
    description:
      "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    description:
      "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    description:
      "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    description:
      "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    description:
      "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    description:
      "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

export default function Lessons() {
  return (
    <div className="flex w-[723px] flex-col items-start gap-6">
      {/* Explore the Modules */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Explore the Modules
      </h2>

      <p className="w-[723px] font-[family-name:var(--font-satoshi)] text-base font-normal leading-[160%] text-[#4B4C53]">
        Immerse yourself in the course content as we break down each module into
        comprehensive lessons, providing practical insights and hands-on
        experiences.
      </p>

      {/* Lesson List */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Lesson List
      </h2>

      <div className="flex w-[723px] flex-col gap-4">
        {lessons.map((lesson) => (
          <LessonItem
            key={lesson.title}
            title={lesson.title}
            description={lesson.description}
          />
        ))}
      </div>

      {/* Lesson Content */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Lesson Content
      </h2>

      <p className="w-[723px] font-[family-name:var(--font-satoshi)] text-base font-normal leading-[160%] text-[#4B4C53]">
        Engage with each lesson through captivating video content, detailed
        textual explanations, and interactive elements. Download resources,
        complete assignments, and test your understanding with quizzes.
      </p>

      {/* Lesson Progress Tracking */}
      <h2 className="font-[family-name:var(--font-poppins)] text-[20px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
        Lesson Progress Tracking
      </h2>

      <p className="w-[723px] font-[family-name:var(--font-satoshi)] text-base font-normal leading-[160%] text-[#4B4C53]">
        Witness your growth as you complete lessons, with an intuitive progress
        tracking feature guiding you through your learning journey.
      </p>

      {/* Progress */}
      <div className="box-border flex h-[116px] w-[723px] flex-col items-start gap-2 rounded-[16px] border border-[#CED0D3] bg-white p-4">
        <span className="font-[family-name:var(--font-satoshi)] text-[14px] font-medium leading-[120%] text-[#242528]">
          Learning Progress
        </span>

        <span className="font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#242528]">
          55%
        </span>

        <div className="h-2 w-full overflow-hidden rounded-[24px] bg-[#E5E6E8]">
          <div className="h-2 w-[56%] rounded-[24px] bg-[#D4FB20]" />
        </div>
      </div>
    </div>
  );
}

function LessonItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-[723px] items-center gap-[13px]">
      {/* Icon */}
      <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[24px] bg-[#D4FB20] p-4">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="#242528"
            strokeWidth="1.8"
          />
          <path d="M10 9L15 12L10 15V9Z" fill="#242528" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex h-[75px] w-[638px] flex-col items-start gap-1">
        <h3 className="font-[family-name:var(--font-satoshi)] text-base font-medium leading-[120%] text-[#242528]">
          {title}
        </h3>

        <p className="font-[family-name:var(--font-satoshi)] text-base font-normal leading-[160%] text-[#4B4C53]">
          {description}
        </p>
      </div>
    </div>
  );
}
