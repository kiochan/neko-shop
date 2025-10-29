'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { CircleAlert } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { loginAction } from '../actions'
import { LoginDto } from '../dto'

export function LoginCard() {
  const [error, setError] = useState<string | null>(null)

  const form = useForm<LoginDto.LoginRequest>({
    resolver: zodResolver(LoginDto.LoginRequestZod),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const startLogin = useCallback(async (values: LoginDto.LoginRequest) => {
    setError(null)
    const res = await loginAction(values)
    if (!res?.ok) {
      setError(res.error)
    }
  }, [])

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold text-gray-800">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(startLogin)} className="space-y-6 p-8" noValidate>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
            >
              Login
            </Button>

            {error && (
              <Alert variant="destructive">
                <CircleAlert />
                <AlertTitle>Error!</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
