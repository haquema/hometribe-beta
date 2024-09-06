import Image from "next/image"
import poster from "../../../../public/stock_photos/photo1.png";
import { CalendarIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import RegistrationModal from "./components/RegistrationModal";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

export default async function EventPage() {
  const supabase = createClient();
  const { data, error } = await supabase.from("events").select('*').eq('id', 1);
  
  if (error) {
    console.error(error)

    return
  };
  
  const [vendorEvent] = data;
  // console.log(vendorEvent);

  return (
    <div className="w-full px-4 justify-center">
      <div className="flex flex-col w-full items-center gap-2">
        <Image
          className=' my-2 self-center w-full shadow border-stone-100 border shadow-md hover:shadow-lg rounded-xl w-2/3'
          src={poster}
          width={200}
          height={"auto"}
          alt="Poster of the event"
          priority={true}
        />
        <h1 className="self-start text-2xl font-semibold pl-2">{vendorEvent.name}</h1>
        <div className=" w-full flex flex-col justify-evenly items-start my-2 pl-2 gap-1">
          <div className="flex items-center space-x-2">
            <CalendarIcon className="size-11 text-stone-400" strokeWidth={0.8} />
            <div className="flex flex-col">
              <p className="text-sm font-medium">Tuesdays</p>
              <p className="text-sm text-stone-500">10am to 2pm</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BanknotesIcon className="size-11 text-stone-400" strokeWidth={0.8} />
            <p className="text-sm font-medium">£10/session</p>
          </div>
        </div>
        <div className="border border-stone-300 w-full rounded-lg flex flex-col">
          <p className="bg-stone-200 border border-2 border-x-stone-100 border-t-stone-100 rounded-t-lg text-sm py-1 px-2 font-semibold text-stone-600">Registration</p>
          
          <div className="w-full p-4">
            <p className="mb-3 text-stone-600 font-medium">Press the button below to register</p>
            <RegistrationModal classNames=""/>
          </div>
        </div>
        <div className="px-2 flex flex-col w-full items-start gap-4">
          <div className='flex flex-col w-full'>
            <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Description</h2>
            <p className="text-sm">{vendorEvent.description}</p>
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
        </div>
      </div>
    </div>
  )
}