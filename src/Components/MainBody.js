import Image from "next/image";
import Cards from "./Cards";

const MainBody = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 flex flex-col h-screen ">
      <div className="bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-900 p-5 w-7/10 m-10 rounded-3xl flex space-x-5">
        <div>
          <div className="items-center">
            <h1 className="text-white">Welcome Ram!</h1>
          </div>
          <div className="mt-7">
            <h1 className="text-3xl text-white">
              Enhance your financial life with maximum protocol
            </h1>
          </div>
          <div className="flex space-x-2  p-3 mt-7">
            <Image src="/assets/Play.png" width={8} height={10} />
            <button className="bg-pink-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Watch now
            </button>
          </div>
        </div>
        <div className="relative h-full w-1/2">
          <Image src="/assets/Mainlogo.png" objectFit="contain" layout="fill" />
        </div>
      </div>
      <div className="m-10">
        <div className="flex justify-between">
          <h1 className="text-white text-xl">Max picks</h1>
          <h1 className="text-gray-300 text-xl">View all</h1>
        </div>
        <Cards className="grid grid-cols-4" />
      </div>
    </div>
  );
};

export default MainBody;
