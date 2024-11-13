import { movies } from "@/cinemaData/movies";

function Movies() {

  console.log(movies);

  return (
    <section>
      <h1 className="text-4xl font-semibold text-blue-600">Filmes em cartaz</h1>
      <div className="flex flex-wrap gap-8 m-4">
        <a href="/filmes/venom-a-ultima-danca" className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
          <img src={`/movies/${movies[0].poster}`} alt="Poster" className="h-80 rounded-lg" />
        </a>
        <a href="/filmes/red-one" className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
          <img src={`/movies/${movies[1].poster}`} alt="Poster" className="h-80 rounded-lg" />
        </a>
      </div>
    </section>
  )
}

export default Movies;