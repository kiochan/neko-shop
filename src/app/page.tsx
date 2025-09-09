"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Page } from "@/components/view/page";
import { useCallback } from "react";

export default function HomePage() {
  const onClick = useCallback(() => {
    alert("Button clicked!");
  }, []);

  return (
    <Page>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Nyan, Neko!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">This is a basic page built with shadcn.</p>
          <Button onClick={onClick}>Click Me</Button>
        </CardContent>
      </Card>
    </Page>
  );
}
