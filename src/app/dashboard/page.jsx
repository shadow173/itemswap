"use client"
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'
import NewItemForm from '@/components/NewItemForm'
export default function Dashboard() {
  return (
    <>
      <main>
        <Sidebar />
      </main>
      <Footer />
    </>
  )
}