import creator from "@/public/h_image-2.png";
import Image from "next/image";

type CreatorProfileProps = {
  name?: string;
  role?: string;
  description?: string;

  productsCount?: number;
  followersCount?: number;
};

export default function CreatorProfile({
  name = "PurePearl Studio",
  role = "Passionate UI/UX, Web designer",
  description = `Welcome to the creative world of [Creator's Name]. Here, you'll discover
the passion, expertise, and inspiration that drive my creative journey. Let's
explore and learn together! Dive into my creative portfolio, showcasing a
glimpse of my artistic endeavors. From digital designs to multimedia projects,
each piece tells a unique story. Explore the world of creativity with me.`,

  productsCount = 3,
  followersCount = 12,
}: CreatorProfileProps) {
  return (
    <section className="w-full ">
      <div className="mx-auto flex w-full max-w-[1202px] flex-col gap-10 px-6 py-10 lg:px-0 lg:py-12">
        {/* Profile */}
        <div className="flex flex-col gap-10">
          {/* Avatar + Info */}
          <div className="flex items-center gap-6">
            <Image
              src={creator}
              alt={name}
              className="h-24 w-24 shrink-0 rounded-3xl object-cover"
            />

            <div className="flex flex-col gap-2">
              {/* Name + Creator badge */}
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-[family-name:var(--font-poppins)] text-[36px] font-semibold leading-[120%] tracking-[-0.01em] text-[#F5F5F6]">
                  {name}
                </h1>

                <span className="flex h-[35px] items-center justify-center rounded-full bg-[#D4FB20] px-6 py-2 text-base font-medium leading-[120%] text-[#242528]">
                  Creator
                </span>
              </div>

              <p className="text-lg font-normal leading-[160%] text-[#F5F5F6]">
                {role}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="max-w-[1198px] text-lg font-normal leading-[160%] text-[#F5F5F6]">
            {description}
          </p>
        </div>

        {/* Stats + Follow */}
        <div className="flex flex-wrap items-center justify-between gap-6">
          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-[46px] items-center justify-center gap-2 rounded-full bg-white px-6">
              <span className="text-lg font-medium leading-[120%] text-[#003BE2]">
                {productsCount}
              </span>

              <span className="text-lg font-medium leading-[120%] text-[#242528]">
                Products
              </span>
            </div>

            <div className="flex h-[46px] items-center justify-center gap-2 rounded-full bg-white px-6">
              <span className="text-lg font-medium leading-[120%] text-[#003BE2]">
                {followersCount}
              </span>

              <span className="text-lg font-medium leading-[120%] text-[#242528]">
                Followers
              </span>
            </div>
          </div>

          {/* Follow */}
          <button
            type="button"
            className="flex h-[46px] items-center justify-center rounded-full bg-[#D4FB20] px-6 text-lg font-medium leading-[120%] text-[#040819]"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
