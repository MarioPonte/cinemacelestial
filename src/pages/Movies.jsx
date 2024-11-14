import { movies } from "@/cinemaData/movies";
import Container from "@/components/Container";

function Movies() {

  console.log(movies);

  return (
    <Container>
      <h1 className="text-4xl font-semibold text-blue-100">Filmes em cartaz</h1>
      <div className="flex flex-wrap gap-6">
        <a href={`/filmes/${movies[0].slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
          <img src={`/movies/${movies[0].poster}`} alt="Poster" className="h-80 rounded-lg" />
        </a>
        <a href="/filmes/red-one" className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
          <img src={`/movies/${movies[1].poster}`} alt="Poster" className="h-80 rounded-lg" />
        </a>
      </div>
    </Container>
  )
}

export default Movies;