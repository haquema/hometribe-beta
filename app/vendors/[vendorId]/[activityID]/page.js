import Image from "next/image"
import poster from "../../../../public/infantsdp.png";
import { CalendarDaysIcon, ClockIcon, CurrencyPoundIcon } from "@heroicons/react/24/outline"
import { Button } from "@nextui-org/react";
import RegistrationForm from "./components/EventRegistrationForm";
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
    <div className="max-w-112 flex justify-center">
      <div className="flex flex-col w-full items-center gap-4">
        <h1 className="text-3xl font-bold m-4">{eventInfo.name}</h1>
        <Image
          className='self-center shadow shadow-md rounded-md w-full'
          src={eventInfo.image}
          width={350}
          height={"auto"}
          alt="Poster of the event"
          priority={true}
        />
        <div className="flex justify-evenly items-center my-2 space-x-4">
          <div className="flex items-center space-x-1">
            <CalendarDaysIcon className="size-5" />
            <p className="text-sm font-bold">{eventInfo.day}</p>
          </div>
          <div className="flex items-center space-x-1">
            <ClockIcon className="size-5" />
            <p className="text-sm font-bold">{eventInfo.time}</p>
          </div>
          <div className="flex items-center space-x-1">
            <CurrencyPoundIcon className="size-5" />
            <p className="text-sm font-bold">{eventInfo.price}/session</p>
          </div>
        </div>
        <div className=''>
          <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Description</h2>
          <p className="text-sm">{eventInfo.description}</p>
        </div>
        <div className='w-full'>
          <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Location</h2>
          {/* <p className="text-sm">{eventInfo.location}</p> */}
          <iframe className='border-2 border-stone-200 rounded-lg w-full' loading="lazy" allowFullScreen src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDwbWyTwddkgRAoz5yH-rCRk&key=" + process.env.GMAPS_API}></iframe>
        </div>
        <div className='w-full'>
          <h2 className='w-full border-b border-black font-semibold text-base mb-2'>Hosted By</h2>
          <Link href='/vendors/1'><p className="text-sm">Suhba Club</p></Link>
        </div>
        <RegistrationForm classNames=""/>        
      </div>
    </div>
  )
}