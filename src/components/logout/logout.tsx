import { type FormEventHandler } from "react";

export interface LogoutProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function Logout({ onSubmit }: LogoutProps) {
  return <form name="Logout" className="max-w-sm my-4 p-4 box-border rounded-md bg-slate-100" onSubmit={onSubmit}>
    <div className="my-4 mb-0">
      <input className="py-1 px-2 w-full rounded-md border-none text-slate-700 ring-transparent bg-slate-200 cursor-pointer hover:bg-slate-300 hover:ring-slate-300 hover:text-black" type="submit" value="Logout" />
    </div>
  </form>
}