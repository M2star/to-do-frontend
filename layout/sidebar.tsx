import Link from "next/link"
import { Home as Dashboard} from 'lucide-react';
import { ListTodo } from 'lucide-react';
import { ListChecks } from 'lucide-react';
import { LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="flex flex-col text-center justify-between h-full">
      <div className="text-center h-8 text-2xl font-bold">
        LOGO
      </div>
      <div className="flex-1 flex justify-center items-center text-start">
        <ul className="list-none">
          <li className="mb-1 text-white font-semibold text-md hover:bg-gradient px-8 py-4 rounded-md hover:backdrop-blur-[11.5px] hover:border hover:border-borderBG hover:text-pink"><Link href='/' className="flex gap-5 items-center"><Dashboard /><span>Dashboard</span></Link></li>
          <li className="mb-1 text-white font-semibold text-md hover:bg-gradient px-8 py-4 rounded-md hover:backdrop-blur-[11.5px] hover:border hover:border-borderBG hover:text-pink"><Link href='/' className="flex gap-5 items-center"><ListTodo /><span>Tasks</span></Link></li>
          <li className="mb-1 text-white font-semibold text-md hover:bg-gradient px-8 py-4 rounded-md hover:backdrop-blur-[11.5px] hover:border hover:border-borderBG hover:text-pink"><Link href='/' className="flex gap-5 items-center"><ListChecks /><span>Completed</span></Link></li>
        </ul>
      </div>
      <div className="h-15 text-xl font-semibold flex items-center justify-center gap-5 hover:bg-gradient px-8 py-4 rounded-md hover:backdrop-blur-[11.5px] hover:border hover:border-borderBG hover:text-pink">
      <LogOut /> <span> sing out </span>
      </div>
    </div>
  )
}

export default Sidebar