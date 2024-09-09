'use client'
import { Accordian, Input, Button, Checkbox, DatePicker, Textarea } from "@nextui-org/react"
import { ChevronRightIcon, TrashIcon } from "@heroicons/react/16/solid";
import { useState } from "react";


// The parent section of the multistep registration form
function ParentForm({ setFormPage }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  function onSubmit(event) {
    event.preventDefault();
    console.log(name, email, mobile);
    setFormPage(1);
  }

  return (
    <form className='flex flex-col items-start w-full px-8' id='form-page-1' onSubmit={onSubmit}>
      <div className="w-full space-y-2">
        <Input isRequired isClearable size="sm" type='text' label='Name' onValueChange={setName} className="w-full" />
        <Input isRequired isClearable size="sm" type='email' label='Email' onValueChange={setEmail} className="w-full" />
        <Input isRequired isClearable size="sm" type='tel' label='Mobile' onValueChange={setMobile} description="Requested by the vendor" className="w-full" />
      </div>
      <Button className='mt-4 w-full bg-red-500 text-white' type="submit">Next</Button>
    </form>
  )
}


// the children section of the multistep registration form
function ChildrenForm({prevForm, setFormPage}) {
  const [childCount, setChildCount] = useState(0);
  const [children, setChildren] = useState([])

  // functions to add and remove the number of children in the registration form
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

  // individual child form component
  function ChildFormComponent({count, removable, deleteButton, setChildren}) {
    const [childName, setChildName] = useState('');
    const [dob, setDob] = useState('');
    const [homeschoolStatus, setHomeschoolStatus] = useState(null);
    const [healthInfo, setHealthInfo] = useState('');

    function saveChild() {
      setChildren([...children, {
        childNo: count,
        childName: childName,
        dob: dob,
        homeschoolStatus: homeschoolStatus,
        healthInfo: healthInfo
      }])

      console.log(childName, dob, homeschoolStatus, healthInfo);
    }


    return (
      <div className="w-full space-y-4 mt-4">
        <div className="flex justify-between items-center px-1">
          <p className="text-sm font-semibold">Child {count}</p>
          {removable && <button className='m-0 p-0 bg-transparent' onClick={deleteButton}>
            <TrashIcon className="size-5 hover:text-red-500 cursor-pointer" />
          </button>}
        </div>
        <Input isRequired isClearable size="sm" type='text' label={'Child\'s Name'} onValueChange={setChildName} className="w-full" />
        <DatePicker isRequired isClearable size="sm" type='date' onValueChange={setDob} label='Date of Birth' className="w-full" />
        <div className="flex flex-col w-full">
          <p className="text-sm text-stone-500">Is your child currently being homeschooled?</p>
          <div className="flex gap-4">
            <Checkbox  size="md" onValueChange={setHomeschoolStatus(true)}>Yes</Checkbox>
            <Checkbox  size="md" onValueChange={setHomeschoolStatus(false)}>No</Checkbox>
          </div>
        </div>
        <Textarea
          label="Health Information"
          placeholder="Please describe any allergies or medical conditions that you feel we should be aware of"
          className="w-full"
          onValueChange={setHealthInfo}
        />
        <Button className='mt-4 w-full bg-red-500 text-white' onPress={saveChild}>Save</Button>
      </div>
    )
  }

  // this function correctly populates the children form depending on the childCount
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

  function onSubmit(event) {
    event.preventDefault();

    setFormPage(2)
  }

  return (
    <form className='flex flex-col items-start w-full px-8 space-y-4 overflow-scroll' id='form-page-2' onSubmit={onSubmit}>
      <ul className="w-full">{childForm(childCount)}</ul>
      <div className="w-full gap-2 flex flex-row justify-center">
        <Button className='mt-4 w-full' color='default' onPress={prevForm}>Back</Button>
        {(childCount < 3) && <Button className='mt-4 w-full' color='default' onPress={addChild}>Add Child</Button>}
        <Button className='mt-4 w-full bg-red-500 text-white' type="submit">Next</Button>
      </div>
    </form>
  )
}


// The complete form component that is exported to the registration modal
export default function RegistrationForm() {
  const [formPage, setFormPage] = useState(0);
  const [formInputs, setFormInputs] = useState({
    parentName: '',
    email: '',
    mobile: '',
    children: []
  })
  
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


  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex justify-center space-x-2 text-xs text-stone-400 font-light items-center w-96 pb-6">
        <p className={(formPage == 0) ? 'text-black' : undefined }>Parent</p>
        <ChevronRightIcon className="size-4"/>
        <p className={(formPage == 1) ? 'text-black' : undefined }>Children</p>
        <ChevronRightIcon className="size-4"/>
        <p className={(formPage == 2) ? 'text-black' : undefined }>Payment</p>
      </div>
      {(formPage == 0) && 
        <ParentForm setFormPage={setFormPage}/>
      }
      {(formPage == 1) &&
        <ChildrenForm prevForm={prevForm} setFormPage={setFormPage} />
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
                  
          