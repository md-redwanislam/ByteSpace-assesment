import Link from "next/link";
import PaginationButton from "./ClientPagination";

type PaginationProps = {
  currentPage?: number;
};

export default function Pagination({ currentPage = 1 }: PaginationProps) {
  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex h-12 items-center justify-center gap-6">
      {/* Previous */}
      <Link
        href={`/search?page=${Math.max(1, currentPage - 1)}`}
        aria-label="Previous page"
        className="flex h-12 w-14 items-center justify-center rounded-full border border-[#CED0D3] bg-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="#4B4C53"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      {/* Pages */}
      <div className="flex items-center gap-6">
        {pages.map((page) => (
          <PaginationButton
            key={page}
            page={page}
            active={currentPage === page}
          />
        ))}
      </div>

      {/* Next */}
      <Link
        href={`/search?page=${Math.min(5, currentPage + 1)}`}
        aria-label="Next page"
        className="flex h-12 w-14 items-center justify-center rounded-full border border-[#CED0D3] bg-white"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="#242528"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
