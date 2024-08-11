// 'use client';
// import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { DocumentCheckIcon, IdentificationIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

const VerificationCard = ({classNames}) => {
  return (
    <div className={classNames + " rounded-xl flex flex-col p-4 w-fit space-y-2 "}>
      <p className="font-bold text-lg pb-2">Verifications</p>
      <div className="space-y-1">
        <div className="flex space-x-2 items-center">
          <DocumentCheckIcon className="size-7 text-red-500"/>
          <p className="font-medium text-sm">DBS certified</p>
        </div>
        <div className="flex space-x-2 items-center">
          <PlusCircleIcon className="size-7 text-red-500"/>
          <p className="font-medium text-sm">First Aid Trained</p>
        </div>
        <div className="flex space-x-2 items-center">
          <IdentificationIcon className="size-7 text-red-500"/>
          <p className="font-medium text-sm">ID verified</p>
        </div>
      </div>
    </div>
  )
}

export default VerificationCard;
