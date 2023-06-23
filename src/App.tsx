import Card from "./component/Card"
import { useFetchRepository } from "./hooks/useRepo"
import { useFavoriteReposStore } from "./store/favoriteRepo"
import { FormEvent, useState } from "react"
``
function App() {
  const [gitHubUser, setgitHubUser] = useState<string>("")
  const { isLoading, data } = useFetchRepository(gitHubUser)
  const { favoriteReposIds } = useFavoriteReposStore()

  if (isLoading) return <div>is Loading...</div>

  const handleRepo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const nameUser = new FormData(e.currentTarget)
    const nameRepo = nameUser.get('nameUser')
    setgitHubUser(nameRepo !== null ? String(nameRepo) : '')

  }
  return (
    <div>
      <form onSubmit={handleRepo}>
        <label htmlFor="nameUser">Nombre de Usuario</label>
        <input type="text" id="nameUser" name="nameUser"></input>
        <button>Ver Repos</button>
      </form>
      {isLoading ?
        "Is loading..."
        :
        data?.map(repository => (
          <div>
            <Card repository={repository}
              key={repository.id}
              isFavorite={favoriteReposIds.includes(repository.id)}
            />
          </div>
        ))}
    </div >
  )
}

export default App
