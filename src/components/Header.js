'use client';

import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export function Header({ searchTerm, setSearchTerm }) {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b">
      <div className="flex items-center space-x-8">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <UserCircleIcon className="w-8 h-8 text-gray-500" />
        <span className="font-semibold text-gray-700">Delicious Burger</span>
      </div>
    </header>
  );
}