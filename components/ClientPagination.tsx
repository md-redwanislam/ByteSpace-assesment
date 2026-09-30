"use client";

type PaginationButtonProps = {
  page: number;
  active?: boolean;
  onClick?: () => void;
};

export default function PaginationButton({
  page,
  active = false,
  onClick,
}: PaginationButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-[family-name:var(--font-poppins)] text-xl font-semibold leading-7 tracking-[-0.01em] ${
        active ? "text-[#CED0D3]" : "text-[#242528]"
      }`}
    >
      {page}
    </button>
  );
}
