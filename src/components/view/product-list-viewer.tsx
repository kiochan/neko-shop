import { Card, CardContent } from '@/components/ui/card';
import { Product } from '@/hooks/use-product';

export type ProductListViewerProps = {
  products: Product[];
};

export function ProductListViewer({ products }: ProductListViewerProps) {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              {/* 左边商品图 */}
              <img 
                src={product.imageUrl} 
                alt={product.name}
                className="w-12 h-12 object-cover rounded-full flex-shrink-0" 
              />
              {/* 右边商品信息 */}
              <div className="flex flex-col flex-1 min-w-0">
                <h3 className="text-md font-semibold truncate">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}