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
  const firstPage = 1;
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
              {currentPage > firstPage ? (
                <button className="cursor-pointer" onClick={() => setCurrentPage(currentPage - 1)}>
                  <PaginationPrevious />
                </button>
              ) : (
                <button className="cursor-not-allowed" disabled>
                  <PaginationPrevious />
                </button>
              )}
            </PaginationItem>
            <PaginationItem>
              {currentPage > firstPage ? (
                <button className="cursor-pointer" onClick={() => setCurrentPage(firstPage)}>
                  <PaginationLink>{firstPage}</PaginationLink>
                </button>
              ) : null}
            </PaginationItem>
            <PaginationItem>
              {currentPage - pageGap > firstPage + 1 ? <PaginationEllipsis /> : null}
            </PaginationItem>
            {new Array(pageGap)
              .fill(0)
              .map((_, index) => index + 1)
              .reverse()
              .map((page) => {
                if (currentPage - page > firstPage) {
                  return (
                    <button
                      className="cursor-pointer"
                      onClick={() => setCurrentPage(currentPage - page)}
                    >
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => setCurrentPage(currentPage - page)}>
                          {currentPage - page}
                        </PaginationLink>
                      </PaginationItem>
                    </button>
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
                    <button
                      className="cursor-pointer"
                      onClick={() => setCurrentPage(currentPage + page)}
                    >
                      <PaginationItem key={page}>
                        <PaginationLink onClick={() => setCurrentPage(currentPage + page)}>
                          {currentPage + page}
                        </PaginationLink>
                      </PaginationItem>
                    </button>
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
                <button className="cursor-pointer" onClick={() => setCurrentPage(totalPages)}>
                  <PaginationLink>{totalPages}</PaginationLink>
                </button>
              </PaginationItem>
            ) : null}
            <PaginationItem>
              {currentPage < totalPages ? (
                <button className="cursor-pointer" onClick={() => setCurrentPage(currentPage + 1)}>
                  <PaginationNext />
                </button>
              ) : (
                <button className="cursor-not-allowed" disabled>
                  <PaginationNext />
                </button>
              )}
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    );
  }
}
