import { useState } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

import { AvatarSelection } from '../ui/avatar-selection'
import { Card } from '../ui/card'
import { Checkbox } from '../ui/checkbox'

export default function RegisterPageview() {
  const [username, setUsername] = useState('')

  return (
    <div
      className="
      flex flex-col w-full items-center px-0 landscape:w-full p-8
      md:px-4 portrait:px-20
      lg:landscape:px-30 portrait:px-20
      "
    >
      <Card className="shadow-lg w-full max-w-lg min-w-85 p-10">
        <div className="mb-4 text-5xl font-bold break-words">Register</div>
        <div className="mb-10 text-sm font-italic break-words">
          Description/Instructions for registration
        </div>
        <div className="flex items-baseline gap-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <AvatarSelection chr={username?.charAt(0).toUpperCase()} />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">
                The default avatar is '?' and the first character of your username will be your
                avatar
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Input
                type="text"
                placeholder="Username"
                className="block mb-4"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">Choose a unique username</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input type="email" placeholder="Email" className="block mb-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Please enter a valid email address</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input type="date" className="block mb-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Data of birth</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input type="password" placeholder="Password" className="block mb-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Your password must be at least 8 characters long</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Input type="password" placeholder="Confirm Password" className="block mb-4" />
          </TooltipTrigger>
          <TooltipContent>
            <p className="text-sm">Please confirm your password</p>
          </TooltipContent>
        </Tooltip>
        <div className="flex items-center mb-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Checkbox id="terms" />
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-sm">You must agree to the terms to continue</p>
            </TooltipContent>
          </Tooltip>
          <Label htmlFor="terms" className="ml-2">
            I agree to the terms and conditions
          </Label>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Register
        </button>
      </Card>
    </div>
  )
}
