'use client';

import { ProductQuery, useProduct } from '@/hooks/use-product';
import { useEffect, useState } from 'react';
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ProductViewerPaginator } from './product-viewer-paginator';
import { ProductGridViewer } from './product-grid-viewer';
import { ProductListViewer } from './product-list-viewer';

export enum ViewerMode {
  Grid = 'grid',
  List = 'list',
}

export type ProductViewerProps = {
  initViewerMode?: ViewerMode;
  initQuery?: ProductQuery;
};

const pageSize = 8;

export default function ProductViewer({ initViewerMode, initQuery }: ProductViewerProps) {
  const [viewerMode, setViewerMode] = useState<ViewerMode>(initViewerMode ?? ViewerMode.Grid);
  const { isLoading, setQuery, total, queriedProducts } = useProduct(
    initQuery ?? { offset: 0, size: pageSize }
  );
  const totalPages = Math.ceil(total / pageSize);
  const currentPageInitial = Math.min(1, totalPages);
  const [currentPage, setCurrentPage] = useState(currentPageInitial);
  const productOffset = pageSize * (currentPage - 1);

  /* Update the product offset when the current page changes */

  useEffect(() => {
    setQuery({ offset: productOffset, size: pageSize });
  }, [currentPage, setQuery, productOffset]);

  const viewer =
    viewerMode === ViewerMode.Grid ? (
      <ProductGridViewer products={queriedProducts} />
    ) : (
      <ProductListViewer products={queriedProducts} />
    );

  return (
    <section className="w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Product</CardTitle>
          <CardAction>Toggle{/** TODO: Task 5: Implement your Toggle here! */}</CardAction>
        </CardHeader>
        <CardContent> {viewer}</CardContent>
        <CardFooter>
          <ProductViewerPaginator
            offset={productOffset}
            size={pageSize}
            total={total}
            setCurrentPage={setCurrentPage}
          />
        </CardFooter>
      </Card>
    </section>
  );
}
