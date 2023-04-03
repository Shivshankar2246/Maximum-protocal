import Image from "next/image";

const Card = ({ imageSrc, name1, name2, dollar, percentage, isPositive }) => {
  const color = isPositive ? "text-blue-500" : "text-red-500";

  return (
    <div className="mx-auto flex  items-center justify-center">
      <div className=" w-full rounded-md bg-gradient-to-b from-red-300 to-cyan-400 p-1 rounded-xl">
        <div className="flex h-full w-full items-center bg-gradient-to-r from-indigo-900 to-violet-900  pr-2 rounded-xl">
          <div className="w-16 h-16 mr-4 pt-4 pl-5">
            <Image src={imageSrc} alt="" width={20} height={25} />
          </div>
          <div className="flex-col">
            <h2 className="font-bold text-lg text-white">{name1}</h2>
            <h3 className="text-gray-500">{name2}</h3>
          </div>
          <div className={`ml-auto ${color}`}>
            <p className="text-2xl font-bold">{dollar}</p>
            <p>{percentage}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  const data = [
    {
      imageSrc: "/assets/Bitcoin.png",
      name1: "BTC",
      name2: "Bitcoin",
      dollar: 5329,
      percentage: 22,
      isPositive: true,
    },
    {
      imageSrc: "/assets/ETH.png",
      name1: "ETH",
      name2: "Etherium",
      dollar: 5329,
      percentage: 22,
      isPositive: false,
    },
    {
      imageSrc: "/assets/XRP.png",
      name1: "XRP",
      name2: "Ripple XRP",
      dollar: 5329,
      percentage: 22,
      isPositive: true,
    },
    {
      imageSrc: "/assets/LTC.png",
      name1: "LTC",
      name2: "Litecoin",
      dollar: 5329,
      percentage: 22,
      isPositive: false,
    },
    {
      imageSrc: "/assets/USDT.png",
      name1: "USDT",
      name2: "Tether USD",
      dollar: 5329,
      percentage: 22,
      isPositive: true,
    },
    {
      imageSrc: "/assets/Bnb.png",
      name1: "BNB",
      name2: "Binance C",
      dollar: 5329,
      percentage: 22,
      isPositive: false,
    },
    {
      imageSrc: "/assets/ALGO.png",
      name1: "ALGO",
      name2: "Algorand",
      dollar: 5329,
      percentage: 22,
      isPositive: true,
    },
    {
      imageSrc: "/assets/SOL.png",
      name1: "SOL",
      name2: "Solana",
      dollar: 5329,
      percentage: 22,
      isPositive: false,
    },
  ];
  const limitedData = data.slice(0, 8);

  return (
    <div className="grid grid-cols-4 gap-6 w-full max-w-screen-xl mx-auto">
      {limitedData.map((item) => (
        <div key={item.name1} className="w-full">
          <Card {...item} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
