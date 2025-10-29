'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { registerAction } from '@/features/auth/actions'
import { RegisterDto } from '@/features/auth/dto'
import { AvatarSelection } from '@/shared/ui/avatar-selection'
import { Button } from '@/shared/ui/button'
import { Card } from '@/shared/ui/card'
import { Checkbox } from '@/shared/ui/checkbox'
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from '@/shared/ui/form'
import { Input } from '@/shared/ui/input'

import { UiText } from '../const'

export function RegisterCard() {
  const [isPending, startTransition] = useTransition()

  const form = useForm<RegisterDto.RegisterRequest>({
    resolver: zodResolver(RegisterDto.RegisterRequestZod),
    defaultValues: {
      username: '',
      email: '',
      dob: '',
      password: '',
      confirmPassword: '',
      agree: false,
    },
  })

  function onSubmit(values: RegisterDto.RegisterRequest) {
    startTransition(async () => {
      const result = await registerAction(values)

      if (!result.ok) {
        if (result.error === 'EMAIL_ALREADY_REGISTERED') {
          form.setError('email', { message: UiText.register.error.emailRegistered })
          return
        }

        if (result.error === 'SERVER_ERROR') {
          form.setError('email', { message: UiText.register.error.serverUnavailable })
          return
        }

        return
      }

      // redirect when success
      window.location.href = '/dashboard'
    })
  }

  return (
    <div className="flex justify-center p-8">
      <Card className="w-full max-w-lg p-10 shadow-lg">
        <div className="text-4xl font-bold mb-4">{UiText.register.title}</div>

        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{UiText.register.username.label}</FormLabel>
                  <div className="flex items-center gap-4">
                    <AvatarSelection chr={field.value?.charAt(0).toUpperCase()} />
                    <FormControl>
                      <Input placeholder={UiText.register.username.placeholder} {...field} />
                    </FormControl>
                  </div>
                  <FormDescription>{UiText.register.username.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{UiText.register.email.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={UiText.register.email.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{UiText.register.email.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{UiText.register.dob.label}</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormDescription>{UiText.register.dob.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{UiText.register.password.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={UiText.register.password.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>{UiText.register.password.description}</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{UiText.register.confirmPassword.label}</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={UiText.register.confirmPassword.placeholder}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="agree"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel>{UiText.register.agree.label}</FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? UiText.register.submit.pending : UiText.register.submit.normal}
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  )
}
