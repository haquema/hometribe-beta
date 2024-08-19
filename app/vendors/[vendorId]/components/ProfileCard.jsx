import Image from "next/image";
import Link from "next/link";
import ProfilePic from "../../../../public/suhba-logo.png";
import { ShieldCheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { DocumentCheckIcon, IdentificationIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import instagram from "../../../../public/icons/instagram.png"
import whatsapp from "../../../../public/icons/whatsapp.png"

const ProfileCard = ({classNames}) => {
  return (
    <div className={classNames + " flex "}>
      <div className="flex flex-row grow items-center justify-left space-x-4">
        <Image src={ProfilePic} alt="logo of company" className="border shadow-md hover:shadow-xl bg-black rounded-xl size-48 lg:size-32 md:size-36 object-contain  grow-0"/>
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
          <div className="flex items-center space-x-4 pl-1 pt-1">
            <Link href={'https://suhbaclub.com/'}>
              <GlobeAltIcon className="size-5 cursor-pointer" />
            </Link>
            <Link href={"https://www.instagram.com/suhbaclub/?locale=%E5%9C%A8%E7%BA%BF%E5%AE%9A%E5%81%9A%E6%96%87%E8%8E%B1DELE%E8%AF%81%E4%B9%A6%E8%81%94%E7%B3%BB%7B%E5%A8%81%E4%BF%A1%2BTG%2F%E9%A3%9E%E6%9C%BA%3A%40buth2788%7D0X7H8%3F%3F%3F%3F%3F%3F%D1%A7%3F%3F%C6%BEOsMqK"}>
              <Image src={instagram} alt="link to instagram" className="size-4 cursor-pointer"></Image>
            </Link>
            <Link href="https://chat.whatsapp.com/JlisHoXjovl4To50wuRdPR">
              <Image src={whatsapp} alt="link to whatsapp" className="size-4 cursor-pointer"></Image>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard;