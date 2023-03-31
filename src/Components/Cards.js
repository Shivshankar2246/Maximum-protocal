import Image from "next/image";

const Card = ({ imageSrc, name1, name2, dollar, percentage, isPositive }) => {
  const color = isPositive ? "text-blue-500" : "text-red-500";

  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="flex items-center bg-gradient-to-r from-fuchsia-800 to-purple-700 rounded-full pr-2">
        <div className="w-16 h-16 mr-4 pt-4 pl-5">
          <Image src={imageSrc} alt="" width={20} height={25} />
        </div>
        <div className="flex-col">
          <h2 className="font-bold text-lg text-white">{name1}</h2>
          <h3 className="text-gray-900">{name2}</h3>
        </div>
        <div className={`ml-auto ${color}`}>
          <p className="text-2xl font-bold">{dollar}</p>
          <p>{percentage}%</p>
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
    <div className="flex flex-wrap">
      {limitedData.map((item) => (
        <Card key={item.name1} {...item} />
      ))}
    </div>
  );
};

export default Cards;
