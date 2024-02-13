import WaitListForm from "./components/WaitListForm";

export default function Home() {
  return (
    <main className='grid'>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 via-red-900 to-black font-medium object-left text-6xl mb-4 inline-block">Where<br/>homeschoolers<br/>connect!</h1>
      <p className="rounded-md border text-sm text-gray-800 border-sky-200 bg-sky-100 p-2 px-3 max-w-fit mb-8">Launching soon!</p>
      <WaitListForm />
    </main>
  );
}
