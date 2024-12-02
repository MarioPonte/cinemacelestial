import { nextLaunches } from "@/cinemaData/movies";
import Container from "@/components/Container";
import HeaderOne from "@/components/textElements/HeaderOne";

function NextLaunches() {
  return (
    <Container>
      <HeaderOne>Próximos Lançamentos</HeaderOne>
      <div className="flex flex-wrap gap-6">
        {nextLaunches.map((movie) => (
          <a key={movie.id} href={`/filmes/${movie.slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
            <img src={`/movies/${movie.poster}`} alt={`${movie.title} Poster`} className="h-80 rounded-lg" />
          </a>
        ))}
      </div>
    </Container>
  )
}

export default NextLaunches;