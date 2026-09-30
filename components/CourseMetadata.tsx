type CourseMetadataProps = {
  positionClass?: string;
};

const CourseMetadata = ({
  positionClass = "left-3 top-[155px]",
}: CourseMetadataProps) => {
  return (
    <div className={`absolute flex h-8 items-start gap-3 ${positionClass}`}>
      {/* 17 Lessons */}
      <div className="flex h-8 w-[81px] items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-[4px]">
        <span className="font-sans text-xs font-medium leading-5 text-[#4F4F4F]">
          17 Lessons
        </span>
      </div>

      {/* 2 hours 16 mins */}
      <div className="flex h-8 w-[109px] items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-[4px]">
        <span className="font-sans text-xs font-medium leading-5 text-[#4F4F4F]">
          2 hours 16 mins
        </span>
      </div>

      {/* 59 Comments */}
      <div className="flex h-8 w-[101px] items-center justify-center rounded-full bg-[rgba(246,246,246,0.6)] px-3 py-1.5 backdrop-blur-[4px]">
        <span className="font-sans text-xs font-medium leading-5 text-[#4F4F4F]">
          59 Comments
        </span>
      </div>
    </div>
  );
};

export default CourseMetadata;
