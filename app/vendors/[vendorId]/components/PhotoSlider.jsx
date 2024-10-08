'use client'
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import photo1 from "../../../../public/photo1.png";
import photo2 from "../../../../public/photo2.png";
import photo3 from "../../../../public/photo3.png";
import photo4 from "../../../../public/photo4.png";

const PhotoSlider = ({classNames}) => {
  return (
    <div className={classNames + ' rounded-lg hover:bg-stone-100 flex p-2 scroll-smooth flex space-x-3 overflow-x-scroll overscroll-x-contain'}>
      <Image width={100} alt="stock photo" src={photo1} className="rounded-md size-40"/>
      <Image width={100} alt="stock photo" src={photo2} className="rounded-md size-40"/>
      <Image width={100} alt="stock photo" src={photo3} className="rounded-md size-40"/>
      <Image width={100} alt="stock photo" src={photo4} className="rounded-md size-40"/>
    </div>
  )
}

export default PhotoSlider;