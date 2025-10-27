import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

type imageScr = {
  src?: string
  alt?: string
  abrv?: string
}

export function AvatarSelection({ src, alt, abrv, ...props }: imageScr) {
  return (
    <div className="flex flex-row flex-wrap items-center gap-12">
      <Avatar>
        <AvatarImage
          {...props}
          src={src ?? 'https://github.com/shadcn.png'}
          alt={alt ?? '@shadcn'}
        />
        <AvatarFallback>{(abrv = abrv ?? 'CN')}</AvatarFallback>
      </Avatar>
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
        <Avatar>
          <AvatarImage
            {...props}
            src={src ?? 'https://github.com/shadcn.png'}
            alt={alt ?? '@shadcn'}
          />
          <AvatarFallback>abrv={abrv ?? 'CN'}</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
