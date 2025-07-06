import Image from "next/image";
import Gospel from "../../public/Image/Gospel.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-2xl p-6 w-80 shadow-lg text-white text-center">
        <Image
          src={Gospel}
          alt="ISADORA POMPEO"
          className="rounded-xl mb-4"
          width={300}
          height={300}
        />
        <div className="mb-2">
          <h3 className="text-lg font-semibold">ISADORA POMPEO</h3>
          <p className="text-sm text-gray-400">Spotify</p>
        </div>

        <div className="flex justify-between text-xs text-gray-300 mt-4 mb-2">
          <span>0:00</span>
          <span>0:00</span>
        </div>

        <div className="flex items-center justify-around mt-2">
          <button className="text-white text-lg hover:text-gray-300">&laquo;</button>
          <button className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl hover:bg-red-600 cursor-pointer">
            &#9658;
          </button>
          <button className="text-white text-lg hover:text-gray-300">&raquo;</button>
          <button className="text-white text-xl hover:text-gray-300">&#128266;</button>
        </div>
      </div>
    </div>
  );
}
