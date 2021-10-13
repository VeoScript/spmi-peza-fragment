import React from 'react'
import { useForm } from 'react-hook-form'

interface TypeProps {
  items: any
  setItem: any
  setSingleItem: any
}

interface FormData {
  quantity_unit: String
  description_of_goods_commodities: String
  unit_value: String
}

const TopBar: React.FC<TypeProps> = ({ items, setItem, setSingleItem }) => {

  const { handleSubmit, register, reset } = useForm()

  function onAdd(formData: FormData) {
    const quantity_unit = formData.quantity_unit
    const description_of_goods_commodities = formData.description_of_goods_commodities
    const unit_value = formData.unit_value

    const initialData = [
      {
        quantity_unit: quantity_unit,
        description_of_goods_commodities: description_of_goods_commodities,
        unit_value: unit_value
      }
    ]

    setItem([...items, ...initialData])
    reset()
  }

  return (
    <div className="flex w-full h-full max-h-56 px-5 border-b border-black border-opacity-10">
      <form onSubmit={handleSubmit(onAdd)} className="flex flex-col w-full max-w-full h-full space-y-2">
        <div className="flex flex-row items-center justify-between w-full px-2 py-5">
          <span className="font-bold text-sm text-white">MONITORING SLIP (Data List)</span>
        </div>
        <div className="flex flex-row items-center w-full space-x-2">
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Quantity/Unit</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('quantity_unit', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Description of Goods/Commodities</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('description_of_goods_commodities', { required: true })} />
            </div>
          </div>
          <div className="flex flex-col w-full space-y-1">
            <label className="px-1 text-xs text-white text-opacity-50">Value</label>
            <div className="flex items center w-full rounded-lg bg-gray-800 text-blue-100 border-2 border-gray-800 focus-within:border-blue-300">
              <input type="text" className="w-full p-3 bg-transparent outline-none" {...register('unit_value', { required: true })} />
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center w-full space-x-2">
          <button
            className="w-32 p-4 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
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
            className="w-32 p-4 text-sm text-white text-opacity-70 rounded-lg bg-gray-800 hover:bg-opacity-70"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default TopBar