import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/16/solid";

const VendorCard = (props) => {
  return (
    <Link href={`/vendors/${props.id}`}>
      <div className="flex flex-col">
        <div className="border border-black h-80 w-80 rounded-3xl relative">
          <Image
            className={" object-cover rounded-3xl" + ` bg-${props.bgColor}`}
            src={props.photo}
            alt="Picture of the vendor"
            fill
          />
        </div>
        <div className="flex justify-between mt-3">
          <div className="flex flex-col">
            <p className="font-semibold text-lg">{props.name}</p>
            <p className="text-sm text-slate-500">{props.location}</p>
          </div>
          <div className="flex items-top space-x-1">
            <StarIcon className="size-[22px] fill-orange-600" />
            <p>{props.rating}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VendorCard;