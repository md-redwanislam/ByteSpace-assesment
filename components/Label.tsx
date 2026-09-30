import { Funnel, Shapes, Signal, TextAlignStart } from "lucide-react";

type LabelVariant = "filter" | "level" | "category" | "relevant";

type LabelProps = {
  variant: LabelVariant;
  label?: string;
};

const labelConfig = {
  filter: {
    label: "Filter",
    icon: Funnel,
    width: "w-[96px]",
  },
  level: {
    label: "Level",
    icon: Signal,
    width: "w-[97px]",
  },
  category: {
    label: "Category",
    icon: Shapes,
    width: "w-[127px]",
  },
  relevant: {
    label: "Most relevant",
    icon: TextAlignStart,
    width: "w-[177px]",
  },
};

const Label = ({ variant, label }: LabelProps) => {
  const config = labelConfig[variant];
  const Icon = config.icon;

  return (
    <button
      type="button"
      className={`
        ${config.width}
        box-border
        flex
        h-12
        items-center
        justify-center
        gap-1
        rounded-full
        border
        border-[#CED0D3]
        bg-white
        px-4
        py-3
        font-[family-name:var(--font-satoshi)]
        text-base
        font-medium
        leading-[120%]
        text-[#4B4C53]
      `}
    >
      <Icon size={24} strokeWidth={1.8} className="shrink-0 text-[#242528]" />

      <span>{label ?? config.label}</span>
    </button>
  );
};

export default Label;
