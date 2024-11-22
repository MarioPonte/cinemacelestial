import { movies } from "@/cinemaData/movies";
import Container from "@/components/Container";
import HeaderOne from "@/components/textElements/HeaderOne";

function Products() {

  console.log(movies);

  return (
    <Container>
      <HeaderOne>Produtos</HeaderOne>
      <p>
        No Cinema Celestial, a experiência vai além do filme. Pensamos em cada detalhe para tornar a sua visita memorável,
        incluindo uma variedade de produtos de alta qualidade que combinam com a magia do cinema. Desde os clássicos
        snacks até itens exclusivos com a nossa assinatura celestial, temos tudo o que você precisa para completar a sua sessão.
      </p>
      <img src="/products/pipocas.png" alt="pipocas" className="h-40 w-40" />
      <img src="/products/refrigerante.png" alt="refrigerante" className="h-40 w-40" />
    </Container>
  )
}

export default Products;