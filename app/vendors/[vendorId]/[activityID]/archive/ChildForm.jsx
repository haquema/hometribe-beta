import { Input, Checkbox, DatePicker, Textarea, Button } from "@nextui-org/react"
import { TrashIcon } from "@heroicons/react/24/outline"
import { useState } from "react"

export default function ChildFormComponent({ buttonProps }) {
  const [name, setName] = useState('');
  const [dob, setDob] = useState();
  const [homeschooled, setHomeschooled] = useState(null);
  const [healthInfo, setHealthInfo] = useState('');

  function addChild() {
    let childIndex = buttonProps.children.length + 1
    buttonProps.setChildren([...buttonProps.children,
      {
        index: childIndex,
        name: name,
        dob: dob,
        homeschooled: homeschooled,
        healthInfo: healthInfo
      }
    ])
    document.getElementById("childForm").reset();
    buttonProps.hideChildForm();
  }

  return (
    <form id="childForm" className='w-full space-y-4 px-2' > 
      <div className="border border-stone-300 flex flex-col gap-4 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="font-medium">Child's Details</p>
          {/* {removable && <button className='m-0 p-0 bg-transparent' onClick={deleteButton}>
            <TrashIcon className="size-5 hover:text-red-500 cursor-pointer" />
          </button>} */}
        </div>
        <Input isRequired isClearable size="sm" type='text' label={'Child\'s Name'} onValueChange={setName} className="w-full" />
        <DatePicker onChange={(value) => {
          if (value) {
            setDob(value.toString());
          }
        }} isRequired isClearable size="sm" type='date' label='Date of Birth' className="w-full" />
        <div className="flex flex-col w-full">
          <p className="text-sm text-stone-500">Is your child currently being homeschooled?</p>
          <div className="flex gap-4">
            <Checkbox onValueChange={() => setHomeschooled(true)} size="md">Yes</Checkbox>
            <Checkbox onValueChange={() => setHomeschooled(true)} size="md">No</Checkbox>
          </div>
        </div>
        <Textarea
          onValueChange={setHealthInfo}
          label="Health Information"
          placeholder="Please describe any allergies or medical conditions that you feel we should be aware of"
          className="w-full"
        />
        <Button className='w-full' color='primary' onPress={addChild}>Save</Button>
      </div>
    </form>
  )
}