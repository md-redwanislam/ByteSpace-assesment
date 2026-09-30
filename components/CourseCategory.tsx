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
];

export default function CourseCategory() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 lg:px-0">
        <CategorySelector
          categories={categories}
          className="flex-nowrap justify-between"
        />
      </div>
    </section>
  );
}
