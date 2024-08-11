import Image from "next/image";
import ProfilePic from "../../../../public/suhbadp.png";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const ProfileCard = ({classNames}) => {
  return (
    <div className={classNames + " flex justify-between"}>
      <div className="flex flex-col basis-3/4 items-center justify-center space-y-4">
        <Image src={ProfilePic} alt="logo of company" className="border-2 border-black rounded-full size-40 lg:size-32 md:size-36 object-contain"/>
        <div className="flex space-x-2">
          <p className="font-bold text-3xl md:text-3xl">Suhba Club</p>
          <ShieldCheckIcon className="size-7 fill-red-500 text-white" />
        </div>
      </div>
      <div className="flex flex-col basis-1/4 items-start">
        <div className="flex flex-col justify-end pb-6 border-b-2 border-black w-full grow">
          <p className="font-semibold text-base text-lg text-red-600 md:text-xl">80+</p>
          <p className="font-light text-xs">Members</p>
        </div>
        <div className="flex flex-col justify-center border-b-2 border-black w-full grow">
          <p className="font-semibold text-base text-lg text-red-600 md:text-xl">4.2/5.0</p>
          <p className="font-light text-xs">Rating</p>
        </div>
        <div className="flex flex-col justify-start pt-6 w-full grow">
          <p className="font-semibold text-base text-lg text-red-600 md:text-xl">2020</p>
          <p className="font-light text-xs">Founded</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;