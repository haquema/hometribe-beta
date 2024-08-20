'use client'
import Image from "next/image";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { CalendarDaysIcon, BanknotesIcon } from "@heroicons/react/24/outline";
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
    <button className=" " onClick={onOpen}>
      {/* this is what will be rendered initially */}
      <div className={classNames + " flex flex-row h-28 items-center cursor-pointer"}>
        <Image className="rounded-lg size-24 object-cover" src={eventInfo.image} alt="image of the activity"/>
        <div className="flex flex-col justify-center items-start px-4 h-full py-1 space-y-1 ">
          <p className="font-medium">{eventInfo.name}</p>
          <p className=" text-xs line-clamp-3 text-left">{eventInfo.description}</p>
          {/* <p className="text-xs text-stone-400">{eventInfo.day}, {eventInfo.time} • {eventInfo.location}</p> */}
        </div>
      </div>
      {/* this is the modal that will be displayed upon clicking */}
      <Modal size={'sm'} isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="flex flex-col">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center text-2xl"></ModalHeader>
              <ModalBody className="flex flex-col items-center gap-1">
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
                  </div>
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