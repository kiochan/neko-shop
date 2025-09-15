'use client';

import { login } from '@/app/actions/auth';
import { useState } from 'react';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const form = e.currentTarget;
          const payload = {
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            password: (form.elements.namedItem('password') as HTMLInputElement).value,
          };

          const res = await login(payload);
          if (res?.error) setError(res.error);
        }}
        className="w-full max-w-sm space-y-6 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="text-center text-2xl font-bold text-gray-800">Login</h1>

        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
              required
            />
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
