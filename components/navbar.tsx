import Link from "next/link";

export default function Navigation() {
  return (
    <header className="relative z-10 h-30">
      <div className="mx-auto flex h-full max-w-299 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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

          <span className="font-bold text-2xl leading-7.5">ByteSpace</span>
        </Link>

        {/* Main navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-base font-medium leading-4.75">
            Home
          </Link>

          <Link href="/search" className="text-base leading-6.5">
            Courses
          </Link>

          <Link href="/creator" className="text-base leading-6.5">
            Creators
          </Link>
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-6 md:flex">
          <Link href="/register" className="text-base leading-6">
            Sign In
          </Link>

          <Link href="/login" className="text-base leading-6">
            Join Us
          </Link>

          {/* Cart */}
          <button
            type="button"
            aria-label="Shopping cart"
            className="flex size-6 items-center justify-center"
          >
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
                fill="#F5F5F6"
              />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label="Open menu"
          className="flex size-10 items-center justify-center md:hidden"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
