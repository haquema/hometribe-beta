import { ShieldCheckIcon } from "@heroicons/react/24/outline";

const Label = ({text}) => {
  return (
    <div className={`border border-stone-500 bg-stone-300 border-2 rounded flex px-1 items-center h-7 space-x-1 m-1`}>
      {/* <ShieldCheckIcon className="size-7 fill-red-500 text-white"/> */}
      <p className="font-semibold text-xs text-stone-700">{text}</p>
    </div>
  )
}

export default Label;