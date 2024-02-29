import Image from 'next/image';
import Link from 'next/link';
import eventPoster from "../public/event_poster.png"
import EnrolButton from './EnrolButton';
import { getServerSession } from 'next-auth';
import { ClockIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default async function Home() {
  const session = await getServerSession();
  
  return (
    <main className='flex flex-col items-start'>
      <Image
        className='self-center border border-slate-300 rounded-md'
        src={eventPoster}
        width={350}
        height={"auto"}
        alt="Poster of the event"
      />
      <h1 className='font-[650] text-[22px] mt-8 mb-4 self-start'>Our Homeschool Family: Core Subject Learning</h1>
      <div className='flex flex-col'>
        <div className='ICON-INFO flex flex-wrap justify-stretch'>
          <div className='min-w-min h-16 flex flex-row pr-6 items-center'>
            <CalendarDaysIcon className='h-3/5 pr-4 text-stone-400 row-span-2'/>
            <div className='flex flex-col'>
              <p className='font-semibold col-span-2 text-base'>Every Thursday</p>
              <p className='text-xs col-span-2 col-start-2 self-start'>Starting Feb 29</p>
            </div>
          </div>
          <div className='min-w-min pr-6 h-16 flex items-center flex-row'>
            <ClockIcon className='h-3/5 pr-4 text-stone-400 row-span-2'/>
            <div className='flex flex-col'>
              <p className='font-semibold col-span-2 text-base'>1:00PM to 3:00PM</p>
            </div>
          </div>
          <div className='min-w-min pr-6 h-16 flex flex-row items-center'>
            <MapPinIcon className='h-3/5 pr-4 text-stone-400 row-span-2'/>
            <div className='flex flex-col'>
              <p className='font-semibold col-span-2 text-base'>Top Tutors</p>
              <p className='text-xs col-span-2 col-start-2 self-start'>Bow, London</p>
            </div>
          </div>
        </div>
      </div>
      <EnrolButton
        session={session} 
        classNames={'bg-red-500 py-2 px-6 rounded-md text-white border-2 w-full my-6'} 
        text='Enrol Now'
      />
      <div className='py-4'>
        <h2 className='w-full border-b border-black font-semibold text-sm mb-2'>About Event</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, debitis neque a hic provident saepe ipsa consequuntur, fugit error amet, eum praesentium repellat laudantium excepturi quas ratione quibusdam impedit vitae iste? Vitae illum odit porro blanditiis maiores quod dicta, iste, nisi illo laudantium veniam cumque fuga harum! Neque, nesciunt aperiam!</p>
      </div>
      <div className='w-full py-4'>
        <h2 className='w-full border-b border-black font-semibold text-sm mb-2'>Location</h2>
        <p className=''>Top Tutors</p>
        <p className='text-sm my-2'>459 Roman Road, London E3 5LX</p>
        <iframe className='border-2 border-green-100 rounded-lg w-full' loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDwbWyTwddkgRAoz5yH-rCRk&key=AIzaSyCoS4kwte9eVyHDzAyUV1FJDUTZva7Q0Gk"></iframe>
      </div>
      <div className='w-full py-4'>
        <h2 className='w-full font-semibold text-sm mb-2 border-b border-black'>Host</h2>
        <p>Our Homeschool Family</p>
        <Link href="/" className='text-[13px] font-medium text-slate-500'>Contact the Host</Link>
      </div>
    </main>
  );
}
