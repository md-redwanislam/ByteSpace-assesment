import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      {/* =========================
          404 HERO SECTION
      ========================== */}
      <main className="relative min-h-[957px] overflow-hidden bg-[#003BE2]">
        {/* Grid Background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(255,255,255,1) 2px,
                transparent 2px
              ),
              linear-gradient(
                to bottom,
                rgba(255,255,255,1) 2px,
                transparent 2px
              )
            `,
            backgroundSize: "120px 120px",
          }}
        />

        {/* Navbar */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* =========================
            LARGE 404
        ========================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[160px]
            -translate-x-1/2
            select-none
            font-[var(--font-poppins)]
            text-[clamp(220px,33.333vw,480px)]
            font-semibold
            leading-none
            tracking-[-0.01em]
            text-center
          "
          style={{
            background:
              "linear-gradient(180deg, #D4FB20 0%, rgba(212,251,32,0.96) 25%, rgba(212,251,32,0.81) 50.5%, rgba(212,251,32,0.61) 68%, rgba(255,255,255,0) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        {/* =========================
            CONTENT
        ========================== */}
        <section
          className="
            absolute
            left-1/2
            top-[521px]
            z-10
            flex
            w-full
            max-w-[935px]
            -translate-x-1/2
            flex-col
            items-center
            gap-8
            px-6
            text-center
          "
        >
          {/* Heading */}
          <h1
            className="
              max-w-[935px]
              font-[var(--font-poppins)]
              text-[clamp(42px,5vw,72px)]
              font-semibold
              leading-[1.2]
              tracking-[-0.01em]
              text-white
            "
          >
            The page you are looking for doesn’t exist
          </h1>

          {/* Description */}
          <p
            className="
              max-w-[486px]
              font-sans
              text-[18px]
              font-normal
              leading-[160%]
              text-[#E5E6E8]
            "
          >
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home */}
          <Link
            href="/"
            className="
              inline-flex
              h-[46px]
              items-center
              justify-center
              gap-2
              rounded-[24px]
              bg-[#D4FB20]
              px-6
              font-sans
              text-[18px]
              font-medium
              leading-[120%]
              text-[#242528]
              transition-opacity
              duration-200
              hover:opacity-90
            "
          >
            Back to Home
          </Link>
        </section>
      </main>

      {/* =========================
          DEFAULT FOOTER
      ========================== */}
      <Footer />
    </>
  );
}
