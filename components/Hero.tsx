import Link from "next/link";

type HeroSectionProps = {
  title: string;
  description?: string;
  searchPlaceholder?: string;
  actionLabel?: string;
  titleClassName?: string;
  showSearch?: boolean;
};

const Hero = ({
  title,
  description,
  searchPlaceholder = "Course, topic, creator",
  actionLabel = "Search",
  titleClassName = "",
  showSearch = true,
}: HeroSectionProps) => {
  return (
    <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center mb-0.5 px-6 pt-12 text-center md:pt-[49px]">
      <div className="flex max-w-[935px] flex-col items-center gap-8">
        <h1
          className={`
            font-[family-name:var(--font-poppins)]
            text-5xl
            font-semibold
            leading-[120%]
            tracking-[-0.01em]
            md:text-[72px]
            ${titleClassName}
          `}
        >
          {title}
        </h1>

        {description && (
          <p className="max-w-[819px] text-base leading-[160%] text-[#E5E6E8] md:text-lg">
            {description}
          </p>
        )}
      </div>

      {showSearch && (
        <form className="mt-12 flex w-full max-w-[581px] items-center gap-4">
          <div className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white px-6">
            <span className="text-[#82868E]">⌕</span>

            <input
              type="search"
              placeholder={searchPlaceholder}
              className="min-w-0 flex-1 bg-transparent text-lg text-[#242528] outline-none placeholder:text-[#82868E]"
            />
          </div>

          <Link
            href={actionLabel === "Search" ? "/search" : "/courses"}
            className="h-[46px] rounded-full bg-[#D4FB20] px-6 py-3 text-lg font-medium leading-[120%] text-[#242528]"
          >
            {actionLabel}
          </Link>
        </form>
      )}
    </div>
  );
};

export default Hero;
