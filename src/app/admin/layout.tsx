import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className="flex flex-col justify-between w-64 bg-gray-50 border-r border-gray-200 p-6 pb-16">
        <nav className="flex flex-col flex-grow">

          <div className="mb-16">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          <ul className="mt-4 space-y-2">
            <li className="font-bold">Leads</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 p-6 font-bold">
          <Avatar>
            {/* <AvatarImage src="" /> */}
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
          Admin
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-0 lg:p-4">{children}</main>
    </div>
  )
}
