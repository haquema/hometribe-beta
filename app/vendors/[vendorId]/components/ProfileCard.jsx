import Image from "next/image";
import ProfilePic from "../../../../public/suhbadp.png";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon, IdentificationIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import facebook from "../../../../public/icons/facebook.png"
import instagram from "../../../../public/icons/instagram.png"
import twitter from "../../../../public/icons/twitter.png"

const ProfileCard = ({classNames}) => {
  return (
    <div className={classNames + " flex "}>
      <div className="flex flex-row grow items-center justify-left space-x-4">
        <Image src={ProfilePic} alt="logo of company" className="border-2 border-white rounded-xl size-48 lg:size-32 md:size-36 object-cover grow-0"/>
        <div className="flex flex-col space-y-4 grow">
          <div className="flex space-x-2 items-center">
            <p className="font-bold text-3xl md:text-3xl">Suhba Club</p>
            <ShieldCheckIcon className="size-7  fill-red-500 text-white" />
          </div>
          <div className="flex flex-col space-y-1">
            <div className="flex flex px-1 space-x-3 items-center">
              <DocumentCheckIcon className="size-5 text-red-500"/>
              <p className="font-normal text-sm ">DBS certified</p>
            </div>
            <div className="flex flex px-1 space-x-3 items-center">
              <PlusCircleIcon className="size-5 text-red-500"/>
              <p className="font-normal text-sm w-max">First Aid Trained</p>
            </div>
            <div className="flex flex px-1 space-x-3 items-center">
              <IdentificationIcon className="size-5 text-red-500"/>
              <p className="font-normal text-sm ">ID verified</p>
            </div>
          </div>
          <div className="flex space-x-4 pl-1 pt-1">
            <Image src={facebook} alt="link to facebook" className="size-4"></Image>
            <Image src={twitter} alt="link to twitter" className="size-4"></Image>
            <Image src={instagram} alt="link to instagram" className="size-4"></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;