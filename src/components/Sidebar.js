import {
  ChartBarIcon,
  ShoppingCartIcon,
  ArchiveBoxIcon,
  StarIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  UserGroupIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

export function Sidebar() {
  const navigationLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon, current: true },
    { name: 'Food Order', href: '#', icon: ShoppingCartIcon, current: false },
    { name: 'Manage Menu', href: '#', icon: ArchiveBoxIcon, current: false },
    { name: 'Customer Review', href: '#', icon: StarIcon, current: false },
  ];

  const otherLinks = [
    { name: 'Settings', href: '#', icon: Cog6ToothIcon },
    { name: 'Payment', href: '#', icon: CreditCardIcon },
    { name: 'Accounts', href: '#', icon: UserGroupIcon },
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
  ];

  return (
    <aside className="w-64 bg-white h-screen p-4 flex flex-col">
      <div className="text-2xl font-extrabold text-gray-800 mb-10 tracking-widest px-2">GOODFOOD</div>
      <nav className="flex-grow">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">MENU</h3>
        <ul>
          {navigationLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`flex items-center p-2 my-1 rounded-md text-gray-600 font-medium
                  ${link.current
                    ? 'bg-purple-100 text-purple-600'
                    : 'hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <link.icon className="w-6 h-6 mr-3" />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <h3 className="mt-8 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">OTHERS</h3>
        <ul>
          {otherLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="flex items-center p-2 my-1 rounded-md text-gray-600 font-medium hover:bg-gray-100 hover:text-gray-900"
              >
                <link.icon className="w-6 h-6 mr-3" />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}