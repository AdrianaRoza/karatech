"use client";

import { usePathname } from "next/navigation"; // Importa o hook para verificar a URL atual
import Link from "next/link";

const Header = () => {
  const pathname = usePathname(); // Obtém a rota atual

  const isHomePage = pathname === "/"; // Verifica se estamos na página inicial

  return (
    <div className="bg-gradient-to-r from-slate-600 via-slate-400 to-slate-800 py-3">
      <div className={`flex items-center px-6 ${isHomePage ? 'justify-between' : 'justify-center'}`}>
        {/* Título */}
        <h1 className="text-white font-bold text-xl">Karatech</h1>

        {/* Exibe os links de navegação apenas na Home */}
        {isHomePage && (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-white hover:underline">
                  🏠 Home
                </Link>
              </li>
              <li>
                <Link href="/karate_history" className="text-white hover:underline">
                  🥋 História do Karate
                </Link>
              </li>
              <li>
                <Link href="/technique" className="text-white hover:underline">
                  🥋 Técnicas
                </Link>
              </li>

                <Link 
                  href="/Home"
                  className="text-white hover:underline">
                  Login
                </Link>
            </ul>
          </nav>
        )}
      </div>
    </div>
  )
}

export default Header
