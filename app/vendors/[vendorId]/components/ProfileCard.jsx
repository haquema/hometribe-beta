import Image from "next/image";
import ProfilePic from "../../../../public/suhbadp.png";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon, IdentificationIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const ProfileCard = ({classNames}) => {
  return (
    <div className={classNames + " flex px-4"}>
      <div className="flex flex-col grow items-center justify-center space-y-6">
        <Image src={ProfilePic} alt="logo of company" className="border-2 border-black rounded-full size-40 lg:size-32 md:size-36 object-contain"/>
        <div className="flex space-x-2 items-center">
          <p className="font-bold text-3xl md:text-3xl">Suhba Club</p>
          <ShieldCheckIcon className="size-7  fill-red-500 text-white" />
        </div>
        <div className="flex space-x-2 w-fit  justify-center">
          <div className="border border-red-500 rounded-md flex flex px-1 py-0.5 space-x-1 items-center">
            <DocumentCheckIcon className="size-5 text-red-500"/>
            <p className="font-medium text-xs">DBS certified</p>
          </div>
          <div className="border border-red-500 rounded-md flex flex px-1 py-0.5 space-x-1 items-center">
            <PlusCircleIcon className="size-5 text-red-500"/>
            <p className="font-medium text-xs w-max">First Aid Trained</p>
          </div>
          <div className="border border-red-500 rounded-md flex flex px-1 py-0.5 space-x-1 items-center">
            <IdentificationIcon className="size-5 text-red-500"/>
            <p className="font-medium text-xs">ID verified</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;