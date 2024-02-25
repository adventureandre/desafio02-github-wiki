import { useState } from 'react'
import gitHub from '../assets/gitHub.svg'
import { Input } from '../components/Input'
import { ItemRepo } from '../components/ItemRepo'
import { Container } from './styles'
import { Button } from '../components/Button'
import { api } from '../services/api'

export interface Props {
  id: number
  name: string
  full_name: string
  url: string
}

export function App() {
  const [currentRepo, setCurrentRepo] = useState<string>('')
  const [repos, setRepos] = useState<Props[]>([])

  const handleSearchRepo = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`)

      if (data.id) {
        const isExist = repos.find((repo) => repo.id === data.id)

        const repodata: Props = {
          id: data.id,
          name: data.name,
          full_name: data.full_name,
          url: data.html_url,
        }

        if (!isExist) {
          setRepos((prev) => [...prev, repodata])
          setCurrentRepo('')
        } else {
          alert('Repositório já existe na lista')
        }
      }
    } catch (error) {
      alert('Repositório não encontrado')
    }
  }

  const handleRemoveRepo = (id: number) => {
    const updatedRepos = repos.filter((repo) => repo.id !== id)
    setRepos(updatedRepos)
  }

  return (
    <Container>
      <img src={gitHub} alt="" width={72} height={72} />
      <Input value={currentRepo} onChange={setCurrentRepo} />
      <Button onclick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          handleRemoveRepo={handleRemoveRepo}
        />
      ))}
    </Container>
  )
}
