import Cards from "@/Components/Cards";
import LeftNavbar from "@/Components/LeftNav";
import MainBody from "@/Components/MainBody";
import RightBar from "@/Components/RightBar";

export default function Home() {
  return (
    <div className="flex ">
      <div>
        <LeftNavbar />
      </div>
      <div className="basis-4/5 ml-5  ">
        <div>
          <MainBody />
        </div>
      </div>
      <div className="basis-1/5">
        <RightBar />
      </div>
    </div>
  );
}
