import Container from "./components/Container";
import HeaderOne from "./components/textElements/HeaderOne";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { movies } from "@/cinemaData/movies";
import PromotionCard from "./components/PromotionCard";

function App() {
  return (
    <section>
      <div className="bg-[linear-gradient(to_bottom,rgba(14,165,233,0.3),rgba(23,37,84,1)),url('/salacinema.jpg')] bg-cover bg-center">
        <div className="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
          <h1 className="text-2xl sm:text-5xl font-bold mb-6">CINEMA CELESTIAL</h1>
          <p className="sm:text-lg text-base text-center text-gray-200">Onde cada sessão é uma viagem às estrelas e cada história um universo a descobrir!</p>
        </div>
      </div>
      <Container>
        <HeaderOne>Destaques da Semana</HeaderOne>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            <CarouselItem key={1} className="md:basis-1/2 lg:basis-1/6">
              <div className="p-1">
                <div className="bg-transparent flex justify-center">
                  <a href={`/filmes/${movies[0].slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
                    <img src={`/movies/${movies[0].poster}`} alt="Poster" className="h-80 rounded-lg" />
                  </a>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem key={2} className="md:basis-1/2 lg:basis-1/6">
              <div className="p-1">
                <div className="bg-transparent flex justify-center">
                  <a href={`/filmes/${movies[1].slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
                    <img src={`/movies/${movies[1].poster}`} alt="Poster" className="h-80 rounded-lg" />
                  </a>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem key={3} className="md:basis-1/2 lg:basis-1/6">
              <div className="p-1">
                <div className="bg-transparent flex justify-center">
                  <a href={`/filmes/${movies[2].slug}`} className="flex w-fit p-2 hover:ring-2 ring-white/50 transition-all duration-100 rounded-lg">
                    <img src={`/movies/${movies[2].poster}`} alt="Poster" className="h-80 rounded-lg" />
                  </a>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="bg-black/25" />
          <CarouselNext className="bg-black/25" />
        </Carousel>

        <HeaderOne>Promoções e Eventos Especiais</HeaderOne>
        <p>
          No Cinema Celestial, acreditamos que o cinema é mais do que assistir a filmes, é uma oportunidade de criar momentos especiais.
          Por isso, oferecemos uma variedade de promoções exclusivas e eventos temáticos que trazem ainda mais diversão e interação para o nosso público.
        </p>
        <div className="flex flex-wrap justify-center gap-6 m-auto">
          <PromotionCard
            title="Sessões exclusivas"
            description="Temos espaço disponível para eventos corporativos, festas de aniversário e sessões exclusivas."
            background="cinemaRoom.jpg"
          />
          <PromotionCard
            title="O nosso bar"
            description="Prepare-se para saborear os melhores acompanhamentos enquanto assiste ao seu filme favorito"
            background="barProducts.jpg"
          />
          <PromotionCard
            title="Descontos para Grupos e Famílias"
            description="Aproveite preços especiais para grupos e famílias! Traga sua turma e torne o momento no Cinema Celestial ainda mais divertido e acessível."
            background="family.jpg"
          />
          <PromotionCard
            title="Experiência VIP"
            description="Assista aos seus filmes favoritos com o máximo conforto. Salas exclusivas, poltronas reclináveis e atendimento diferenciado esperam por si no Cinema Celestial!"
            background="vip.jpg"
          />
        </div>
      </Container>
    </section>
  )
}

export default App;