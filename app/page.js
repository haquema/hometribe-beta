import Link from "next/link"
import { HomeIcon } from "@heroicons/react/16/solid"

const HomePage = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-col items-center max-w-[650px]">
        <h1 className="text-orange-700 font-bold text-5xl m-10 text-center">Homeschooling powered by community!</h1>
        <Link href="/vendors" className="text-blue-400 font-semibold"><HomeIcon className="size-10 fill-red-500 hover:fill-red-700 hover:animate-bounce"/></Link>
      </div>
    </div>
  )
}

export default HomePage