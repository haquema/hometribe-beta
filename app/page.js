import Image from 'next/image';
import eventPoster from "../public/event_poster.png"
import Button from './Button';
import { getServerSession } from 'next-auth';


export default async function Home() {
  const session = await getServerSession();

  return (
    <main className=''>
      <div className='image-container border-solid rounded-lg bg-slate-100 grid place-content-center ma'>
        <Image
        src={eventPoster}
        width={300}
        height='auto'
        alt="Poster of the event"
        />
      </div>

      <h1 className='font-bold text-5xl my-8'>OHFs Core Subject Learning</h1>
      <div className='py-4'>
        <h2 className='font-semibold text-2xl mb-2'>Location</h2>
        <p>Top Tutors 459 Roman Road, Bow, London E3 5LX</p>
      </div>
      <div className='py-4'>
        <h2 className='font-semibold text-2xl mb-2'>About this event</h2>
        <p>In collaboration with Top Tutors, OHF is delivering tailored learning support for children aged 7-11. Subjects taught include Maths, English and Science.</p>
      </div>
      <div className='py-4'>
        <h2 className='font-semibold text-2xl mb-2'>When</h2>
        <p>Every Thursday 1-3pm</p>
      </div>
      <Button session={session}/>
    </main>
  );
}
