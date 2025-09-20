import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

export type ProductViewerPaginatorProps = {
  offset: number;
  size: number;
  total: number;
  setPage: (page: number) => void;
};
export function ProductViewerPaginator({
  offset,
  size,
  total,
  setPage,
}: ProductViewerPaginatorProps) {
  const currentPage = Math.floor(offset / size) + 1;

  // range
  const minPage = 1;
  const maxPage = Math.ceil(total / size);

  // how many pages should be shown before and after current page
  const maxItemBeforeOrAfter = 2;

  // pages
  const items = new Array(maxItemBeforeOrAfter * 2 + 1)
    .fill(0)
    // 0 0 0 0 0
    .map((_, index) => index)
    // 0 1 2 3 4
    .map((index) => index - maxItemBeforeOrAfter)
    // -2 -1 0 1 2
    .map((pageOffset) => pageOffset + currentPage)
    // if current page is 5, then:
    // 3 4 5 6 7
    .filter((page) => page >= minPage && page <= maxPage)
    // if only 6 pages total, then cut off
    // 3 4 5 6
    .map((page) => {
      return (
        <PaginationItem key={String(page)}>
          <PaginationLink
            href="#"
            onClick={
              page !== currentPage
                ? () => {
                    setPage(page);
                  }
                : undefined
            }
            isActive={page === currentPage}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    });

  // previes/next button
  // only display if page exists
  const previesItem =
    currentPage > minPage ? (
      <PaginationItem>
        <PaginationPrevious
          href="#"
          onClick={() => {
            setPage(currentPage - 1);
          }}
        />
      </PaginationItem>
    ) : null;

  const nextItem =
    currentPage < maxPage ? (
      <PaginationItem>
        <PaginationNext
          href="#"
          onClick={() => {
            setPage(currentPage + 1);
          }}
        />
      </PaginationItem>
    ) : null;

  // ellipsis
  // only be show if too many pages ( > maxItemBeforeOrAfter )
  const previesEllipsis =
    currentPage - maxItemBeforeOrAfter > minPage ? (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    ) : null;

  const nextEllipsis =
    currentPage + maxItemBeforeOrAfter < maxPage ? (
      <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem>
    ) : null;

  return (
    <Pagination>
      <PaginationContent>
        {previesItem}
        {previesEllipsis}
        {items}
        {nextEllipsis}
        {nextItem}
      </PaginationContent>
    </Pagination>
  );
}
