import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Page } from "@/components/view/page";

export default function HomePage() {
  return (
    <Page>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Nyan, Neko!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a basic page built with shadcn.</p>
          <Button>Click Me</Button>
        </CardContent>
      </Card>
    </Page>
  );
}
