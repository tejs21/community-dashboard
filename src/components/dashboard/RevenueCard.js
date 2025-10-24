'use client'

import dynamic from 'next/dynamic'

const ClientRevenueCard = dynamic(
  () => import('./ClientRevenueCard').then((mod) => mod.RevenueCard),
  { ssr: false }
)

export function RevenueCard() {
  return <ClientRevenueCard />
}