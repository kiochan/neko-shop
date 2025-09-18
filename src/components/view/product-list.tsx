import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProductList() {
  return (
    <section className="mx-auto w-full max-w-4xl">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg font-bold text-center">Product List</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded border border-black/10 p-4 bg-black">product-1</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-2</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-3</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-4</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-5</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-6</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-7</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-8</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-9</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-10</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-11</div>
            <div className="rounded border border-black/10 p-4 bg-black">product-12</div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
