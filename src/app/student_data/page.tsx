'use client';
import Link from "next/link";

const Student_data = () =>{
    return (
		
		<div className="w-full md:w-2/3 flex justify-center items-center bg-gradient-to-br from-slate-600 via-slate-400 to-slate-800 rounded-l-xl">
		  <button className="rounded-xl text-black px-5 py-2 hover:opacity-40 font-bold">
			<Link href="/Home">
			  Login
			</Link>
		  </button>
		</div>
	)
}

export default Student_data;


