'use client';

import { ProductQuery, useProduct } from '@/hooks/use-product';
import { useState } from 'react';
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { ProductViewerPaginator } from './product-viewer-paginator';
import { ProductGridViewer } from './product-grid-viewer';
import { ProductListViewer } from './product-list-viewer';
import { Button } from '@/components/ui/button';

export enum ViewerMode {
  Grid = 'grid',
  List = 'list',
}

export type ProductViewerProps = {
  initViewerMode?: ViewerMode;
  initQuery?: ProductQuery;
};

export default function ProductViewer({ initViewerMode, initQuery }: ProductViewerProps) {
  const [viewerMode, setViewerMode] = useState<ViewerMode>(initViewerMode ?? ViewerMode.Grid);
  const { isLoading, setQuery, total, queriedProducts } = useProduct(initQuery ?? {});

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
          <CardAction>
            <Button
              className="w-28"
              variant="default"
              onClick={() =>
                setViewerMode(viewerMode === ViewerMode.Grid ? ViewerMode.List : ViewerMode.Grid)
              }
            >
              {viewerMode === ViewerMode.Grid ? 'List View' : 'Grid View'}
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>{viewer}</CardContent>
        <CardFooter>
          <ProductViewerPaginator offset={0} size={Infinity} total={total} />
        </CardFooter>
      </Card>
    </section>
  );
}
