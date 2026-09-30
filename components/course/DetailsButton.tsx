"use client";

type Tab = "about" | "lessons" | "reviews";

type DetailsButtonProps = {
  activeTab: Tab;
  onChange: (tab: Tab) => void;
};

export default function DetailsButton({
  activeTab,
  onChange,
}: DetailsButtonProps) {
  return (
    <div className="flex h-[32px] items-start gap-2">
      <button
        type="button"
        onClick={() => onChange("about")}
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
        onClick={() => onChange("lessons")}
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
        onClick={() => onChange("reviews")}
        className={`flex h-[32px] items-center justify-center rounded-full px-3 font-[family-name:var(--font-satoshi)] text-[12px] font-medium leading-[120%] ${
          activeTab === "reviews"
            ? "bg-[#D4FB20] text-[#242528]"
            : "bg-[#F5F5F6] text-[#4B4C53]"
        }`}
      >
        Reviews
      </button>
    </div>
  );
}
