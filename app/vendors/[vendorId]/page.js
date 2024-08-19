// 'use client'
import AboutCard from "./components/AboutCard";
import ProfileCard from "./components/ProfileCard";
import EventCard from "./components/EventCard";
import PhotoSlider from "./components/PhotoSlider";
import poster1 from "../../../public/infantsdp.png";
import poster2 from "../../../public/juniorsdp.png";
import poster3 from "../../../public/linkdp.png";

const Page = () => {
  return (
    <div className="w-dvw absolute left-0 flex justify-center">
      <div className="flex flex-col">
        <div className="flex flex-col space-y-6 lg:flex-row lg:px-6  lg:space-x-4 items-center">
          <ProfileCard classNames=" rounded-2xl w-112 h-fit"/>
          <div className="flex flex-col items-center lg:items-left space-y-4 w-112 flex-wrap">
            <AboutCard classNames="rounded-lg max-h-60 w-112 space-y-2"/>
            <PhotoSlider classNames="" />
          </div>
        </div>
        <div className="flex flex-col my-10 w-112 items-left">
          <p className="grow text-lg font-semibold font-semibold">Programmes</p>
          <p className="text-xs text-stone-500 mb-2">Click on a programme to find out more and register</p>
          <div className="flex w-full flex-col space-y-2">
            <EventCard eventInfo={eventInfo1} classNames="border border-stone-500 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"/>
            <EventCard eventInfo={eventInfo2} classNames="border border-stone-500 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"/>
            <EventCard eventInfo={eventInfo3} classNames="border border-stone-500 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105"/>
          </div>
        </div>
      </div>
    </div>
  )
}

const eventInfo1 = {
  vendorId: 1,
  eventId: 1,
  name: 'Infant\'s Play',
  image: poster1,
  description: 'The cornerstone of transformative beginning to homeschooling for boys and girls aged 4-6. Through theme based learning, we intertwine academic subjects with islamic studies, providing a comprehensive foundation for young learners. Each session is filled with exploration, discovery, and hands on experiences. Suhba infants provides more than just education we nurture intellectual growth, emotional, social, and spiritual well being',
  ages: '4-6',
  day: 'Tuesday',
  time: '12:45 - 14:45',
  location: 'Tower Hamlets',
  price: '£10'
}

const eventInfo2 = {
  vendorId: 1,
  eventId: 2,
  name: 'Juniors',
  image: poster2,
  description: 'Designed for boys aged 7-11, suhba juniors emphasises a comprehensive approach focused on personal growth and development. This programme extends suhba club’s three core values [tarbiya (3ts), personal development, & suhba] To an advanced stage. The participatory approach aims to inculcate well-rounded individuals who are grounded in islamic values and ethics and also possess empathy, creativity, and leadership skills.',
  ages: '7-11',
  day: 'Tuesday',
  time: '12:15 - 14:45',
  location: 'Tower Hamlets',
  price: '£15'
}

const eventInfo3 = {
  vendorId: 1,
  eventId: 3,
  name: 'Link',
  image: poster3,
  description: 'Guiding boys aged 12-16 through the challenges of adolescence through a diverse array of programmes tailored to this pivotal stage. Suhba link takes everything to a whole new level, incorporating the three core values along with mentorship, regular activities/excursions, health & fitness, leadership development, entrepreneurship, and more. Providing the tools and resources students need to navigate this transformative period.',
  ages: '4-6',
  day: 'Tuesday',
  time: '10:15 - 12:15',
  location: 'Tower Hamlets',
  price: '£10'
}
export default Page;