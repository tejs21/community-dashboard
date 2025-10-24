'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Children } from 'react';

export default function DashboardLayout({ children }) {
  const [searchTerm, setSearchTerm] = useState('');

  const childrenWithProps = Children.map(children, child => {
    if (typeof child.type === 'function') {
      return { ...child, props: { ...child.props, searchTerm } };
    }
    return child;
  });

  return (
    <div className="flex h-screen bg-[#F7F7F9]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <main className="flex-1 overflow-y-auto">
          {childrenWithProps}
        </main>
      </div>
    </div>
  );
}