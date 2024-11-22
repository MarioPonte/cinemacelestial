import { movies } from "@/cinemaData/movies";
import Container from "@/components/Container";
import HeaderOne from "@/components/textElements/HeaderOne";

function Movies() {

  console.log(movies);

  return (
    <Container>
      <HeaderOne>Filmes em cartaz</HeaderOne>
      <div className="flex flex-wrap gap-6">
        {movies.map((movie) => (
          <a href={`/filmes/${movie.slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
            <img src={`/movies/${movie.poster}`} alt={`${movie.title} Poster`} className="h-80 rounded-lg" />
          </a>
        ))}
      </div>
    </Container>
  )
}

export default Movies;