"use client"
import { Footer } from '@/components/Footer'
import NewItemForm from '@/components/NewItemForm'
export default function Dashboard() {
  return (
    <>
      <main>
        <NewItemForm />
      </main>
      <Footer />
    </>
  )
}