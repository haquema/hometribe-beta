import Image from "next/image"
import poster from "../../../../public/stock_photos/photo1.png";
import { CalendarDaysIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import RegistrationModal from "./components/RegistrationModal";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

async function getData() {
  const supabase = createClient()
  const {data} = await supabase.from('events').select().eq('id', 2);

  return data[0]
}

export default async function EventPage() {
  const eventInfo = await getData()

  return (
    <div className="w-screen px-4 justify-center">
      <div className="flex flex-col w-full items-center gap-4 px-2">
        <Image
          className='w-full self-center shadow border-stone-100 border shadow-md hover:shadow-lg rounded-xl w-2/3'
          src={poster}
          width={200}
          height={"auto"}
          alt="Poster of the event"
          priority={true}
        />
        <h1 className="font-semibold text-2xl self-start px-2 ">{eventInfo.name}</h1>
        <div className=" w-full flex justify-start gap-8 items-start px-1 ">
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="size-11 text-stone-500 stroke-1" />
            <div className="flex flex-col">
              <p className="text-sm text-stone-600 font-semibold">Tuesdays</p>
              <p className="text-xs text-stone-500">10am to 2pm</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BanknotesIcon className="size-11 text-stone-500 stroke-1" />
            <p className="text-sm text-stone-600 font-semibold">£10/session</p>
          </div>
        </div>
        <div className="px-2 flex flex-col w-full items-start gap-4">
          <div className='flex flex-col w-full'>
            <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Description</h2>
            <p className="text-sm">{eventInfo.description}</p>
          </div>
          <div className='flex flex-col w-full'>
            <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Location</h2>
            {/* <p className="text-sm">{eventInfo.location}</p> */}
            <iframe className='border-2 border-stone-200 rounded-lg w-full' loading="lazy" allowFullScreen src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDwbWyTwddkgRAoz5yH-rCRk&key=" + process.env.GMAPS_API}></iframe>
          </div>
          <div className='flex flex-col w-full'>
            <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Hosted By</h2>
            <Link href='/vendors/1'><p className="text-sm">Suhba Club</p></Link>
          </div>
          <RegistrationModal classNames=""/>
        </div>
      </div>
    </div>
  )
}