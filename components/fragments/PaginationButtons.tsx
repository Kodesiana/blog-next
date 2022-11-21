import Link from "next/link";

import usePagination from "hooks/usePagination";

export type PaginationButtonsProps = {
  totalItems: number;
  currentPage: number;
  renderPageLink: (page: number) => string;
  itemsPerPage?: number;
  firstPageLink: string;
};

export default function PaginationButtons({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
  firstPageLink,
}: PaginationButtonsProps) {
  const pageHook = usePagination(totalItems, currentPage, itemsPerPage);
  return (
    <>
      {currentPage > 2 && (
        <div className="pag-previous">
          <Link href={firstPageLink}>
            <i className="gg-chevron-double-left-o" />
          </Link>
        </div>
      )}

      {pageHook.hasPrev && (
        <div className="pag-previous">
          <Link href={renderPageLink(currentPage - 1)}>
            <i className="gg-chevron-left" />
          </Link>
        </div>
      )}

      {pageHook.pages.map((pageNumber, i) => (
        <div
          key={i}
          className={`pag-item ${
            currentPage === +pageNumber ? "pag-current" : ""
          }`}
        >
          {pageNumber === "..." ? (
            <p>{pageNumber}</p>
          ) : (
            <Link
              href={
                i === 0 ? firstPageLink : renderPageLink(parseInt(pageNumber))
              }
            >
              {pageNumber}
            </Link>
          )}
        </div>
      ))}

      {pageHook.hasNext && (
        <div className="pag-next">
          <Link href={renderPageLink(currentPage + 1)}>
            <i className="gg-chevron-right" />
          </Link>
        </div>
      )}

      {pageHook.totalPages - currentPage > 1 && (
        <div className="pag-last">
          <Link href={renderPageLink(pageHook.totalPages)}>
            <i className="gg-chevron-double-right-o" />
          </Link>
        </div>
      )}
    </>
  );
}
