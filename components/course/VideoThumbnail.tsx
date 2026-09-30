import Image from "next/image";

import videthumbanil from "@/public/video_thumbnail.jpg";

const VideoThumbnail = () => {
  return (
    <div className="relative h-[480px] w-[720px] overflow-hidden rounded-[24px]">
      {/* Video Thumbnail */}
      <Image
        src={videthumbanil}
        alt="Course video thumbnail"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Play Button */}
      <button
        type="button"
        aria-label="Play course video"
        className="absolute left-1/2 top-1/2 flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[24px] border border-[#4F4F4F] bg-[rgba(61,61,61,0.24)] p-4 backdrop-blur-[20px]"
      >
        <span className="flex h-[72px] w-[72px] items-center justify-center">
          <svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23.5 18.5L43 30L23.5 41.5V18.5Z" fill="#F5F2FF" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default VideoThumbnail;
