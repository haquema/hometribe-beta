export default function WaitListForm() {

  return (
    <form className="flex flex-col items-center space-y-2">
      <label htmlFor="wait-list-email" className="text-transparent bg-clip-text bg-gradient-to-l from-orange-600 via-red-900 to-black font-semibold">Join the waiting list now for early access</label>  
      <input id="wait-list-email" type="email" className="block border-2 h-8 min-w-96"/>
      <button type="submit" className="block bg-red-500 rounded-full py-1 px-4 max-w-24 ">Join</button>
    </form>
  )
}