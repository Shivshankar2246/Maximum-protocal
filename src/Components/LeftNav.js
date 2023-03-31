import Image from "next/image";

const LeftNavbar = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 via-purple-600 to-purple-900 bg-opacity-50   h-screen  fixed top-0 left-0 flex flex-col cursor-pointer sm:items-center mb-5 items-center">
      <div className="mt-5">
        <Image src="/assets/Logo.png" width={40} height={42} />
      </div>
      <div className="mt-5">
        <Image src="/assets/Img2.png" width={20} height={16.56} />
      </div>
      <div className="mt-5">
        <Image src="/assets/Img3.png" width={24} height={24} />
      </div>
      <div className="mt-5">
        <Image src="/assets/Img4.png" width={24} height={24} />
      </div>
      <div className="mt-5">
        <Image src="/assets/Img5.png" width={24} height={24} />
      </div>
      <div className="mt-5">
        <Image src="/assets/Img6.png" width={21.12} height={22} />
      </div>
      <div className="absolute left-0 bottom-0 ">
        <Image src="/assets/Img7.png" width={22} height={16.5} />
      </div>
      <div className="absolute left-0 bottom-0 ">
        <Image src="/assets/Img8.png" width={23} height={21} />
      </div>
    </div>
  );
};

export default LeftNavbar;
