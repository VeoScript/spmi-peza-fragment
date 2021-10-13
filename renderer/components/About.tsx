import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

export default function About() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className="fixed top-5 right-5 flex items-center justify-center space-x-2">
        <button
          type="button"
          onClick={openModal}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            const { shell } = require('electron')
            shell.openExternal('https://github.com/VeoScript/spmi-peza-fragment')
          }}
        >
          <svg className="w-4 h-4 fill-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto bg-white bg-opacity-20"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md px-5 py-3 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 text-white shadow-xl rounded-lg">
                <div className="flex flex-row items-center justify-between w-full">
                  <span className="font-bold text-lg">About</span>
                  <button
                    type="button"
                    className="fixed top-3 right-3 transition ease-in-out duration-200 transform hover:scale-95"
                    onClick={closeModal}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white text-opacity-50" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col w-full py-5 space-y-2">
                  <div className="flex flex-col w-full space-y-1">
                    <h5 className="font-bold text-base text-gray-300">System</h5>
                    <span className="font-light text-sm text-gray-400">
                      This system is designed to make it easier to work with the entry requirements of PEZA. The contents of this system do not affect the PEZA rules and the actual form.
                    </span>
                  </div>
                  <div className="flex flex-col w-full space-y-1">
                    <h5 className="font-bold text-base text-gray-300">Developer</h5>
                    <span className="font-light text-sm text-gray-400">
                      Designed & Developed by Jerome Villaruel (VEOSCRIPT). <br /> Report bugs?
                      <button
                        className="font-light text-blue-300 ml-1 hover:underline"
                        type="button"
                        onClick={() => {
                          const { shell } = require('electron')
                          shell.openExternal('https://github.com/VeoScript/spmi-peza-fragment/issues/new')
                        }}
                      >
                        Click Here.
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
