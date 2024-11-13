import { useParams } from "react-router-dom";

function MoviePage() {
  const { slug } = useParams();

  return (
    <div>
      <p>{slug}</p>
      {/* Exiba outros dados do filme conforme necessário */}
    </div>
  );
}

export default MoviePage;