import Image from "next/image";
import Slider from "../components/Slider/Slider";

export default function Home() {
  return (
    <div className="relative">
      {/* {images.map((item, index) => {
        return <Image key={index} width={400} height={400} src={item} />;
      })} */}
      <Slider />
    </div>
  );
}
