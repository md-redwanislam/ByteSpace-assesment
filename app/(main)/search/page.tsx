import CourseCard from "@/components/CourseCard";
import CourseCategory from "@/components/CourseCategory";
import Hero from "@/components/Hero";
import Label from "@/components/Label";
import Pagination from "@/components/Pagination";

const Search = () => {
  return (
    <div>
      <Hero
        title="Find Your Next Course"
        titleClassName="text-[36px]"
        searchPlaceholder="Search"
        actionLabel="Courses"
      />
      <section className="w-full bg-white">
        <div className="mx-auto w-full max-w-[1202px] px-6 py-8 lg:px-0">
          <div className="flex w-full flex-wrap items-center justify-between gap-4">
            {/* Left */}
            <div className="flex flex-wrap items-center gap-4">
              <Label variant="filter" />
              <Label variant="level" />
              <Label variant="category" />
            </div>

            {/* Right */}
            <Label variant="relevant" />
          </div>
          <div className="mt-8">
            <CourseCategory />
          </div>
        </div>
      </section>
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <div className=" flex justify-center pb-16 bg-white">
        <Pagination />
      </div>
    </div>
  );
};

export default Search;
