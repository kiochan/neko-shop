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

const PageSize = 8;

export default function ProductViewer({ initViewerMode, initQuery }: ProductViewerProps) {
  const size = PageSize;

  const [viewerMode, setViewerMode] = useState<ViewerMode>(initViewerMode ?? ViewerMode.Grid);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * PageSize;

  const { isLoading, setQuery, total, queriedProducts } = useProduct(
    initQuery ?? {
      offset,
      size,
    }
  );

  useEffect(() => {
    setQuery({
      offset,
      size,
    });
  }, [page]);

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
          <ProductViewerPaginator offset={offset} size={PageSize} total={total} setPage={setPage} />
        </CardFooter>
      </Card>
    </section>
  );
}
