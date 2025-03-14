import Link from "next/link";

const Karate_history = () =>{
    return(
    <>
        <div className="text-black">
             História do Karate-Do
        </div>
				<Link href="/">
				<span className=" text-black p-1 rounded hover:bg-gray-400">
					Voltar para Home
				</span>
				</Link>

    </>
    )
}

export default Karate_history;
