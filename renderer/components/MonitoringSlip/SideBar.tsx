import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'

interface TypeProps {
  setItem: any
  setSingleItem: any
}

interface FormData {
  peza_enterprise: String
  ecozone_location: String
  peza_accountable_form_serial_no: String
  processor_name: String
  broker_company_name: String
  date_filed: String
}

const SideBar: React.FC<TypeProps> = ({ setItem, setSingleItem }) => {

  const { handleSubmit, register, reset } = useForm()

  function onSubmit(formData: FormData) {
    const peza_enterprise = formData.peza_enterprise
    const ecozone_location = formData.ecozone_location
    const peza_accountable_form_serial_no = formData.peza_accountable_form_serial_no
    const processor_name = formData.processor_name
    const broker_company_name = formData.broker_company_name
    const date_filed = formData.date_filed

    setSingleItem({
      peza_enterprise: peza_enterprise,
      ecozone_location: ecozone_location,
      peza_accountable_form_serial_no: peza_accountable_form_serial_no,
      processor_name: processor_name,
      broker_company_name: broker_company_name,
      date_filed: date_filed
    })
  }

  return (
    <div className="flex w-full max-w-md h-full overflow-y-auto border border-black border-opacity-10">
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row items-center justify-between w-full p-3">
          <span className="font-bold text-sm text-white">MONITORING SLIP (Single Data)</span>
          <Link href="/home">
            <a className="font-light text-xs px-3 py-2 bg-gray-800 text-white text-center rounded-lg transition ease-in-out duration-200 hover:bg-opacity-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </a>
          </Link>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full px-3 space-y-2">
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">PEZA Enterprise</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('peza_enterprise', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Ecozone Location</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('ecozone_location', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">PEZA Accountable Form Serial No.</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('peza_accountable_form_serial_no', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Processor's Name</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('processor_name', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Broker/Company Name</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('broker_company_name', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Date Filed</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('date_filed', { required: true })} />
            </div>
          </div>
          <div className="flex flex-row items-center w-full space-x-2">
            <button
              className="w-full p-4 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
              type="button"
              onClick={() => {
                reset()
                setItem([])
                setSingleItem([])
              }}
            >
              Clear
            </button>
            <button
              className="w-full p-4 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SideBar