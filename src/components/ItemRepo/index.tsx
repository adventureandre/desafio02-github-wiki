import { Props } from '../../pages/App'
import { ItemContainer } from './style'

interface ItemProps {
  repo: Props
  handleRemoveRepo: (id: number) => void
}

export function ItemRepo({ repo, handleRemoveRepo }: ItemProps) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.url} rel="noreferrer" target="_blank">
        Ver o repositorio
      </a>
      <br />
      <button className="remove" onClick={() => handleRemoveRepo(repo.id)}>
        Remover
      </button>
      <hr />
    </ItemContainer>
  )
}
