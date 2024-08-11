// 'use client'
import AboutCard from "./components/AboutCard";
import ProfileCard from "./components/ProfileCard";
import EventCard from "./components/EventCard";
import PhotoSlider from "./components/PhotoSlider";
import poster from "../../../public/profile-stock-1.jpg";

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

const Page = () => {
  return (
    <div className="w-dvw absolute left-0 flex justify-center">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-4 lg:flex-row lg:px-6  lg:space-x-4 items-center">
          <ProfileCard classNames="border border-stone-200 shadow-lg shadow-stone-300 rounded-2xl w-100 h-80 md:w-112 md:h-74 lg:w-96 lg:h-60"/>
          <div className="flex flex-col items-center lg:items-left space-y-4 w-112 flex-wrap">
            <AboutCard classNames="rounded-lg max-h-60 w-112 space-y-2"/>
            <PhotoSlider classNames="w-96" />
          </div>
        </div>
        <div className="flex flex-col my-10 w-112 items-center">
          <p className="grow text-xl font-semibold font-semibold">Suhba Club&apos;s Activities</p>
          <div className="grid grid-cols-2 justify-center gap-6 my-4">
            <EventCard eventInfo={eventInfo} classNames="border shadow shadow-md h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
            <EventCard eventInfo={eventInfo} classNames="border shadow shadow-md h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
            {/* <EventCard eventInfo={eventInfo} classNames="border shadow shadow-md h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/> */}
            <EventCard eventInfo={eventInfo} classNames="border shadow shadow-md h-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"/>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;