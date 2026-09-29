import CategorySelector from "./CategorySelector";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CategoryTabs() {
  return (
    <section className="w-full bg-white px-6 py-20">
      {/* Heading */}
      <div className="mx-auto flex max-w-[917px] flex-col items-center gap-4 text-center">
        <h2 className="max-w-[588px] text-[44px] font-semibold leading-[120%] tracking-[-0.01em] text-[#040819]">
          Discover Your Passion, Build Your Skills
        </h2>

        <p className="max-w-[917px] text-[18px] font-normal leading-[160%] text-[#82868E]">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </div>

      {/* Categories */}
      <div className="mt-16">
        <CategorySelector categories={categories} />
      </div>
    </section>
  );
}
