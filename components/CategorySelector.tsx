"use client";

import { useState } from "react";

type CategorySelectorProps = {
  categories: string[];
};

export default function CategorySelector({
  categories,
}: CategorySelectorProps) {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <div className="mx-auto flex max-w-[1086px] flex-wrap justify-center gap-4">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`flex h-[43px] items-center justify-center rounded-full px-4 text-center text-[16px] font-medium leading-[120%] transition-colors ${
              isActive
                ? "bg-[#D4FB20] text-[#242528]"
                : "bg-[#F5F5F6] text-[#4B4C53]"
            }`}
          >
            {category}
          </button>
        );
      })}

      {/* + More */}
      <button
        type="button"
        className="flex h-[43px] items-center justify-center rounded-full px-4 text-[16px] font-medium leading-[120%] text-[#003BE2]"
      >
        + More
      </button>
    </div>
  );
}
