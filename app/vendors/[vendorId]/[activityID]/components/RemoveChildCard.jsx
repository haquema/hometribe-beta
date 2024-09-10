import { TrashIcon } from "@heroicons/react/16/solid";
import { Button } from "@nextui-org/react";

export default function DeleteButton({ children, setChildren, childIdentifier }) {
  const { [childIdentifier]: removedChild, ...rest } = children; 

  function deleteChild() {
    setChildren(rest);
  }

  return (
    <Button color='primary' onPress={deleteChild}><TrashIcon className="size-5"/></Button>
  )
}