import { InputContainer } from './styles'

type Props = {
  value: string
  onChange: (e: string) => void
}

export function Input({ value, onChange }: Props) {
  return (
    <InputContainer>
      <input onChange={(e) => onChange(e.target.value)} value={value} />
    </InputContainer>
  )
}
