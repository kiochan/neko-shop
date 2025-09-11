'use client';

import { login } from "@/app/actions/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";


export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
      
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const payload = {
              email: (form.elements.namedItem("email") as HTMLInputElement).value,
              password: (form.elements.namedItem("password") as HTMLInputElement)
                .value,
            };

            const res = await login(payload);
            if (res?.error) setError(res.error);
          }}
          className="space-y-6 p-8"
        >
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
                />
              </div>
              
          
          <Button
            type="submit"
            variant="outline"  className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Login
          </Button>
            </div> {error && <p className="text-sm text-red-500">{error}</p>}
          </form>

          
        </CardContent>
      
    </Card>
    </div>
  );
}
