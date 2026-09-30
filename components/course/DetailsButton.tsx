"use client";

import { useState, type ReactNode } from "react";

type Tab = "about" | "lessons" | "reviews";

type DetailsButtonProps = {
  about: ReactNode;
  lessons: ReactNode;
  reviews: ReactNode;
};

export default function DetailsButton({
  about,
  lessons,
  reviews,
}: DetailsButtonProps) {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <div className="flex w-[725px] flex-col items-start gap-6 bg-white pb-20">
      {/* Tabs */}
      <div className="flex h-[32px] items-start gap-2">
        <button
          type="button"
          onClick={() => setActiveTab("about")}
          className={`flex h-[32px] items-center justify-center rounded-full px-3 font-[family-name:var(--font-satoshi)] text-[12px] font-medium leading-[120%] ${
            activeTab === "about"
              ? "bg-[#D4FB20] text-[#242528]"
              : "bg-[#F5F5F6] text-[#4B4C53]"
          }`}
        >
          About
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("lessons")}
          className={`flex h-[32px] items-center justify-center rounded-full px-3 font-[family-name:var(--font-satoshi)] text-[12px] font-medium leading-[120%] ${
            activeTab === "lessons"
              ? "bg-[#D4FB20] text-[#242528]"
              : "bg-[#F5F5F6] text-[#4B4C53]"
          }`}
        >
          Lessons
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`flex h-[32px] items-center justify-center rounded-full px-3 font-[family-name:var(--font-satoshi)] text-[12px] font-medium leading-[120%] ${
            activeTab === "reviews"
              ? "bg-[#D4FB20] text-[#242528]"
              : "bg-[#F5F5F6] text-[#4B4C53]"
          }`}
        >
          Reviews
        </button>
      </div>

      {/* Content */}
      <div className="w-full">
        {activeTab === "about" && about}
        {activeTab === "lessons" && lessons}
        {activeTab === "reviews" && reviews}
      </div>
    </div>
  );
}
