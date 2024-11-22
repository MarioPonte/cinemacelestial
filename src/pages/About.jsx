import Container from "@/components/Container";
import HeaderOne from "@/components/textElements/HeaderOne";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

function About() {
    return (
        <Container>
            <HeaderOne>Sobre o Cinema Celestial</HeaderOne>
            <div className="flex flex-col gap-10">
                <p>
                    Bem-vindo ao Cinema Celestial, um lugar onde a magia do cinema ganha vida e os sonhos são projetados na grande tela.
                    Localizado no coração de Almancil, o Cinema Celestial é mais do que um espaço de entretenimento; é um refúgio para
                    amantes da sétima arte, um lugar onde cada filme é uma nova constelação a explorar.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold">Nossa Missão</h2>
                    <p>
                        No Cinema Celestial, acreditamos no poder das histórias para inspirar, emocionar e unir pessoas.
                        Queremos oferecer a melhor experiência cinematográfica, combinando tecnologia de ponta com
                        um ambiente acolhedor, para que cada visita seja verdadeiramente memorável.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>1. Onde fica o Cinema Celestial?</AccordionTrigger>
                            <AccordionContent>
                                O Cinema Celestial está localizado em Almancil, no coração do Algarve.
                                Para mais detalhes sobre como chegar, consulte a nossa página de localização.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>2. Quais são os horários de funcionamento?</AccordionTrigger>
                            <AccordionContent>
                                Estamos abertos de segunda a domingo, das <strong>14h às 23h</strong>. Em feriados e estreias especiais,
                                nossos horários podem ser ajustados.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>3. O cinema tem estacionamento?</AccordionTrigger>
                            <AccordionContent>
                                Sim, oferecemos um estacionamento amplo e gratuito para os nossos visitantes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>4. Posso comprar bilhetes online?</AccordionTrigger>
                            <AccordionContent>
                                Claro! Basta acessar a nossa página de reservas no site oficial do Cinema Celestial,
                                escolher o filme e o horário, e garantir o seu lugar.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>5. Quais tipos de filmes são exibidos?</AccordionTrigger>
                            <AccordionContent>
                                Exibimos uma programação variada que inclui os últimos lançamentos de Hollywood,
                                filmes independentes, clássicos e até mesmo sessões especiais para toda a família.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-6">
                            <AccordionTrigger>6. Há descontos para estudantes ou idosos?</AccordionTrigger>
                            <AccordionContent>
                                Sim, oferecemos descontos especiais para estudantes, idosos e crianças menores de 12 anos.
                                Não se esqueça de trazer a documentação necessária para validação.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-7">
                            <AccordionTrigger>7. O cinema possui opções de acessibilidade?</AccordionTrigger>
                            <AccordionContent>
                                Sim, o Cinema Celestial está totalmente equipado para atender pessoas com mobilidade reduzida,
                                incluindo rampas de acesso e assentos adaptados.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-8">
                            <AccordionTrigger>8. Posso organizar um evento ou sessão privada no cinema?</AccordionTrigger>
                            <AccordionContent>
                                Com certeza! Nosso espaço está disponível para eventos corporativos, festas de aniversário e
                                sessões exclusivas. Entre em contato conosco para mais informações.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-9">
                            <AccordionTrigger>9. Existe um snack bar no cinema?</AccordionTrigger>
                            <AccordionContent>
                                Sim, temos um snack bar completo, com pipocas fresquinhas, refrigerantes,
                                doces e até opções saudáveis para você aproveitar durante o filme.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Container>
    )
}

export default About  