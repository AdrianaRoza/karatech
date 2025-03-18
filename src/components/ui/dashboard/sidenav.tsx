"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Importa o hook para verificar a URL atual
import { Menu, X } from "lucide-react"; // Ícone para indicar o menu

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtém a rota atual

  if (pathname === "/") {
    return null;
  }

  return (
    <>
      {/* Ícone do Menu Flutuante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-2 left-4 p-2  text-white z-50"
        >
          <Menu/>
        </button>
      )}

      {/* Sidebar */}
      {isOpen && (
        <motion.div
          className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-slate-600 via-slate-400 to-slate-800 text-white flex flex-col p-4 shadow-lg z-40"
          initial={{ x: "-100%" }} // Começa fora da tela
          animate={{ x: 0 }} // Animação de entrada
          exit={{ x: "-100%" }} // Animação de saída
          transition={{ duration: 0.3 }}
        >
          {/* Botão de Fechar */}
          <button onClick={() => setIsOpen(false)} className="self-end mb-4">
            <X className="w-6 h-6" />
          </button>

          {/* Links da Sidebar */}
          <ul className="space-y-4">
            <li>
              <Link href="/" passHref>
                <span className="block p-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                  🏠 Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="/student_data" passHref>
                <span className="block p-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                  📄 Dados do Aluno
                </span>
              </Link>
            </li>
            <li>
              <Link href="/karate_history" passHref>
                <span className="block p-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                  🥋 História do Karate
                </span>
              </Link>
            </li>
            <li>
              <Link href="/technique" passHref>
                <span className="block p-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                  🥋 Técnicas
                </span>
              </Link>
            </li>
            <li>
              <Link href="/students" passHref>
                <span className="block p-2 rounded hover:bg-gray-700" onClick={() => setIsOpen(false)}>
                  🥋 Alunos
                </span>
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </>
  );
};

export default SideNav;
