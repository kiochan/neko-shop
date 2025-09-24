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
  const showPages = 4;

  if (totalPages < 1) {
    return null;
  } else {
    return (
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {/** when current page is greater than 1 previous button active*/}
              {currentPage > homePage ? (
                <PaginationPrevious onClick={() => setCurrentPage(currentPage - 1)} />
              ) : (
                <PaginationPrevious />
              )}
            </PaginationItem>
            {/** when current page is greater than 1 previous page number button active */}
            {currentPage > homePage ? (
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(currentPage - 1)}>
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
            ) : null}
            {/** square current page button */}
            <PaginationItem>
              <PaginationLink isActive>{currentPage}</PaginationLink>
            </PaginationItem>
            {/** when current page is less than total pages next page number button active */}
            {currentPage < totalPages ? (
              <PaginationItem>
                <PaginationLink onClick={() => setCurrentPage(currentPage + 1)}>
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
            ) : null}
            {/** when total pages greater than 4 show ellipsis */}
            {totalPages > showPages ? (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            ) : null}
            {/** when total pages greater than 4 and current page less than total pages show last page number button */}
            {totalPages > showPages && currentPage < totalPages ? (
              <PaginationItem>
                <PaginationLink>{totalPages}</PaginationLink>
              </PaginationItem>
            ) : null}
            {/** when current page is less than total pages next button active */}
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
