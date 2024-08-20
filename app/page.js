import Link from "next/link"
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/16/solid"

const HomePage = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center max-w-[650px]">
        <h1 className="text-red-500 font-bold text-2xl m-10 text-center">Homeschooling powered by community!</h1>
        <Link href="/vendors" className="text-blue-400 font-semibold"><ArrowRightEndOnRectangleIcon className="size-10 fill-red-500 hover:fill-red-700"/></Link>
      </div>
    </div>
  )
}

export default HomePage