import Container from "@/components/Container";
import ProductCard from "@/components/ProductCard";
import HeaderOne from "@/components/textElements/HeaderOne";

function Products() {
  return (
    <Container>
      <HeaderOne>Produtos</HeaderOne>
      <p>
        No Cinema Celestial, a experiência vai além do filme. Pensamos em cada detalhe para tornar a sua visita memorável,
        incluindo uma variedade de produtos de alta qualidade que combinam com a magia do cinema. Desde os clássicos
        snacks até itens exclusivos com a nossa assinatura celestial, temos tudo o que você precisa para completar a sua sessão.
      </p>
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Menus</h2>
        <div className="flex flex-wrap gap-6">
          <ProductCard name="Menu Pipocas Celestiais" info="Pipocas + Bebida" price={4.00} image="/products/menu1.webp" />
          <ProductCard name="Menu Nachos Celestiais" info="Nachos + Bebida" price={2.25} discount={25} image="/products/menu2.webp" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Produtos individuais</h2>
        <div className="flex flex-wrap gap-6">
          <div className="flex gap-4 p-4 border border-white/25 rounded-xl w-fit">
            <img src="/products/product1.webp" alt="refrigerante" className="h-28 w-28 rounded-xl border border-white/25" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Refrigerante</h3>
                <span>aaa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xl font-semibold">1.50€</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 border border-white/25 rounded-xl w-fit">
            <img src="/products/product2.webp" alt="refrigerante" className="h-28 w-28 rounded-xl border border-white/25" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Pipocas</h3>
                <span>aaa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xl font-semibold">2.50€</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 border border-white/25 rounded-xl w-fit">
            <img src="/products/product3.webp" alt="refrigerante" className="h-28 w-28 rounded-xl border border-white/25" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Nachos</h3>
                <span>aaa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xl font-semibold">3€</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 p-4 border border-white/25 rounded-xl w-fit">
            <img src="/products/product4.webp" alt="refrigerante" className="h-28 w-28 rounded-xl border border-white/25" />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold">Água</h3>
                <span>aaa</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xl font-semibold">1.50€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Container>
  )
}

export default Products;