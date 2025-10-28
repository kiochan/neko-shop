import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type selectNationProps = {
  className?: string
  nation: string
}

export function SelectNation({ className, nation, ...props }: selectNationProps) {
  return (
    <Select>
      <SelectTrigger {...props} className={className ?? 'w-[180px]'}>
        <SelectValue placeholder={nation ?? 'Select your country'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel> </SelectLabel>
          <SelectItem value=" "> </SelectItem>
          <SelectItem value="china">China</SelectItem>
          <SelectItem value="usa">United States</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="canada">Canada</SelectItem>
          <SelectItem value="australia">Australia</SelectItem>
          <SelectItem value="japan">Japan</SelectItem>
          <SelectItem value="south-korea">South Korea</SelectItem>
          <SelectItem value="france">France</SelectItem>
          <SelectItem value="germany">Germany</SelectItem>
          <SelectItem value="italy">Italy</SelectItem>
          <SelectItem value="spain">Spain</SelectItem>
          <SelectItem value="russia">Russia</SelectItem>
          <SelectItem value="brazil">Brazil</SelectItem>
          <SelectItem value="mexico">Mexico</SelectItem>
          <SelectItem value="india">India</SelectItem>
          <SelectItem value="indonesia">Indonesia</SelectItem>
          <SelectItem value="saudi-arabia">Saudi Arabia</SelectItem>
          <SelectItem value="south-africa">South Africa</SelectItem>
          <SelectItem value="singapore">Singapore</SelectItem>
          <SelectItem value="thailand">Thailand</SelectItem>
          <SelectItem value="malaysia">Malaysia</SelectItem>
          <SelectItem value="philippines">Philippines</SelectItem>
          <SelectItem value="vietnam">Vietnam</SelectItem>
          <SelectItem value="turkey">Turkey</SelectItem>
          <SelectItem value="argentina">Argentina</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
