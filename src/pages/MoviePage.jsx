import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movies } from "@/cinemaData/movies";
import Container from "@/components/Container";

function MoviePage() {
  const { slug } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Procurar o filme correspondente ao slug
    const foundMovie = movies.find((movie) => movie.slug === slug);
    setMovie(foundMovie);
  }, [slug]);

  if (!movie) return <div>Filme não encontrado.</div>;

  return (
    <Container>
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-[800px] flex flex-col gap-10">
          <div className="flex gap-10">
            <img src={`/movies/${movie.poster}`} alt="Poster" className="h-80 rounded-lg" />
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              <div className="flex gap-2">
                <span className="border-2 rounded-md border-white/50 text-white/50 p-1 text-sm w-fit">M{movie.classification}</span>
                <span className="border-2 rounded-md border-white/50 text-white/50 p-1 text-sm w-fit">{movie.genre}</span>
                <span className="border-2 rounded-md border-white/50 text-white/50 p-1 text-sm w-fit">{movie.duration}m</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Actores:</span><span>{movie.actors}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Realizador:</span><span>{movie.director}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Estreia:</span><span>{movie.release}</span>
              </div>
              <div className="flex gap-2">
                <span className="font-semibold">Ano:</span><span>{movie.year}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Sinopse:</h2>
            <p>{movie.details}</p>
          </div>
        </div>
        <div>
          <iframe className="w-[800px] h-[400px] rounded-md" src={`https://www.youtube.com/embed/${movie.trailer}`} allowFullscreen="true"></iframe>
        </div>
      </div>
    </Container>
  );
}

export default MoviePage;