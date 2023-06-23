import { Repository } from '../hooks/type'
import { useFavoriteReposStore } from "../store/favoriteRepo";

type CardProps = {
  repository: Repository
  isFavorite: boolean
}

function Card({ repository, isFavorite }: CardProps) {

  const addFavoriteRepo = useFavoriteReposStore(state => state.addFavoriteRepo)
  const removeFavoriteRepo = useFavoriteReposStore(state => state.removeFavoriteRepo)

  const toogleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id)
      return
    }

    addFavoriteRepo(repository.id)
  }

  return (
    <div>
      <h1>{repository.name}</h1>
      <button onClick={ toogleFavorite}>
        {
          isFavorite ? 'Dislike' : 'Like'
        }
      </button>
    </div>
  )
}

export default Card
