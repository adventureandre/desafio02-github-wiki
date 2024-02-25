import { ButtonContainer } from './styles'
interface Props {
  onclick: () => void
}

export function Button({ onclick }: Props) {
  return <ButtonContainer onClick={onclick}>Buscar</ButtonContainer>
}
