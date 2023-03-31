import Image from "next/image";

const RightBar = () => {
  return (
    <div className="bg-gradient-to-tr from-purple-800 via-purple-900 to-indigo-800 flex flex-col h-screen justify-center items-center">
      <div className="mt-10 ">
        <h1 className="text-3xl text-white text-center">
          Personalized portfolio for maximum returns
        </h1>
      </div>
      <div className="flex justify-center items-center h-1/2 w-full">
        <div className="relative h-full w-full">
          <Image
            src="/assets/Mainlogo2.png"
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
      <div className="mt-5  ">
        <button className="bg-pink-500 text-white w-full py-2 px-4 rounded-md">
          Start now
        </button>
      </div>
    </div>
  );
};

export default RightBar;
