"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react"; // Ícone para indicar o menu

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen bg-gray-900 text-white flex flex-col p-4 shadow-lg z-40"
      initial={{ width: "4rem" }} // Largura inicial pequena
      animate={{ width: isOpen ? "16rem" : "4rem" }} // Expande ao passar o mouse
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Ícone de Menu */}
      <div className="flex items-center space-x-2 mb-4">
        <Menu className="w-6 h-6" />
        {isOpen && <span className="text-lg font-bold">Menu</span>}
      </div>

      {/* Links da Sidebar */}
      <ul className="space-y-4">
        <li>
          <Link href="/">
            <span className="block p-2 rounded hover:bg-gray-700">
              🏠 {isOpen && "Home"}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/student_data">
            <span className="block p-2 rounded hover:bg-gray-700">
              📄 {isOpen && "Dados do Aluno"}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/karate_history">
          <span className="block p-2 rounded hover:bg-gray-700">
              🥋 {isOpen && "História do Karate"}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/technique">
          <span className="block p-2 rounded hover:bg-gray-700">
              🥋 {isOpen && "Tecnicas"}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/kumite">
            <span className="block p-2 rounded hover:bg-gray-700">
              🥋 {isOpen && "kumite"}
            </span>
          </Link>
        </li>
        <li>
          <Link href="/kata">
            <span className="block p-2 rounded hover:bg-gray-700">
              🥋 {isOpen && "kata"}
            </span>
          </Link>
        </li>
      </ul>
    </motion.div>
  );
};

export default SideNav;
