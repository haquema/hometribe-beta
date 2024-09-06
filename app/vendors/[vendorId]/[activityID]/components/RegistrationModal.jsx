'use client'
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input, DatePicker, Checkbox, Textarea } from "@nextui-org/react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import RegistrationForm from "./RegistrationForm";

export default function RegistrationModal({classNames}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  // const [formPage, setFormPage] = useState

  return (
    <div className={classNames + " w-full"}>
      <Button className="w-full bg-red-600" radius='sm' onPress={onOpen} color="danger">Register</Button>
      <Modal 
        scrollBehavior="inside"
        placement="bottom"
        size="full"
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-2",
          base: "border-stone-300 bg-white dark:bg-[#19172c] text-blakc",
          header: "border-b-[1px] border-stone-300",
          footer: "border-t-[1px] border-stone-300",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center">
                Registration Form
              </ModalHeader>
              <ModalBody>
                <RegistrationForm />
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}