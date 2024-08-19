'use client'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { CalendarDaysIcon, ClockIcon, CurrencyPoundIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";

const EventCard = ({classNames, eventInfo}) => {
  const router = useRouter();
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const openDelayed = () => {
    setTimeout(onOpen, 500)
    setTimeout(() => {console.log('this is a test')}, 1000);
  }

  return (
    // button component will wrap around the eventcard element so that modal can be activated
    <button className="" onClick={onOpen}>
      {/* this is what will be rendered initially */}
      <div className={classNames + " flex flex-row h-28 items-center cursor-pointer"}>
        <Image className="rounded-lg size-24 object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" src={eventInfo.image} alt="image of the activity"/>
        <div className="flex flex-col justify-evenly items-start px-4 h-full py-1">
          <p className="font-medium">{eventInfo.name}</p>
          <p className=" text-xs line-clamp-2 text-left">{eventInfo.description}</p>
          <p className="text-xs text-stone-400">{eventInfo.day}, {eventInfo.time} • {eventInfo.location}</p>
        </div>
      </div>
      {/* this is the modal that will be displayed upon clicking */}
      <Modal size={'md'} isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="flex flex-col">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center text-2xl">{eventInfo.name}</ModalHeader>
              <ModalBody className="flex flex-col items-center gap-1">
                <Image
                  className='w-full self-center shadow shadow-stone-200 rounded-md'
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
              <ModalFooter className="flex justify-between w-full">
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button> */}
                <Button className="bg-stone-500 text-white" onPress={() => {router.push(`/vendors/${eventInfo.vendorId}/${eventInfo.eventId}`)}}>
                  Event Page
                </Button>
                <Button className="bg-red-500 text-white" onPress={() => {onClose(); openDelayed();}}>
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </button>
  )
}

export default EventCard;