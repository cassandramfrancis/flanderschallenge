import { type FormEventHandler } from "react";

export interface LoginProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function Login({ onSubmit }: LoginProps) {
  return <form name="login" className="max-w-sm my-4 p-4 box-border rounded-md bg-slate-100" onSubmit={onSubmit}>
    <div className="my-4 mt-0">
      <label className="m-0 mb-1 block" htmlFor="login_username">Username:</label>
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent focus:ring-slate-300 focus:text-black" id="login_username" name="username" type="text" />
    </div>
    
    <div className="my-4">
      <label className="m-0 mb-1 block" htmlFor="login_password">Password:</label>
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent focus:ring-slate-300 focus:text-black" id="login_password" name="password" type="password" />
    </div>
    
    <div className="my-4 mb-0">
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent bg-slate-200 cursor-pointer text-white" type="submit" value="Login" style={{background: '#95bce2'}} />
    </div>
  </form>
}