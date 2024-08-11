import Link from "next/link"

const HomePage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-orange-700 font-bold text-5xl m-10 text-center">Leveraging the power of community to make homeschooling better!</h1>
      <p className="w-max mt-36">List of <Link href="/vendors" className="text-blue-400 font-semibold">Vendors</Link></p>
    </div>
  )
}

export default HomePage