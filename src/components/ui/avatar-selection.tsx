import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type imageScr = {
  src?: string
  alt?: string
  chr?: string
}

export function AvatarSelection({ src, alt, chr, ...props }: imageScr) {
  const letter = (chr?.trim()?.[0] ?? '?').toUpperCase()
  return (
    <div className="flex items-center gap-3">
      <Avatar {...props} className="size-12 border-2 border-border border-blue-200 shadow-md">
        <AvatarImage src={src ?? ' '} alt={alt ?? ' '} />
        <AvatarFallback className="flex h-full w-full items-center justify-center text-sm font-medium text-blue-500">
          {letter}
        </AvatarFallback>
      </Avatar>
    </div>
  )
}
