'use client'
import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { Input, DatePicker, Checkbox, Textarea } from "@nextui-org/react";
import { ChevronRightIcon } from "@heroicons/react/16/solid";

export default function RegistrationForm({classNames}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [data, setData] = useState({});
  const [childCount, setChildCount] = useState(1)
  const [formPage, setFormPage] = useState(1);

  const nextForm = (event) => {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    console.log(formData.entries())
    setFormPage(formPage + 1);
    
    
  }

  const addChildForm = () => {
    setChildCount(childCount + 1);
  }

  const ChildForm = ({count}) => {
    return (
      <div className="w-full space-y-4 my-4">
        <p className="text-sm font-semibold">Child {count}</p>
        <Input isRequired isClearable size="sm" type='text' label={'Child\'s Name'} className="w-full" />
        <DatePicker isRequired isClearable size="sm" type='date' label='Date of Birth' className="w-full" />
        <div className="flex flex-col w-full">
          <p className="text-sm text-stone-500">Is your child currently being homeschooled?</p>
          <div className="flex gap-4">
            <Checkbox  size="md">Yes</Checkbox>
            <Checkbox  size="md">No</Checkbox>
          </div>
        </div>
        <Textarea
          label="Health Information"
          placeholder="Please describe any allergies or medical conditions that you feel we should be aware of"
          className="max-w-xs"
        />
      </div>
    )
  }

  const childrenForm = (childCount) => {
    let content = [];
    for (let i = 0; i < childCount; i++) {
      content.push(<li key={`child-${i}`}><ChildForm count={i+1}/></li>);
    }
    return content;
  }

  const additionalChildForm = () => {
    document.getElementById("form-page-2").appendChild
  }

  const resetForm = () => {
    setFormPage(1);
  }


  return (
    <div className={classNames + " "}>
      <Button className="w-full bg-red-600" onPress={onOpen} color="danger">Register</Button>
      <Modal 
        scrollBehavior="inside"
        placement="center"
        size='md'
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        radius="lg"
        classNames={{
          body: "py-6",
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
                <div className="flex flex-col items-center -mt-2">
                  <div className="flex justify-center space-x-2 text-xs text-stone-400 font-light items-center w-96 pb-6">
                    <p className={(formPage == 1) && 'text-black'}>Parent&apos;s details</p>
                    <ChevronRightIcon className="size-4"/>
                    <p className={(formPage == 2) && 'text-black'}>Child&apos;s details</p>
                    <ChevronRightIcon className="size-4"/>
                    <p className={(formPage == 3) && 'text-black'}>Payment</p>
                  </div>
                  {(formPage == 1) && 
                  <form className='flex flex-col items-start w-4/5' id='form-page-1' onSubmit={nextForm}>
                    <div className="w-full space-y-2">
                      <Input isRequired isClearable size="sm" type='text' label='Name' className="w-full" />
                      <Input isRequired isClearable size="sm" type='email' label='Email' className="w-full" />
                      <Input isRequired isClearable size="sm" type='tel' label='Mobile' description="Requested by the vendor" className="w-full" />
                    </div>
                      {/* <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="name">Name</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="text" id="name" name="name" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="email">Email:</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="email" id="email" name="email" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="mobileNumber">Mobile:</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="text" id="mobileNumber" name="mobileNumber" />
                      </div> */}
                    <Button className='mt-4 w-full' color='primary' type="submit">Next</Button>
                  </form>}
                  {(formPage == 2) &&
                  <form className='flex flex-col items-start w-4/5 space-y-4' id='form-page-2' onSubmit={nextForm}>
                    <ul>{childrenForm(childCount)}</ul>
                    {/* <div className="flex flex-col w-full items-start justify-evenly space-y-2">
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="name">Child&apos;s Name</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="text" id="name" name="name" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="email">Date of Birth:</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="date" id="email" name="email" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="mobileNumber">Gender:</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="" id="mobileNumber" name="mobileNumber" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="mobileNumber">Currently being homeschooled?</label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="" id="mobileNumber" name="mobileNumber" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="mobileNumber">Health Info: </label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="" id="mobileNumber" name="mobileNumber" />
                      </div>
                      <div className="flex flex-col w-full space-y-1">
                        <label className="text-xs text-stone-500 hover:text-black" for="mobileNumber">Any other Info: </label>
                        <input className="w-full h-9 rounded border-transparent bg-stone-200" type="" id="mobileNumber" name="mobileNumber" />
                      </div>
                    </div> */}
                    <Button className='mt-4 h-9 w-full' color='secondary' onPress={addChildForm}>Add Child</Button>
                    <Button className='mt-4 h-9 w-full' color='primary' type="submit">Next</Button>
                  </form>}
                </div>
                {/* <form className='' id='2' onSubmit={nextForm}>
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname" />
                  <Button color='default' type="submit">Next</Button>
                </form> */}
              </ModalBody>
              <ModalFooter>
                <Button color="foreground" variant="light" onPress={onClose} onClick={resetForm}>Close</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}