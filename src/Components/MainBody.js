import Image from "next/image";
import Cards from "./Cards";

import Graph1 from "./Graph1";
import Graph2 from "./Graph2";
import Graph3 from "./Graph3";
import Graph4 from "./Graph4";

const MainBody = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 to-violet-900 flex flex-col h-screen ">
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
          <div className="flex space-x-2 p-3 mt-7">
            <button className="bg-gradient-to-r from-purple-400 to-fuchsia-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              <Image
                src="/assets/Play.png"
                width={8}
                height={10}
                className="inline-block align-middle mr-2"
              />
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
      <div className="m-10">
        <div className="flex justify-between">
          <h1 className="text-white text-xl">Max Indexes</h1>
          <h1 className="text-gray-300 text-xl">View all</h1>
        </div>
        <div className=" flex  pt-5 space-x-4">
          <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 p-5">
            <div>
              {" "}
              <Graph1 />
            </div>
            <div className="flex pt-2 ">
              {" "}
              <Image src="/assets/SOL.png" width={15} height={12} />
              <Image src="/assets/USDT.png" width={15} height={12} />
              <Image src="/assets/XRP.png" width={15} height={12} />
              <Image src="/assets/LTC.png" width={15} height={12} />
              <div className="ml-auto">
                <p className="text-white  bg-gradient-to-tr from-purple-700 via-purple-800 to-indigo-800 rounded-xl px-5 ">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 p-5">
            {" "}
            <div>
              {" "}
              <Graph2 />
            </div>
            <div className="flex pt-2 ">
              {" "}
              <Image src="/assets/SOL.png" width={15} height={12} />
              <Image src="/assets/USDT.png" width={15} height={12} />
              <Image src="/assets/XRP.png" width={15} height={12} />
              <Image src="/assets/LTC.png" width={15} height={12} />
              <div className="ml-auto">
                <p className="text-white  bg-gradient-to-tr from-purple-700 via-purple-800 to-indigo-800 rounded-xl px-5 ">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 p-5">
            {" "}
            <div>
              {" "}
              <Graph3 />
            </div>
            <div className="flex pt-2 ">
              {" "}
              <Image src="/assets/SOL.png" width={15} height={12} />
              <Image src="/assets/USDT.png" width={15} height={12} />
              <Image src="/assets/XRP.png" width={15} height={12} />
              <Image src="/assets/LTC.png" width={15} height={12} />
              <div className="ml-auto">
                <p className="text-white  bg-gradient-to-tr from-purple-700 via-purple-800 to-indigo-800 rounded-xl px-5 ">
                  View
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 p-5">
            {" "}
            <div>
              {" "}
              <Graph4 />
            </div>
            <div className="flex pt-2 ">
              {" "}
              <Image src="/assets/SOL.png" width={15} height={12} />
              <Image src="/assets/USDT.png" width={15} height={12} />
              <Image src="/assets/XRP.png" width={15} height={12} />
              <Image src="/assets/LTC.png" width={15} height={12} />
              <div className="ml-auto">
                <p className="text-white  bg-gradient-to-tr from-purple-700 via-purple-800 to-indigo-800 rounded-xl px-5 ">
                  View
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBody;
