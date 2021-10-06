import React from 'react'
import { useForm } from 'react-hook-form'

type TypeProps = {
  items: any
  setItem: any
}

interface FormData {
  pkgs_unit: string
  marks_numbers: string
  description_commodities: string
  quantity: string
  weights_measurements: string
  unit_value: string
  total_value: string
}

const SideBar: React.FC< TypeProps> = ({ items, setItem }) => {

  const { handleSubmit, register, reset, formState: { errors, isSubmitting }} = useForm()

  function toSubmit(formData: FormData) {
    const pkgs_unit = formData.pkgs_unit
    const marks_numbers = formData.marks_numbers
    const description_commodities = formData.description_commodities
    const quantity = formData.quantity
    const weights_measurements = formData.weights_measurements
    const unit_value = formData.unit_value
    const total_value = formData.total_value

    const initialData = [{
      pkgs_unit: pkgs_unit,
      marks_numbers: marks_numbers,
      description_commodities: description_commodities,
      quantity: quantity,
      weights_measurements: weights_measurements,
      unit_value: unit_value,
      total_value: total_value
    }]

    setItem([...items, ...initialData])
    reset()
  }

  return (
    <div className="flex flex-col w-full px-3 py-5 space-y-5">
      <div className="font-bold text-sm">SPMI FRAGMENT</div>
      <form onSubmit={handleSubmit(toSubmit)} className="flex flex-col w-full space-y-3">
        <div className="flex flex-col w-full space-y-1">
          <label className="px-1 text-xs text-white text-opacity-50">No. of Pkgs. Units</label>
          <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
            <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('pkgs_unit', { required: true })} />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label className="px-1 text-xs text-white text-opacity-50">Marks & Numbers</label>
          <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
            <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('marks_numbers', { required: true })} />
          </div>
        </div>
        <div className="flex flex-col w-full space-y-1">
          <label className="px-1 text-xs text-white text-opacity-50">Description of Commodities</label>
          <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
            <textarea className="w-full p-3 text-sm bg-transparent outline-none resize-none" rows={4} {...register('description_commodities', { required: true })} />
          </div>
        </div>
        <div className="flex flex-row items-center w-full space-x-2"> 
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Quantity</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('quantity', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Weights/Measurements</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('weights_measurements', { required: true })} />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center w-full space-x-2"> 
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Unit Value</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('unit_value', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Total Value</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 border border-gray-800 focus-within:border-gray-400">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('total_value', { required: true })} />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full space-y-2">
          <button
            className="w-full p-3 text-sm rounded-lg bg-gray-800 hover:bg-opacity-70"
            type="submit"
          >
            Add Commodity
          </button>
          <button
            className="w-full p-3 text-sm rounded-lg bg-gray-800 hover:bg-opacity-70"
            type="button"
            onClick={() => {
              setItem([])
            }}
          >
            Clear All Commodities
          </button>
        </div>
      </form>
    </div>
  )
}

export default SideBar