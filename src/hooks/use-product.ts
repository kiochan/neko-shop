'use client';

import { MockProductCats } from '@/components/mocks/product.mock.data.const';
import { useState } from 'react';

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type ProductQuery = {
  offset?: number;
  size?: number;
};

export type UseProductReturn = {
  isLoading: boolean;
  total: number;
  queriedProducts: Product[];
  setQuery: (query: ProductQuery) => void;
};

const allProducts = MockProductCats;

export function useProduct(initQuery: ProductQuery): UseProductReturn {
  const [query, setQuery] = useState<ProductQuery>(initQuery);

  const isLoading = false;
  const offset = query.offset ?? 0;
  const size = query.size ?? allProducts.length;
  const total = allProducts.length;

  // TODO: Task 1 and Task 4: implement filtering, sorting, etc.
  // For now, just return a slice based on offset and size
  const queriedProducts = allProducts;

  return { isLoading, setQuery, total, queriedProducts };
}
