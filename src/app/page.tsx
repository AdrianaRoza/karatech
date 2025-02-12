import Link from "next/link"

const Login = () => {
  return (
    <div 
      className="bg-blue-300 w-screen h-screen
      flex justify-center items-center"
    >

      <button 
        className="bg-blue-700 text-white px-5 py-2 rounded-lg 
        hover:opacity-40 font-bold"
      >
        <Link href="/Home">
          Login
        </Link>
      </button>

    </div>
  )
}

export default Login
