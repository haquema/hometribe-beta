'use client'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { CalendarDaysIcon, ClockIcon, CurrencyPoundIcon } from "@heroicons/react/24/outline";

// const eventInfo = {
//   name: 'Infant\'s Play',
//   image: poster,
//   description: 'The cornerstone of transformative beginning to homeschooling for boys and girls aged 4-6. Through theme based learning, we intertwine academic subjects with islamic studies, providing a comprehensive foundation for young learners. Each session is filled with exploration, discovery, and hands on experiences. Suhba infants provides more than just education we nurture intellectual growth, emotional, social, and spiritual well being',
//   ages: '4-6',
//   day: 'Tuesday',
//   time: '12.45pm to 2.45pm',
//   location: 'Tower Hamlets',
//   price: '£10'
// }

export default function EventModal({eventInfo}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <div className="flex justify-center">
      <Button onPress={onOpen} className="border rounded-lg border-red-500 bg-red-500 text-white mx-2 my-3 px-2 py-1 text-sm">More Info</Button>
      <Modal size={'md'} isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="flex flex-col">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center text-2xl">{eventInfo.name}</ModalHeader>
              <ModalBody className="flex flex-col items-center gap-1">
                <Image
                  className='self-center border border-stone-400 shadow shadow-stone-200 rounded-md'
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
                  <p className="text-sm">{eventInfo.location}</p>
                  {/* <iframe className='border-2 border-stone-200 rounded-lg w-full' loading="lazy" allowFullScreen src={"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJDwbWyTwddkgRAoz5yH-rCRk&key=" + process.env.GMAPS_API}></iframe> */}
                </div>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button className="bg-red-500 text-white" onPress={onClose}>
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}