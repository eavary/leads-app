import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const mockUser = {
  name: 'Admin',
  email: '',
  avatar: '',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Radial gradient blur overlay */}
      <div 
        className="absolute -top-1/4 -left-1/4 
                    w-3/4 h-3/4 
                    bg-[radial-gradient(closest-corner_at_25%_25%,_#d4d99b_80%,_white_100%)]
                    opacity-80 
                    blur-[200px] 
                    pointer-events-none"
      />

      {/* Sidebar */}
      <div className="flex flex-col justify-between w-64 border-r border-gray-200 p-8 pb-16 relative bg-transparent">
        <nav className="flex flex-col flex-grow">

          <div className="mb-16">
            <img src="/logo.png" alt="Logo" className="h-8 w-auto" />
          </div>

          <ul className="mt-4 space-y-7">
            <li className="font-bold">Leads</li>
            <li>Settings</li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 p-6 font-bold">
          <Avatar>
            <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
            <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          Admin
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto p-8 relative bg-transparent">
        {children}
        </main>
    </div>
  )
}
