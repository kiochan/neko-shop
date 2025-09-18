import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MockProductCats } from '../mocks/product.mock.data.const';
import ProductGridMode from './productGridMode';

export default function ProductList() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-center">Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductGridMode />
        </CardContent>
      </Card>
    </section>
  );
}
