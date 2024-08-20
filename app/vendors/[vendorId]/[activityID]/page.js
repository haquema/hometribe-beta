import Image from "next/image"
import poster from "../../../../public/infantsdp.png";
import { CalendarDaysIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import RegistrationModal from "./components/RegistrationModal";
import Link from "next/link";

export default function EventPage() {
  const eventInfo = {
    vendorId: 1,
    eventId: 1,
    name: 'Infant\'s Play',
    image: poster,
    description: 'The cornerstone of transformative beginning to homeschooling for boys and girls aged 4-6. Through theme based learning, we intertwine academic subjects with islamic studies, providing a comprehensive foundation for young learners. Each session is filled with exploration, discovery, and hands on experiences. Suhba infants provides more than just education we nurture intellectual growth, emotional, social, and spiritual well being',
    ages: '4-6',
    day: 'Tuesday',
    time: '12.45pm - 2.45pm',
    location: 'Tower Hamlets',
    price: '£10'
  }

  return (
    <div className="w-full px-4 justify-center">
      <div className="flex flex-col w-full items-center gap-4">
        <Image
          className='self-center shadow border-stone-100 border shadow-md hover:shadow-lg rounded-xl w-2/3'
          src={eventInfo.image}
          width={200}
          height={"auto"}
          alt="Poster of the event"
          priority={true}
        />
        <div className=" w-full flex justify-evenly items-center my-2">
          <div className="flex items-center space-x-2">
            <CalendarDaysIcon className="size-11" />
            <div className="flex flex-col">
              <p className="text-base font-semibold">{eventInfo.day}s</p>
              <p className="text-sm">{eventInfo.time}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BanknotesIcon className="size-11" />
            <p className="text-sm font-bold">{eventInfo.price}/session</p>
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