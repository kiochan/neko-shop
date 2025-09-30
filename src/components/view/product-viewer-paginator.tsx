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
  setCurrentPage: (page: number) => void;
};

export function ProductViewerPaginator({
  offset,
  size,
  total,
  setCurrentPage,
}: ProductViewerPaginatorProps) {
  const currentPage = Math.floor(offset / size) + 1;
  const totalPages = Math.ceil(total / size);
  const homePage = 1;
  const lastPages = totalPages;
  const pageGap = 2;

  if (totalPages < 1) {
    return null;
  } else {
    return (
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {currentPage > homePage ? (
                <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
              ) : (
                <PaginationPrevious />
              )}
            </PaginationItem>
            <PaginationItem>
              {currentPage > homePage ? (
                <PaginationLink onClick={() => setCurrentPage(homePage)}>{homePage}</PaginationLink>
              ) : null}
            </PaginationItem>
            <PaginationItem>
              {currentPage - pageGap > homePage + 1 ? <PaginationEllipsis /> : null}
            </PaginationItem>
            {new Array(pageGap)
              .fill(0)
              .map((_, index) => index + 1)
              .reverse()
              .map((page) => {
                if (currentPage - page > homePage) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink onClick={() => setCurrentPage(currentPage - page)}>
                        {currentPage - page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
            <PaginationItem>
              <PaginationLink isActive>{currentPage}</PaginationLink>
            </PaginationItem>
            {new Array(pageGap)
              .fill(0)
              .map((_, index) => index + 1)
              .map((page) => {
                if (currentPage + page < lastPages) {
                  return (
                    <PaginationItem key={page}>
                      <PaginationLink onClick={() => setCurrentPage(currentPage + page)}>
                        {currentPage + page}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
                return null;
              })}
            {currentPage + pageGap < lastPages - 1 ? (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ) : null}
            {totalPages > pageGap && currentPage < totalPages ? (
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            ) : null}
            <PaginationItem>
              {currentPage < totalPages ? (
                <PaginationNext onClick={() => setCurrentPage(currentPage + 1)} />
              ) : (
                <PaginationNext />
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }
}
