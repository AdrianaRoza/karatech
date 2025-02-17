import Link from "next/link"

const Login = () => {
  return (
    <div className="flex justify-center h-screen">
      {/* Lado esquerdo com imagem */}
      <div className="hidden md:block md:w-1/3 bg-[url('/karateca.jpg')] bg-cover bg-center"></div>

      {/* Lado direito com login */}
      <div className="w-full md:w-1/2 flex justify-center items-center bg-gray-700">

        <button className="bg-gray-700 text-white px-5 py-2 rounded-lg hover:opacity-40 font-bold">
        <Link href="/Home">
          Login
        </Link>
      </button>
      </div>
    </div>
  )
}

export default Login
