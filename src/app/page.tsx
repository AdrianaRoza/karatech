import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center h-screen rounded-xl overflow-hidden">
      {/* Lado esquerdo com login */}
      <div className="hidden md:block md:w-1/3 bg-[url('/karateca.jpg')] bg-cover bg-center rounded-l-xl"></div>

      {/* Lado direito com imagem */}
      <div className="w-full md:w-2/3 flex flex-col justify-center items-center bg-gradient-to-br from-slate-600 via-slate-400 to-slate-800 rounded-l-xl">
        <h1 className="text-center text-gray-600 text-5xl flex flex-col font-serif tracking-wide leading-tight mb-6">
          <span>Disciplina, </span>
          <span>força e respeito! 🥋</span> 
          <span className="text-black">Venha praticar Karate</span> 
          <span>e descubra seu verdadeiro potencial!</span>
        </h1>

        {/* Botão Login centralizado abaixo do texto */}
        <div className="w-full flex justify-center">
          <Link 
            href="/Home"
            className="text-black text-xl font-bold px-6 py-3 rounded-xl hover:bg-gray-500 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
