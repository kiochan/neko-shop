import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/shared/ui/pagination'

export type ProductViewerPaginatorProps = {
  offset: number
  size: number
  total: number
  path: string
}

export function ProductViewerPaginator({ offset, size, total, path }: ProductViewerPaginatorProps) {
  const currentPage = Math.floor(offset / size) + 1
  const totalPages = Math.ceil(total / size)
  const firstPage = 1
  const lastPages = totalPages
  const pageGap = 2

  const disbaledClass = 'pointer-events-none opacity-50'

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {currentPage > firstPage ? (
              <PaginationPrevious href={`${path}/${currentPage - 1}`} />
            ) : (
              <PaginationPrevious className={disbaledClass} href="#" />
            )}
          </PaginationItem>
          <PaginationItem>
            {currentPage > firstPage ? (
              <PaginationLink href={`${path}/${firstPage}`}>{firstPage}</PaginationLink>
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
              const targetPage = currentPage - page
              if (targetPage > firstPage) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink href={`${path}/${currentPage - page}`}>
                      {currentPage - page}
                    </PaginationLink>
                  </PaginationItem>
                )
              }
              return null
            })}
          <PaginationItem>
            <PaginationLink isActive href={`${path}/${currentPage}`}>
              {currentPage}
            </PaginationLink>
          </PaginationItem>
          {new Array(pageGap)
            .fill(0)
            .map((_, index) => index + 1)
            .map((page) => {
              const targetPage = currentPage + page
              if (targetPage < lastPages) {
                return (
                  <PaginationItem key={page}>
                    <PaginationLink href={`${path}/${currentPage + page}`}>
                      {currentPage + page}
                    </PaginationLink>
                  </PaginationItem>
                )
              }
              return null
            })}
          {currentPage + pageGap < lastPages - 1 ? (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          ) : null}
          {totalPages > pageGap && currentPage < totalPages ? (
            <PaginationItem>
              <button className="cursor-pointer">
                <PaginationLink href={`${path}/${totalPages}`}>{totalPages}</PaginationLink>
              </button>
            </PaginationItem>
          ) : null}
          <PaginationItem>
            {currentPage < totalPages ? (
              <PaginationNext href={`${path}/${currentPage + 1}`} />
            ) : (
              <PaginationNext className={disbaledClass} href="#" />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}
