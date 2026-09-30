import Link from "next/link";

const browseLinks = [
  { label: "Featured Courses", href: "/courses" },
  { label: "Featured Categories", href: "/categories" },
  { label: "Business", href: "/courses?category=business" },
  { label: "IT", href: "/courses?category=it" },
  { label: "Design", href: "/courses?category=design" },
];

const categoryLinks = [
  { label: "Development", href: "/courses?category=development" },
  { label: "Marketing", href: "/courses?category=marketing" },
  { label: "Photography", href: "/courses?category=photography" },
  { label: "Finance", href: "/courses?category=finance" },
  { label: "Sport", href: "/courses?category=sport" },
];

const platformLinks = [
  { label: "Become a Creator", href: "/become-a-creator" },
  { label: "Affiliate Program", href: "/affiliate" },
  { label: "Contact", href: "/contact" },
  { label: "Help", href: "/help" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#CED0D3] bg-white text-[#242528]">
      <div className="mx-auto max-w-[1200px] px-6 py-[71px] lg:px-0">
        {/* Main footer content */}
        <div className="flex flex-col gap-16 lg:flex-row lg:justify-between">
          {/* Newsletter */}
          <div className="w-full max-w-[528px]">
            <div className="flex flex-col gap-4">
              {/* Logo */}
              <Link
                href="/"
                prefetch={false}
                className="flex w-fit items-center gap-[8px]"
                aria-label="ByteSpace home"
              >
                <svg
                  width="29"
                  height="32"
                  viewBox="0 0 29 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
                    fill="#D4FB20"
                  />
                  <path
                    d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
                    fill="#D4FB20"
                  />
                  <path
                    d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
                    fill="#D4FB20"
                  />
                </svg>

                <span className="text-[24px] font-bold leading-[30px]">
                  ByteSpace
                </span>
              </Link>

              <p className="text-sm leading-[160%]">
                Stay Up to date with our latest features and releases by joining
                our newsletter.
              </p>
            </div>

            {/* Newsletter form */}
            <div className="mt-[45px] flex flex-col gap-6">
              <form className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="h-[52px] w-full rounded-full border border-[#CED0D3] bg-white px-6 text-base leading-[160%] outline-none placeholder:text-[#242528] focus:border-[#242528] sm:w-[376px]"
                />

                <button
                  type="submit"
                  className="h-[46px] w-fit rounded-full bg-[#D4FB20] px-6 text-lg font-medium leading-[120%] transition-opacity hover:opacity-80"
                >
                  Search
                </button>
              </form>

              <p className="max-w-[504px] text-xs leading-[160%]">
                By subscribing, you agree to our{" "}
                <Link
                  href="/privacy-policy"
                  prefetch={false}
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </Link>{" "}
                and consent to receive updates from our company.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 lg:flex lg:gap-10">
            {/* Browse */}
            <FooterColumn title="Browse" links={browseLinks} />

            {/* Categories */}
            <FooterColumn title="Categories" links={categoryLinks} />

            {/* Platform */}
            <FooterColumn title="Platform" links={platformLinks} />
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-[130px] border-t border-[#CED0D3] pt-6">
          <div className="flex flex-col gap-4 text-xs leading-[160%] sm:flex-row sm:items-start sm:justify-between">
            <p>© 2023 ByteSpace. All rights reserved.</p>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy-policy"
                prefetch={false}
                className="hover:underline"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-of-service"
                prefetch={false}
                className="hover:underline"
              >
                Terms of Service
              </Link>

              <Link
                href="/cookies-settings"
                prefetch={false}
                className="hover:underline"
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLink[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="flex w-full flex-col gap-6 lg:w-[167px]">
      <h3 className="text-base leading-6">{title}</h3>

      <nav className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm leading-[160%] hover:underline"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
