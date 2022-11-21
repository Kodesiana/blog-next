// source: https://github.com/vercel/examples/blob/main/solutions/pagination-with-ssg/hooks/usePagination.ts

const dotts = "...";

function getPages(length: number, inc: number = 1) {
  return Array.from({ length }, (_, i) => i + inc);
}

function flatString(arr: (string | number)[]) {
  return arr.map((x) => x.toString());
}

function calc(currentPage: number, totalPages: number, pages: string[]) {
  return {
    hasNext: totalPages - currentPage > 0,
    hasPrev: currentPage > 1,
    totalPages,
    pages,
  };
}

export default function usePagination(
  totalItems: number,
  currentPage: number,
  itemsPerPage: number
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // -> 1 2 3 4 5
  if (totalPages <= 5) {
    return calc(currentPage, totalPages, flatString(getPages(totalPages)));
  }

  // -> 1 2 3 4 ... 10
  if (currentPage <= 2) {
    return calc(
      currentPage,
      totalPages,
      flatString([1, 2, dotts, totalPages - 1, totalPages])
    );
  }

  // -> 1 ... 4 5 6 ... 10
  if (currentPage < totalPages - 2) {
    return calc(
      currentPage,
      totalPages,
      flatString([
        1,
        dotts,
        currentPage - 1,
        currentPage,
        currentPage + 1,
        dotts,
        totalPages,
      ])
    );
  }

  // -> 1 ... 7 8 9 10
  return calc(
    currentPage,
    totalPages,
    flatString([1, dotts, ...getPages(4, totalPages - 3)])
  );
}
