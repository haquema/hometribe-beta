import { useState } from "react";
import { Input, Button, ButtonGroup } from "@nextui-org/react";
import { createClient } from "@/utils/supabase/client";
import ChildFormComponent from "../archive/ChildForm";
import ChildCard from "./ChildCard";
import DeleteButton from "./RemoveChildCard";

export default function Form({ onClose }) {
  const [parentDetails, setParentDetails] = useState({})
  const [children, setChildren] = useState({})
  const [visible, setVisible] = useState(false)

  const noChildren = children.length === 0;
  const maxChildren = children.length === 4

  function showChildForm() {
    setVisible(true);
  }
  function hideChildForm() {
    document.getElementById("childForm").reset();
    setVisible(false);
  }

  function populateCards() {
    let content = [];
    let keys = Object.keys(children)
    keys.forEach((key) => {
      content.push(<li className="list-none" key={key}><ChildCard child={children[key]} deleteButton={<DeleteButton children={children} setChildren={setChildren} childIdentifier={key} />} /></li>)
    });

    return content;
  }

  async function submitForm() {
    const supabase = createClient()
    const { data: data1, error: error1 } = await supabase
      .from('users')
      .insert({ name: parentDetails.name, email: parentDetails.email, mobile: parentDetails.mobile, role: 'regular' })
      .select();
    
    if (error1) {
      console.error(error1)
  
      return
    };
    
    let keys = Object.keys(children)
    keys.forEach(async (key) => {
      const { data: data2, error: error2 } = await supabase.from('children').insert({
        name: children[key].name,
        dob: children[key].dob,
        homeschooled: children[key].homeschooled,
        health_info: children[key].healthInfo,
        user_id: data1[0].id
      })

      if (error2) {
        console.error(error2)
      }
    });

    onClose()
  }

  return (
    <div className="flex flex-col items-center py-4">
      <form className='flex flex-col items-start w-full p-4' id='form-page-1'>
        <div className="w-full space-y-2 border border-transparent rounded-lg border-stone-300 px-2">
          <p className="font-bold">Parent&apos;s Details</p>
          <Input isRequired isClearable size="sm" type='text' label='Name' onValueChange={(value) => setParentDetails({...parentDetails, name: value})} className="w-full" />
          <Input isRequired isClearable size="sm" type='email' label='Email' onValueChange={(value) => setParentDetails({...parentDetails, email: value})} className="w-full" />
          <Input isRequired isClearable size="sm" type='tel' label='Mobile' onValueChange={(value) => setParentDetails({...parentDetails, mobile: value})} description="Requested by the vendor" className="w-full" />
        </div>
      </form>
      <div className="border border-transparent border-stone-300 rounded-lg p-4 px-6">
        <p className="font-bold">Children</p>
        {noChildren && !visible && <p className="text-sm font-light">You haven&apos;t registered a child yet. Press the add child button to do so!</p>}
        {!noChildren && populateCards()}
      </div>
      {visible && <ChildFormComponent buttonProps={{ hideChildForm: hideChildForm, children: children, setChildren: setChildren }} />}
      <div className="flex flex-col w-full gap-2 justify-evenly px-6 py-2">
        {!visible && ((maxChildren) ?
          <Button isDisabled className='w-full' color="primary" onPress={showChildForm}>Add Child</Button> :
          <Button className='w-full' color="secondary" onPress={showChildForm}>Add Child</Button>
        )}
        {noChildren ?
          <Button isDisabled className='mt-4 w-full bg-red-500 text-white'>Register</Button> :
          <Button className='mt-4 w-full bg-red-500 text-white' onPress={submitForm}>Register</Button>
        }
        <Button color="secondary" onPress={() => console.log(children)} >Test Children</Button>
      </div>
    </div>
  )
}