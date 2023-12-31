'use client'
import { Fragment, useState, useEffect  } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  Bars3Icon,
  EllipsisHorizontalIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid'
import { BellIcon, XMarkIcon } from '@heroicons/react/24/outline'







  export function Sidebar() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      const fetchItems = async () => {
        try {
          const response = await fetch('https://api.swappable.com/items');
          if (!response.ok) {
            throw new Error('Failed to fetch');
          }
          const data = await response.json();
          setItems(data);
        } catch (error) {
          console.error('Error:', error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchItems();
    }, []);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center gap-x-6">
            <button type="button" className="-m-3 p-3 md:hidden" onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-5 w-5 text-gray-900" aria-hidden="true" />
            </button>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
          </div>
          <nav className="hidden md:flex md:gap-x-11 md:text-sm md:font-semibold md:leading-6 md:text-gray-700">
            
          </nav>
          <div className="flex flex-1 items-center justify-end gap-x-8">
            <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your profile</span>
              <img
                className="h-8 w-8 rounded-full bg-gray-800"
                src="https://m.media-amazon.com/images/M/MV5BZjZiMGJkMTgtYzUzZi00YTM1LTg3NmEtMGQ1OTUyNDk1MmQ4XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_FMjpg_UX1000_.jpg"
                alt=""
              />
            </a>
          </div>
        </div>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10">
            <div className="-ml-0.5 flex h-16 items-center gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="-ml-0.5">
                <a href="#" className="-m-1.5 block p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>
            </div>
           
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
      <div className="relative isolate overflow-hidden pt-16">
        <header className="pb-4 pt-6 sm:pb-6">
          {/* ... header inside main ... */}
        </header>

        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
              {items.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="overflow-hidden rounded-lg bg-white shadow">
                    <img
                      src="https://img.ltwebstatic.com/images3_pi/2021/11/09/1636455624b80016229255cb33d73d01456b8c0fab_thumbnail_600x.jpg"
                      alt={item.title}
                      className="h-48 w-full object-cover group-hover:opacity-75"
                    />
                    <div className="p-4">
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                      <p className="mt-2 text-sm font-medium text-gray-900">
                        {item.price.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      View Item<span className="sr-only">, {item.title}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}