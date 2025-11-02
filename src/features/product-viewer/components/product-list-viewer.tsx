'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/table'

import { Product } from '../dto/product.dto'

export type ProductListViewerProps = {
  products: Product[]
}

export function ProductListViewer({ products }: ProductListViewerProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[80px]">Image</TableHead>
          <TableHead className="w-[160px]">Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-full"
              />
            </TableCell>

            <TableCell className="font-medium whitespace-normal break-words">
              {product.name}
            </TableCell>

            <TableCell className="text-gray-600 whitespace-normal break-words max-w-[300px]">
              {product.description}
            </TableCell>

            <TableCell className="text-right text-lg font-bold text-blue-600">
              ${(Number(product.price) / 100).toFixed(2)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
