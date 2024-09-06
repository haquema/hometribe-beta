import { Input, Checkbox, DatePicker, Textarea } from "@nextui-org/react"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function ChildFormComponent({count, removable, deleteButton}) {
  return (
    <div className="w-full space-y-4 mt-4">
      <div className="flex justify-between items-center px-1">
        <p className="text-sm font-semibold">Child {count}</p>
        {removable && <button className='m-0 p-0 bg-transparent' onClick={deleteButton}>
          <TrashIcon className="size-5 hover:text-red-500 cursor-pointer" />
        </button>}
      </div>
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
        className="w-full"
      />
    </div>
  )
}