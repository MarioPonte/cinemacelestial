import { BookText, Clapperboard, Film, Home, Popcorn } from "lucide-react"

function Navbar() {
    return (
        <nav className="">
            <div className="bg-sky-200 p-2">
                <img src="/logoTrabalho.png" alt="logo" className="h-16" />
            </div>
            <div className="flex gap-1 bg-sky-600 p-2 text-sm text-sky-200 font-medium">
                <a href="/" className="flex items-center w-fit gap-1 rounded-md border-2 border-white/25 p-1">
                    <Home className="h-5" />
                    <span>Início</span>
                </a>
                <a href="/sobre" className="flex items-center w-fit gap-1 rounded-md border-2 border-white/25 p-1">
                    <BookText className="h-5" />
                    <span>Sobre</span>
                </a>
                <a href="/filmes" className="flex items-center w-fit gap-1 rounded-md border-2 border-white/25 p-1">
                    <Film className="h-5" />
                    <span>Filmes</span>
                </a>
                <a href="/" className="flex items-center w-fit gap-1 rounded-md border-2 border-white/25 p-1">
                    <Clapperboard className="h-5" />
                    <span>Próximos Lançamentos</span>
                </a>
                <a href="/produtos" className="flex items-center w-fit gap-1 rounded-md border-2 border-white/25 p-1">
                    <Popcorn className="h-5" />
                    <span>Produtos</span>
                </a>
            </div>
        </nav>
    )
}

export default Navbar