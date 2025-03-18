import Link from "next/link";

const Technique = () => {
    return (
        <div className="grid grid-flow-row grid-cols- 
				p-2 mt-2 rounded-lg h-56">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Técnicas</h1>
            <div className="flex flex-col space-y-4">
            <Link 
              href="/kata" 
              className="text-black block text-xl p-2 rounded hover:bg-gray-500">
                Kata
            </Link>

            <Link 
              href="/kumite" 
              className="text-black block text-xl p-2 rounded hover:bg-gray-500">
                Kumite
            </Link>

            </div>
        </div>
    );
}

export default Technique;
