'use client'
import { Input, Button } from "@nextui-org/react"
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import ChildFormComponent from "./components/ChildForm";

export default function RegistrationForm() {
  const [formPage, setFormPage] = useState(0);
  const [childCount, setChildCount] = useState(0);
  
  // progress to next page of the the form
  function nextForm() {
    setFormPage(formPage + 1);
  }
  // go back to previous page of form
  function prevForm() {
    setFormPage(formPage - 1);
  }
  // function to increase number of children to include in form
  function addChild() {
    if (childCount < 3) {
      setChildCount(childCount + 1);
    }
  }

  function removeChild() {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  }

  const resetForm = () => {
    setFormPage(0);
  }

  const childForm = (childCount) => {
    let content = [];
    for (let i=0; i <= childCount; i++) {
      if (i == childCount && i != 0) {
        content.push(<li key={`child-${i}`}><ChildFormComponent count={i+1} removable={true} deleteButton={removeChild}/></li>);
      } else {
        content.push(<li key={`child-${i}`}><ChildFormComponent count={i+1} /></li>);
      }
    }
    return content;
  }


  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex justify-center space-x-2 text-xs text-stone-400 font-light items-center w-96 pb-6">
        <p className={(formPage == 0) && 'text-black'}>Parent</p>
        <ChevronRightIcon className="size-4"/>
        <p className={(formPage == 1) && 'text-black'}>Children</p>
        <ChevronRightIcon className="size-4"/>
        <p className={(formPage == 2) && 'text-black'}>Payment</p>
      </div>
      {(formPage == 0) && 
        <form className='flex flex-col items-start w-full px-8' id='form-page-1' onSubmit={nextForm}>
          <div className="w-full space-y-2">
            <Input isRequired isClearable size="sm" type='text' label='Name' className="w-full" />
            <Input isRequired isClearable size="sm" type='email' label='Email' className="w-full" />
            <Input isRequired isClearable size="sm" type='tel' label='Mobile' description="Requested by the vendor" className="w-full" />
          </div>
          <Button className='mt-4 w-full bg-red-500 text-white' type="submit">Next</Button>
        </form>
      }
      {(formPage == 1) &&
        <form className='flex flex-col items-start w-full px-8 space-y-4 overflow-scroll' id='form-page-2'>
          <ul className="w-full">{childForm(childCount)}</ul>
          <div className="w-full gap-2 flex flex-row justify-center">
            <Button className='mt-4 w-full' color='default' onPress={prevForm}>Back</Button>
            {(childCount < 3) && <Button className='mt-4 w-full' color='default' onPress={addChild}>Add Child</Button>}
            <Button className='mt-4 w-full bg-red-500 text-white' color='default' onPress={nextForm}>Next</Button>
          </div>
        </form>
      }
      {(formPage == 2) &&
        <form className='flex flex-col items-start w-4/5 space-y-4' id='form-page-3'>
          <Button className='mt-4 w-full' color="default" onPress={prevForm}>Back</Button>
          <Button className='mt-4  w-full bg-red-500 text-white' >Submit</Button>
        </form>
      }
    </div>
  )
}
                  
          