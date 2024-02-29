export default function Login() {
  return (
    <div className="flex relative w-dvw h-dvh -m-8 justify-center">
      <form className="absolute top-1/4 flex flex-col justify-center border border-black rounded-lg w-80 h-20">
        <input className="focus: text-center bg-transparent self-center" type="email" placeholder="email" name='email' />
      </form>
    </div>
  )
}