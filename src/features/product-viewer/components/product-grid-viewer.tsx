import { Product } from '../dto/product.dto'

export type ProductGridViewerProps = {
  products: Product[]
}

export function ProductGridViewer({ products }: ProductGridViewerProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg p-4 flex flex-col items-center">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-24 h-24 object-cover mb-2 rounded-full"
          />
          <h3 className="text-md font-semibold text-center">{product.name}</h3>
          <p className="text-sm text-gray-600 text-center">{product.description}</p>
          <p className="text-lg font-bold text-blue-600 mt-2">
            {(Number(product.price) / 100).toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  )
}
