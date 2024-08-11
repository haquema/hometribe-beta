import Image from "next/image";
import StockPhoto from "../../../../public/profile-stock-2.jpg"

const ImageCarousel = ({classNames}) => {
  return (
    <div className={classNames + " flex space-x-1 justify-between"}>
      <Image className="rounded-lg" src={StockPhoto} alt={"test"} width={180} />
      <Image className="rounded-lg" src={StockPhoto} alt={"test"} width={180} height={200} />
      {/* <Image className="rounded-lg" src={StockPhoto} alt={"test"} width={200} height={200} /> */}
    </div>
  )
}

export default ImageCarousel;