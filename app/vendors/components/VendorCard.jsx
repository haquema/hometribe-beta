import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/16/solid";

const VendorCard = (props) => {
  return (
    <Link href={`/vendors/${props.id}`}>
      <div className="flex flex-col gap-1 items-center w-40">
        <div className="size-40 rounded-3xl relative">
          <Image
            className={" object-contain rounded-lg" + ` bg-${props.bgColor}`}
            src={props.photo}
            alt="Picture of the vendor"
            fill
          />
        </div>
        <div className="flex flex-col w-full pl-4 pt-2">
          <p className="font-medium text-md">{props.name}</p>
          <p className="text-xs text-slate-500">{props.location}</p>
        </div>
        {/* <div className="flex items-top space-x-1">
          <StarIcon className="size-[22px] fill-orange-600" />
          <p>{props.rating}</p>
        </div> */}
      </div>
    </Link>
  )
}

export default VendorCard;