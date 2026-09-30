import Link from "next/link";

type Service = {
  title: string;
  href: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "Design",
    href: "/courses/design",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path
          d="M6.75 6.75H29.25V29.25H6.75V6.75Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M11.25 11.25H24.75V24.75H11.25V11.25Z"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Development",
    href: "/courses/development",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="8"
          y="3.5"
          width="20"
          height="29"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M14 8.5H22"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="18" cy="27" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "IT & Software",
    href: "/courses/it-software",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="7"
          width="30"
          height="21"
          rx="2"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M12 32H24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M18 28V32" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    title: "Business",
    href: "/courses/business",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <path
          d="M6 31V14L18 5L30 14V31"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 31V20H24V31"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Marketing",
    href: "/courses/marketing",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <circle
          cx="18"
          cy="18"
          r="12"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <circle cx="18" cy="18" r="5" stroke="currentColor" strokeWidth="2.5" />
        <path
          d="M18 6V13"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Photography",
    href: "/courses/photography",
    icon: (
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-9"
        aria-hidden="true"
      >
        <rect
          x="4"
          y="9"
          width="28"
          height="21"
          rx="3"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M11 9L13 5H23L25 9"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <circle
          cx="18"
          cy="19.5"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
        />
      </svg>
    ),
  },
];

function ServiceCard({ title, href, icon }: Service) {
  return (
    <Link
      href={href}
      className="
        group
        flex aspect-square w-full
        items-center justify-center
        rounded-[24px]
        border border-[#CED0D3]
        bg-white
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="
            flex h-[60px] w-[60px]
            items-center justify-center
            rounded-full
            bg-[#D4FB20]
            text-[#242528]
          "
        >
          {icon}
        </div>

        <span
          className="
            text-center
            font-sans
            text-[20px]
            font-medium
            leading-[120%]
            text-[#242528]
          "
        >
          {title}
        </span>
      </div>
    </Link>
  );
}

export default function Service() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1202px] px-6 py-20 lg:px-0">
        {/* Section heading */}
        <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
          <h2
            className="
              max-w-[792px]
              font-[Poppins]
              text-[30px]
              font-semibold
              leading-[120%]
              tracking-[-0.01em]
              text-[#040819]
              sm:text-[36px]
            "
          >
            Explore Diverse Learning Paths at Bytespace
          </h2>

          <p
            className="
              max-w-[917px]
              font-sans
              text-[16px]
              font-normal
              leading-[160%]
              text-[#82868E]
              sm:text-[18px]
            "
          >
            At Bytespace, we believe in empowering individuals through
            knowledge. Our diverse range of courses spans various fields,
            ensuring there&apos;s something for everyone. Unleash your potential
            and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories */}
        <div
          className="
            mt-16
            grid
            grid-cols-2
            gap-5
            sm:grid-cols-3
            lg:grid-cols-6
            lg:gap-10
          "
        >
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              href={service.href}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
