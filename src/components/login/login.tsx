export function Login() {
  return <form className="max-w-sm my-4 p-4 box-border rounded-md bg-slate-100">
    <div className="my-4 mt-0">
      <label className="m-0 mb-1 block" htmlFor="login_username">Username:</label>
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent focus:ring-slate-300 focus:text-black" id="login_username" type="text" />
    </div>
    
    <div className="my-4">
      <label className="m-0 mb-1 block" htmlFor="login_password">Password:</label>
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent focus:ring-slate-300 focus:text-black" id="login_password" type="password" />
    </div>
    
    <div className="my-4 mb-0">
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent bg-slate-200 cursor-pointer hover:bg-slate-300 hover:ring-slate-300 hover:text-black" type="submit" value="Login" />
    </div>
  </form>
}