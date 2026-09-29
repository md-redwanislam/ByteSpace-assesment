import belon from "@/public/belon.png";
import cone from "@/public/cone.png";
import spring from "@/public/spring-1.png";
import spring2 from "@/public/spring-2.png";
import triangle from "@/public/triangle.png";
import Image from "next/image";
import Link from "next/link";

const decorativeObjects = [
  {
    src: triangle,
    className: "absolute left-[calc(50%+360px)] top-[-6px] w-[188px] rotate-0",
  },
  {
    src: spring,
    className: "absolute left-[calc(50%+390px)] top-[290px] w-[330px]",
  },
  {
    src: spring2,
    className: "absolute left-[calc(50%-937px)] top-[-100px] w-[250px]",
  },
  {
    src: spring2,
    className:
      "absolute left-[calc(50%-642px)] top-[8px] w-[175px] -scale-x-100",
  },
  {
    src: triangle,
    className: "absolute left-[calc(50%-880px)] top-[225px] w-[188px]",
  },
  {
    src: cone,
    className: "absolute left-[calc(50%-700px)] top-[300px] w-[342px]",
  },
  {
    src: belon,
    className: "absolute left-[calc(50%+606px)] top-[32px] w-[370px]",
  },
];

export default function CTA() {
  return (
    <section
      className="
        relative
        isolate
        min-h-[488px]
        overflow-hidden"
    >
      {/* =========================================
          GRID BACKGROUND
      ========================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.12]"
      />

      {/* =========================================
          DECORATIVE 3D OBJECTS
      ========================================== */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        {decorativeObjects.map((object, index) => (
          <div
            key={`${object.src}-${index}`}
            className={`${object.className} hidden md:block`}
          >
            <div className="relative">
              <Image
                src={object.src}
                alt="Thumbnail"
                draggable={false}
                className="block h-auto w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* =========================================
          CTA CONTENT
      ========================================== */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[488px]
          w-full
          max-w-[964px]
          flex-col
          items-center
          justify-center
          gap-10
          px-6
          py-16
          text-center
        "
      >
        {/* Heading */}
        <h2
          className="
            max-w-[710px]
            font-[var(--font-poppins)]
            text-[clamp(32px,3.05vw,44px)]
            font-semibold
            leading-[120%]
            tracking-[-0.01em]
            text-[#F5F5F6]
          "
        >
          Unlock Your Potential as a Creator with ByteSpace
        </h2>

        {/* Description */}
        <p
          className="
            max-w-[964px]
            font-sans
            text-[18px]
            font-normal
            leading-[160%]
            text-[#F5F5F6]
          "
        >
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        {/* Button */}
        <Link
          href="/register"
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
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
